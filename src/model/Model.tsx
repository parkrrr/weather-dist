export function pascalsToInchesMercury(pascals: number) { return pascals * 0.0002953 };
export function celciusToFahrenheit(c: number) { return (c * 1.8) + 32; }

export abstract class ObservationViewModel {
    value: number;
    timestamp: Date;

    constructor(timestamp: string) {
        this.timestamp = new Date(timestamp);
    }

    abstract formatValue(): string;

    formatDataPoint(v: number) {
        return v.toFixed(1);
    }

    toDataPoint() {
        return {
            x: this.timestamp,
            y: this.formatDataPoint(this.value)
        }
    };

    parseValues(v: any[]) { return [...v]; }
    readableTimeStamp = () => this.timestamp.toLocaleString(navigator.language, { timeZoneName: 'short' });
}

export class PressureModel extends ObservationViewModel {
    constructor(timestamp: string, val: number) {
        super(timestamp);
        this.value = pascalsToInchesMercury(val);
    }

    formatValue() {
        return `${this.value.toFixed(2)} inHg`;
    }

    formatDataPoint(v: number) {
        return v.toFixed(2);
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