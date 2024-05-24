import { QuantitativeValue } from "../spec/weather-gov-api";

export function pascalsToInchesMercury(pascals: number) { return pascals * 0.0002953 };
export function celciusToFahrenheit(c: number) { return (c * 1.8) + 32; }
export function parseQualityControl(qualityCode: "Z" | "C" | "S" | "V" | "X" | "Q" | "G" | "B" | "T" | undefined): boolean | null {
    switch (qualityCode) {
        case "B":
        case "Q":
        case "X":
            return false;
        case "C":
        case "G":
        case "S":
        case "T":
        case "V":
            return true;
        case "Z":
        default:
            return null;
    }
}

export abstract class ObservationViewModel {
    value: number;
    timestamp: Date;
    hasPassedQualityControl: boolean | null = null;

    constructor(timestamp: string, quantitativeValue: QuantitativeValue) {
        this.timestamp = new Date(timestamp);
        this.hasPassedQualityControl = parseQualityControl(quantitativeValue.qualityControl);
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
    constructor(timestamp: string, quantitativeValue: QuantitativeValue) {
        super(timestamp, quantitativeValue);
        this.value = pascalsToInchesMercury(quantitativeValue.value!);
    }

    formatValue() {
        return `${this.value.toFixed(2)} inHg`;
    }

    formatDataPoint(v: number) {
        return v.toFixed(2);
    }
}

export class TemperatureModel extends ObservationViewModel {
    constructor(timestamp: string, quantitativeValue: QuantitativeValue) {
        super(timestamp, quantitativeValue);
        this.value = celciusToFahrenheit(quantitativeValue.value!);
    }

    formatValue() {
        return `${this.value.toFixed(0)} °F`;
    }
}

export class HumidityModel extends ObservationViewModel {
    constructor(timestamp: string, quantitativeValue: QuantitativeValue) {
        super(timestamp, quantitativeValue);
        this.value = quantitativeValue.value!;
    }

    formatValue() {
        return `${this.value.toFixed(0)}%`;
    }
}