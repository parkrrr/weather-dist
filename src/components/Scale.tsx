import { useState } from "preact/hooks";
import style from './Navigation.module.scss';

export function Scale(props: { initialScale: number, onChange: (scale: number) => void }) {
    const [activeScale, setActiveScale] = useState(props.initialScale);

    const setScale = (scale: number) => {
        setActiveScale(scale);
        props.onChange(scale);
    }

    const scales = [1,3,5];

    const navItems = scales.map((scale) => {
        return (<li value={scale} className={`${style.view} ${activeScale == scale ? style.active : ''}`} onClick={() => setScale(scale)}>{scale} day</li>);
    });

    return (
        <div className={style['view-container']}>
            <ul>
                {navItems}
            </ul>
        </div>
    )
}