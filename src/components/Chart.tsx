import { skipPartiallyEmittedExpressions } from 'typescript';
import { ObservationViewModel } from '../model/Model';
import { View } from '../model/View';
import style from './Chart.module.scss'

export function Chart(props: { view: View, observations: ObservationViewModel[] }) {

  const labelOffset = 10;

  const minimum = Math.min(...props.observations.map(o => o.value));
  const maximum = Math.max(...props.observations.map(o => o.value));

  const format = props.observations[0].formatDataPoint;

  console.info("min", minimum, "max", maximum);

  // const pathCommands = props.observations.map((o, i) => {
  //   const x = i / (props.observations.length - 1);
  //   const y =  1 - (o.value - minimum) / (maximum - minimum);
  //   return `${i === 0 ? 'M' : 'L'} ${(x * 100) + leftOffset} ${y * 100}`;
  // }).join(' ');

  // const points = props.observations.map((o, i) => {
  //   const x = i / (props.observations.length - 1);
  //   const y = (1 - (o.value - minimum) / (maximum - minimum));
  //   return { x: ((x * 100) - (leftOffset / props.observations.length)), y: y * 100 };
  // });

  // generate 10 numbers in between `minimum` and `maximum`
  const spacing = (maximum - minimum) / 10;
  const gridLinesRange = Array.from({ length: 10 }, (_, i) => { return spacing * i + minimum; });

  const verticalGridLines = gridLinesRange.map((o, i) => {
    const x = ((i / 9) * (100 - labelOffset)) + labelOffset;
    return { x1: x, y1: 0, x2: x, y2: 100 };
  });

  const horizontalGridLines = gridLinesRange.map((o, i) => {
    const y = ((i / 9) * 100);
    return { x1: 0 + labelOffset, y1: y, x2: 100, y2: y };
  });

  const yAxisLabels = gridLinesRange.sort((a,b) => b-a).map((o, i) => {
    const y = ((i / 9) * 100) ;
    return y;
  });

  const xAxisLabels = gridLinesRange.sort((a,b) => b-a).map((o, i) => {
    const x = ((i / 9) *  (100 )) ;
    return x;
  });

  return (
    <svg id="chart" viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g>
        {verticalGridLines.map(p => <line className={style.gridline} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke-dasharray="1 1" />)}
        {horizontalGridLines.map(p => <line className={style.gridline} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke-dasharray="1 1" />)}
        {yAxisLabels.map((y,i) => <text x={0} y={y} className={style['label-y']}>{format(gridLinesRange[i])}</text>)}
        {xAxisLabels.map((x,i) => <text x={x} y={105} className={style['label-x']}>{format(gridLinesRange[i])}</text>)}
      </g>
      {/* <g className={style.point}>
        {points.map(p => <circle cx={p.x} cy={p.y} r="0.5" />)}
      </g>
      <path className={style.line} d={pathCommands} fill="transparent" stroke-width="1" fill-opacity="0.5" /> */}
    </svg>
  );

}