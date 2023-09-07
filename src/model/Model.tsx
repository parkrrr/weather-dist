export function pascalsToInchesMercury(pascals: number) { return pascals * 0.0002953 };
export function celciusToFahrenheit(c: number) { return (c * 1.8) + 32; }

export abstract class ObservationViewModel {
    value: number;
    timestamp: string;

    constructor(timestamp: string) {
        this.timestamp = timestamp;
    }

    abstract formatValue(): string;

    toDataPoint() { return {
        x: new Date(this.timestamp),
        y: this.value.toFixed(0)
    } };

    parseValues(v: any[]) { return [...v]; }
    readableTimeStamp = () => new Date(this.timestamp).toLocaleString(navigator.language, { timeZoneName: 'short' });
}

export class PressureModel extends ObservationViewModel {
    constructor(timestamp: string, val: number) {
        super(timestamp);
        this.value = pascalsToInchesMercury(val);
    }

    formatValue() {
        return `${this.value.toFixed(2)} inHg`;
    }

    toDataPoint() {
        return {
            x: new Date(this.timestamp),
            y: this.value.toFixed(2)
        }
    }
}

export class TemperatureModel extends ObservationViewModel {
    constructor(timestamp: string, val: number) {
        super(timestamp);
        this.value = celciusToFahrenheit(val);
    }

    formatValue() {
        return `${this.value.toFixed(0)} °F`;
    }
}

export class HumidityModel extends ObservationViewModel {
    constructor(timestamp: string, val: number) {
        super(timestamp);
        this.value = val;
    }

    formatValue() {
        return `${this.value.toFixed(0)}%`;
    }
}