import { skipPartiallyEmittedExpressions } from 'typescript';
import { ObservationViewModel } from '../model/Model';
import { View } from '../model/View';
import style from './Chart.module.scss'

export function Chart(props: { view: View, observations: ObservationViewModel[] }) {

  const minimum = Math.min(...props.observations.map(o => o.value));
  const maximum = Math.max(...props.observations.map(o => o.value));

  const pathCommands = props.observations.map((o, i) => {
    const x = i / (props.observations.length - 1);
    const y =  (o.value - minimum) / (maximum - minimum);
    return `${i === 0 ? 'M' : 'L'} ${x * 100} ${y * 100}`;
  }).join(' ');

  const points = props.observations.map((o, i) => {
    const x = i / (props.observations.length - 1);
    const y =  (o.value - minimum) / (maximum - minimum);
    return { x: x * 100, y: y * 100 };
  });

  // generate 10 numbers in between `minimum` and `maximum`
  const spacing = (maximum - minimum) / 10;
  const gridLinesRange = Array.from({ length: 10 }, (_, i) => { return spacing * i + minimum; });


  const gridLines = gridLinesRange.map((o, i) => {
    const x = o;
    return { x1: x * 100, y1: 0, x2: x * 100, y2: 100 };
    
  });

  return (
    <svg id="chart" viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g>
        {gridLines.map(p => 
        <>
        <line className={style.gridline} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke-dasharray="1 1" />
        <line className={style.gridline} x1={p.y1} y1={p.x1} x2={p.y2} y2={p.x2} stroke-dasharray="1 1" />
        </>
        )}     
      </g>
      <g className={style.point}>
        {points.map(p => <circle cx={p.x} cy={p.y} r="0.5" />)}
      </g>
      <path className={style.line} d={pathCommands} fill="transparent" stroke-width="1" fill-opacity="0.5" />
    </svg>
  );

}