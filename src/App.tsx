import React from 'preact/compat';
import { Header } from './components/Header';
import { Subheader } from './components/Subheader';
import { Chart } from './components/Chart';
import { Navigation } from './components/Navigation';
import { useEffect, useState } from 'preact/hooks';
import { View, getViewByName } from './model/View';
import { Observation, ObservationStationCollectionGeoJson, ProblemDetail } from './spec/weather-gov-api';
import { ObservationViewModel, ViewModelGenericTypes } from './model/Model';
import { Loading } from './components/Loading';
import { ErrorMessage } from './components/ErrorMessage';
import './style.scss';
import { Scale } from './components/Scale';
import { VNode } from 'preact';

export function App() {
	const [airport, setAirport] = useState<string | null>(null);
	const [observations, setObservations] = useState<Observation[]>([]);
	const [viewModels, setViewModels] = useState<ObservationViewModel<ViewModelGenericTypes>[]>([]);
	const [view, setView] = useState<View | null>(getViewByName(localStorage.getItem('view') ?? 'Pressure'));
	const [scale, setScale] = useState<string>(localStorage.getItem('scale') ?? '3');
	const [loading, setLoading] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [isUsingMocks, setIsUsingMocks] = useState<boolean>(false);

	if (airport == null && window.location.search != '') {
		const params = new URLSearchParams(window.location.search);
		const airport = params.get('airport');
		if (airport != null) {
			setAirport(airport.toUpperCase());
		}
	}
	else if (airport == null || airport == '') {
		setAirport('KTYQ');
	}

	useEffect(() => {
		if (airport == null) {
			return;
		}

		setLoading(true);

		const refDate = new Date();
		refDate.setDate(refDate.getDate() - parseInt(scale));
		const startDate = refDate.toISOString();

		const request = new Request(`https://api.weather.gov/stations/${airport}/observations?start=${startDate}`, {
			method: 'GET',
			headers: new Headers({
				'Accept': 'application/geo+json',
				'User-Agent': 'https://github.com/parkrrr/weather',
			}),
		});

		type ExtendedProblemDetail = ProblemDetail & { parameterErrors?: { message: string, parameter: string }[] };

		fetch(request)
			.then(async (resp: Response) => {
				if (resp.status >= 400 && resp.status < 600) {
					const error = await resp.json() as ExtendedProblemDetail;
					if (error.parameterErrors) {
						const parameterErrorString = error.parameterErrors.map(pd => pd.message).join(', ')
						throw Error(parameterErrorString);
					}

					throw Error(error.detail);
				}

				const data = await resp.json();
				if (Object.prototype.hasOwnProperty.call(data, 'mock') == true) {
					setIsUsingMocks(true);
				}
				return data;
			})
			.then((data: ObservationStationCollectionGeoJson) => {
				const obs: Observation[] = data.features.map(((feat: { properties: Observation; }) => feat.properties));

				if (obs.length == 0) {
					setErrorMessage(`No observations from ${airport}`);
					return;
				}

				obs.sort((a, b) => {
					if (!a.timestamp && !b.timestamp) {
						return 0;
					} else if (!a.timestamp) {
						return 1;
					} else if (!b.timestamp) {
						return -1;
					}

					return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
				});

				setObservations(obs);
			})
			.catch((err: Error) => setErrorMessage(err.message))
			.finally(() => setLoading(false));
	}, [airport, scale]);

	useEffect(() => {
		if (view == null || observations == null || observations.length == 0) {
			return;
		}

		const viewModels = observations.filter(o => view.nullCheck(o) == false).map(o => view.viewModelFactory(o));
		setViewModels(viewModels);
	}, [view, observations]);

	useEffect(() => {
		if (view != null)
			localStorage.setItem('view', view.name);
	}, [view])

	useEffect(() => {
		if (scale != null)
			localStorage.setItem('scale', scale.toString());
	}, [scale])

	const changeAirport = (airportCode: string | null) => {
		if (!airportCode) {
			return;
		}

		// update the airport and push the new param to url
		const normalizedAirportCode = airportCode.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
		setAirport(normalizedAirportCode);
		setErrorMessage(null);

		const searchParams = new URLSearchParams(window.location.search)
		searchParams.set("airport", normalizedAirportCode);
		const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
		history.pushState(null, '', newRelativePathQuery);
	}

	let content: VNode | string | null | undefined;

	if (loading) {
		content = <Loading />
	} else if (errorMessage) {
		content = <ErrorMessage message={errorMessage} onAirportChange={(a) => changeAirport(a)} />
	} else if (airport == null) {
		content = <ErrorMessage message="No airport selected" onAirportChange={(a) => changeAirport(a)} />
	} else if (view == null) {
		content = <ErrorMessage message="Invalid view selected" onAirportChange={(a) => changeAirport(a)} />
	} else {
		content = (
			<>
				<Header latestObservation={viewModels[0]} now={new Date()} />
				<Subheader latestObservation={viewModels[0]} airport={airport} onAirportChange={(a) => changeAirport(a)} />
				<Chart view={view} observations={viewModels} />
				<Navigation initialView={view} onChange={(v) => setView(v)} />
				<Scale initialScale={scale} onChange={(s) => setScale(s)} />
			</>
		);
	}

	const mockWarning = (isUsingMocks && <div id="mockwarning">Using mock data</div>);

	return (
		<div>
			{content}
			{mockWarning}
		</div>
	);
}
