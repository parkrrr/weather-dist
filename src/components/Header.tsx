import { ObservationViewModel } from "../model/Model"
import style from './Header.module.css';

export function Header(props: { latestObservation: ObservationViewModel }) {
    const rtf = new Intl.RelativeTimeFormat("en", {
        localeMatcher: "best fit",
        numeric: "auto",
    });

    const dateDiff = (new Date(props.latestObservation.timestamp).getTime() - Date.now()) / 1000;
    var second = 1,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let relativeDateString = '';
    const absDateDiff = Math.abs(dateDiff);

    if (absDateDiff > day) {
        relativeDateString = rtf.format(Math.floor(dateDiff / day), 'day');
    } else if (absDateDiff > hour) {
        relativeDateString = rtf.format(Math.floor(dateDiff / hour), 'hour');
    } else if (absDateDiff > minute) {
        relativeDateString = rtf.format(Math.floor(dateDiff / minute), 'minute');
    } else {
        relativeDateString = rtf.format(Math.floor(dateDiff / second), 'second');
    }

    return (<h2 className={style.title}>{props.latestObservation.formatValue()} as of {relativeDateString}</h2>);
}
