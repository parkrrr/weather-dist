import { ObservationViewModel } from "../model/Model"

export function Header(props: { latestObservation: ObservationViewModel, now: Date }) {
    var n = Math.floor(props.now.getTime() / 1000);
    var t = new Date(props.latestObservation.timestamp).getTime() / 1000;
    const dateDiff = t - n;

    var second = 1,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let relativeDateString = '';
    const absDateDiff = Math.abs(dateDiff);

    const rtf = new Intl.RelativeTimeFormat("en", {
        localeMatcher: "best fit",
        numeric: "auto",
    });

    if (absDateDiff >= day) {
        relativeDateString = rtf.format(Math.floor(dateDiff / day), 'day');
    } else if (absDateDiff >= hour) {
        relativeDateString = rtf.format(Math.floor(dateDiff / hour), 'hour');
    } else if (absDateDiff >= minute) {
        relativeDateString = rtf.format(Math.floor(dateDiff / minute), 'minute');
    } else {
        relativeDateString = rtf.format(Math.floor(dateDiff / second), 'second');
    }

    return (<h2 class="title">{props.latestObservation.formatValue()} as of {relativeDateString}</h2>);
}
