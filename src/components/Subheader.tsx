import React from 'preact/compat';
import { ObservationViewModel, ViewModelGenericTypes } from "../model/Model";
import style from './Subheader.module.scss';
import { getStationByLocation } from '../services/WeatherService';

export function Subheader(props: { airport: string, latestObservation: ObservationViewModel<ViewModelGenericTypes>, onAirportChange: (airport: string | null) => void }) {
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short'
    };

    const readableTimeStamp = props.latestObservation.timestamp.toLocaleString(navigator.language, dateFormatOptions);

    const getNewLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLocation, askForLocation, { enableHighAccuracy: false, timeout: 5000 });
        }
        else {
            askForLocation();
        }
    }

    const getLocation = (position: GeolocationPosition) => {
        getStationByLocation(position).then((station) => {
            props.onAirportChange(station);
        });

    }


    const askForLocation = () => {
        const newLocation = window.prompt("Enter airport code");
        if (newLocation) {
            props.onAirportChange(newLocation);
        }
    }

    return (
        <h2 className={style.subtitle} onClick={getNewLocation}>{props.airport} at {readableTimeStamp}</h2>
    )
}