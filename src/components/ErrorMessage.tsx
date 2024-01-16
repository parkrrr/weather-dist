import style from './ErrorMessage.module.scss'

export function ErrorMessage(props: { message: string, onAirportChange: (airport: string | null) => void }) {
    return (
        <div>
            <div className={style.error} />
            <h2 className={style.errorMessage} onClick={() => props.onAirportChange(window.prompt("Enter airport code"))}>{props.message}</h2>
        </div>
    )
}