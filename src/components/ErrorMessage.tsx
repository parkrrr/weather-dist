export function ErrorMessage(props: { message: string, onAirportChange: (airport: string) => void }) {
    return (
        <div>
            <div class="error" />
            <h2 class="errorMessage" onClick={() => props.onAirportChange(window.prompt("Enter airport code"))}>{props.message}</h2>
        </div>
    )
}