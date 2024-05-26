import { ObservationViewModel } from "../model/Model";
import style from './Subheader.module.scss';

export function Subheader(props: { airport: string, latestObservation: ObservationViewModel<any>, onAirportChange: (airport: string | null) => void }) {
    return (
        <h2 className={style.subtitle} onClick={() => props.onAirportChange(window.prompt("Enter airport code"))}>{props.airport} at {props.latestObservation.readableTimeStamp()}</h2>
    )
}