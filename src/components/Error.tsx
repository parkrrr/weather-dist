import style from './Error.module.scss';

export function Error(props: { message: string, onAirportChange: (airport: string) => void }) {
    return (
        <div>
            <div className={style.error} />
            <h2 className={style.errorMessage} onClick={() => props.onAirportChange(window.prompt("Enter airport code"))}>{props.message}</h2>
        </div>
    )
}