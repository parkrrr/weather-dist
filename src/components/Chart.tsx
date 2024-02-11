import { skipPartiallyEmittedExpressions } from 'typescript';
import { ObservationViewModel } from '../model/Model';
import { View } from '../model/View';
import style from './Chart.module.scss'

export function Chart(props: { view: View, observations: ObservationViewModel[] }) {

  const minimum = Math.min(...props.observations.map(o => o.value));
  const maximum = Math.max(...props.observations.map(o => o.value));

  const pathCommands = props.observations.map((o, i) => {
    const x = i / (props.observations.length - 1);
    const y = 1 - (o.value - minimum) / (maximum - minimum);
    return `${i === 0 ? 'M' : 'L'} ${x * 100} ${y * 100}`;
  }).join(' ');

  const points = props.observations.map((o, i) => {
    const x = i / (props.observations.length - 1);
    const y = 1 - (o.value - minimum) / (maximum - minimum);
    return { x: x * 100, y: y * 100 };
  });

  return (
    <svg id="chart" viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g className={style.point}>
        {points.map(p => <circle cx={p.x} cy={p.y} r="0.2" />)}
      </g>
      <path className={style.line} d={pathCommands} fill="transparent" stroke-width="0.5" fill-opacity="0.5" />
    </svg>
  );

}