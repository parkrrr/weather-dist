import { ObservationViewModel } from "../model/Model";
import style from './Subheader.module.css';

export function Subheader(props: { airport: string, latestObservation: ObservationViewModel, onAirportChange: (airport: string | null) => void }) {
    return (
        <h2 className={style.subtitle} onClick={() => props.onAirportChange(window.prompt("Enter airport code"))}>{props.airport} at {props.latestObservation.readableTimeStamp()}</h2>
    )
}