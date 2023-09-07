import { FixedScaleAxis, Interpolation, LineChart } from 'chartist';
import { ObservationViewModel } from '../model/Model';
import { View } from '../model/View';
import { useCallback } from 'preact/hooks';
import './Chart.scss';

export function Chart(props: { view: View, observations: ObservationViewModel[] }) {
    const chart = useCallback(() => {
        new LineChart('#chart', {
            series: [
                {
                    name: 'observations',
                    data: props.observations.map(o => o.toDataPoint())
                }
            ]
        }, {
            axisX: {
                type: FixedScaleAxis,
                divisor: 9,
                labelInterpolationFnc: function (value) {
                    return new Intl.DateTimeFormat('en-GB', {
                        weekday: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                    }).format(new Date(value));
                }
            },
            axisY: {
                referenceValue: props.view.referenceValue(),
                labelInterpolationFnc: props.view.labelInterpolationFunc
            },
            lineSmooth: Interpolation.cardinal({
                fillHoles: true,
            })
        });
    }, [props.view, props.observations]);

    return (<div id="chart" class="ct-minor-second" ref={chart}></div>);

}
