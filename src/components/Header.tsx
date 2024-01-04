import { ObservationViewModel } from "../model/Model"
import style from './Header.module.css';

export function Header(props: { latestObservation: ObservationViewModel, now: Date }) {
    const rtf = new Intl.RelativeTimeFormat("en", {
        localeMatcher: "best fit",
        numeric: "auto",
    });

    var n = Math.floor(props.now.getTime() / 1000);

    const dateDiff = (new Date(props.latestObservation.timestamp).getTime() - n) / 1000;
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
