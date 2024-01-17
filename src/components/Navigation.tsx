import { useState } from "preact/hooks";
import { View, dewpointView, humidityView, pressureView, temperatureView } from "../model/View";
import style from './Navigation.module.scss';

export function Navigation(props: { onChange: (view: View) => void }) {
    const [activeView, setActiveView] = useState(pressureView);

    const setView = (view: View) => {
        setActiveView(view);
        props.onChange(view);
    }

    return (
        <div className={style['view-container']}>
            <ul>
                <li value="Temperature" className={`${style.view} ${activeView == temperatureView ? style.active : ''}`} onClick={() => setView(temperatureView)}>Temperature</li>
                <li value="Dew Point" className={`${style.view} ${activeView == dewpointView ? style.active : ''}`} onClick={() => setView(dewpointView)}>Dew Point</li>
                <li value="Humidity" className={`${style.view} ${activeView == humidityView ? style.active : ''}`} onClick={() => setView(humidityView)}>Humidity</li>
                <li value="Pressure" className={`${style.view} ${activeView == pressureView ? style.active : ''}`} onClick={() => setView(pressureView)}>Pressure</li>
            </ul>
        </div>
    )
}