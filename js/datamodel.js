export function pascalsToInchesMercury(pascals) { return pascals * 0.0002953 };
export function celciusToFahrenheit(c) { return (c * 1.8) + 32; }

class DataModel {
    constructor(timestamp, value) {
        this.timestamp = timestamp;
        this.value = value;
    }
    formatValue() { return value; }
    toDataPoint() { return {
        x: new Date(this.timestamp),
        y: this.value.toFixed(0)
    } };
    parseValues(v) { return [...v]; }
    readableTimeStamp = () => new Date(this.timestamp).toLocaleString(navigator.language, { timeZoneName: 'short' });
}

export class PressureModel extends DataModel {
    constructor(timestamp, val) {
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

export class TemperatureModel extends DataModel {
    constructor(timestamp, val) {
        super(timestamp);
        this.value = celciusToFahrenheit(val);
    }

    formatValue() {
        return `${this.value.toFixed(0)} °F`;
    }
}

export class HumidityModel extends DataModel {
    constructor(timestamp, val) {
        super(timestamp);
        this.value = val;
    }

    formatValue() {
        return `${this.value.toFixed(0)}%`;
    }
}