import { Header } from './components/Header';
import { Subheader } from './components/Subheader';
import { Chart } from './components/Chart';
import { Navigation } from './components/Navigation';
import { useEffect, useState } from 'preact/hooks';
import { View, pressureView } from './model/View';
import { Observation, ObservationStationCollectionGeoJson } from './spec/weather-gov-api';
import { ObservationViewModel } from './model/Model';
import { Loading } from './components/Loading';
import { Error } from './components/Error';
import './style.scss';

export function App() {
	const [airport, setAirport] = useState<string | null>(null);
	const [observations, setObservations] = useState<Observation[]>([]);
	const [viewModels, setViewModels] = useState<ObservationViewModel[]>([]);
	const [view, setView] = useState<View>(pressureView);
	const [loading, setLoading] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
		refDate.setDate(refDate.getDate() - 3);
		const startDate = refDate.toISOString();

		const request = new Request(`https://api.weather.gov/stations/${airport}/observations?limit=25&start=${startDate}`, {
			method: 'GET',
			headers: new Headers({
				'Accept': 'application/geo+json',
				'User-Agent': 'https://github.com/parkrrr/weather',
			}),
		});

		fetch(request)
			.then(resp => resp.json())
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
			.catch((err) => setErrorMessage(err.message))
			.finally(() => setLoading(false));
	}, [airport]);

	useEffect(() => {
		if (observations == null || observations.length == 0) {
			return;
		}

		setViewModels(view.parseValues(observations));
	}, [view, observations]);

	const changeAirport = (airportCode: string) => {
		// update the airport and push the new param to url
		const normalizedAirportCode = airportCode.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
		setAirport(normalizedAirportCode);
		setErrorMessage(null);

		var searchParams = new URLSearchParams(window.location.search)
		searchParams.set("airport", normalizedAirportCode);
		var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
		history.pushState(null, '', newRelativePathQuery);
	}

	return (loading ? <Loading /> :
		errorMessage ? <Error message={errorMessage} onAirportChange={(a) => changeAirport(a)} /> :
			<>
				<Header latestObservation={viewModels[0]} now={new Date()} />
				<Subheader latestObservation={viewModels[0]} airport={airport} onAirportChange={(a) => changeAirport(a)} />
				<Chart view={view} observations={viewModels} />
				<Navigation onChange={(v) => setView(v)} />
			</>
	);
}
