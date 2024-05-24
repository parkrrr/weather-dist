import { ObservationViewModel } from '../model/Model';
import { View } from '../model/View';
import style from './Chart.module.scss'

export function Chart(props: { view: View, observations: ObservationViewModel[] }) {
  const labelOffset = 15;

  const minimumValue = Math.min(...props.observations.map(o => o.value));
  const maximumValue = Math.max(...props.observations.map(o => o.value));
  const minimumTimestamp = Math.min(...props.observations.map(o => o.timestamp.getTime()));
  const maximumTimestamp = Math.max(...props.observations.map(o => o.timestamp.getTime()));

  function getRange(minimum: number, maximum: number, count: number) {
    const spacing = (maximum - minimum) / (count - 1);
    return Array.from({ length: count }, (_, i) => spacing * i + minimum);
  }

  const gridLinesRange = getRange(minimumValue, maximumValue, 10);
  const dateLinesRange = getRange(minimumTimestamp, maximumTimestamp, 10).map(o => new Date(o));

  const verticalGridLines = gridLinesRange.map((o, i) => {
    const x = ((i / 9) * (100 - labelOffset)) + labelOffset;
    return { x1: x, y1: 0, x2: x, y2: 100 };
  });

  const horizontalGridLines = gridLinesRange.map((o, i) => {
    const y = ((i / 9) * 100);
    return { x1: 0 + labelOffset, y1: y, x2: 100, y2: y };
  });

  const yAxisLabels = gridLinesRange.sort((a, b) => b - a).map((o, i) => {
    const y = ((i / 9) * 100);
    return y;
  });

  const xAxisLabels = dateLinesRange.sort((a, b) => a.getTime() - b.getTime()).map((o, i) => {
    const x = ((i / 9) * (100 - labelOffset)) + labelOffset;
    return x;
  });

  const points = props.observations.map(o => {
    const x = ((o.timestamp.getTime() - minimumTimestamp) / (maximumTimestamp - minimumTimestamp)) * (100 - labelOffset) + labelOffset;
    const y = 100 - ((o.value - minimumValue) / (maximumValue - minimumValue)) * 100;
    return { x, y };
  });

  const pathCommands = `M ${points[0].x} ${points[0].y} ${points.map(p => `L ${p.x} ${p.y}`).join(' ')}`;

  const valueFormatter = props.observations[0].formatDataPoint;
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <svg id="chart" className={style.chart} viewBox="0 -5 102 125" xmlns="http://www.w3.org/2000/svg">
      <g id="gridlines">
        {verticalGridLines.map(p => <line className={style.gridline} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke-dasharray="1 1" />)}
        {horizontalGridLines.map(p => <line className={style.gridline} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke-dasharray="1 1" />)}
      </g>
      <g id="labels">
        {yAxisLabels.map((y, i) => <text x={0} y={y} className={style['label-y']}>{valueFormatter(gridLinesRange[i])}</text>)}
        {xAxisLabels.map((x, i) =>
          <foreignObject x={x-1} y={101} style="overflow: visible;">
            <span className={style['label-x']}>{dateFormatter.format(dateLinesRange[i])}</span>
          </foreignObject>
        )}
      </g>
      <g id="datapoints" className={style.line}>
        {points.map(p => <circle cx={p.x} cy={p.y} r="0.5" />)}
        <path d={pathCommands} fill="transparent" stroke-width="1" fill-opacity="0.5" />
      </g>
    </svg>
  );

}