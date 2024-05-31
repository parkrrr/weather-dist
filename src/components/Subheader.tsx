import { ObservationViewModel } from "../model/Model";
import style from './Subheader.module.scss';

export function Subheader(props: { airport: string, latestObservation: ObservationViewModel<any>, onAirportChange: (airport: string | null) => void }) {
    const dateFormatOptions: Intl.DateTimeFormatOptions  = { 
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric', 
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short'
    };

    const readableTimeStamp = props.latestObservation.timestamp.toLocaleString(navigator.language, dateFormatOptions);

    return (
        <h2 className={style.subtitle} onClick={() => props.onAirportChange(window.prompt("Enter airport code"))}>{props.airport} at {readableTimeStamp}</h2>
    )
}