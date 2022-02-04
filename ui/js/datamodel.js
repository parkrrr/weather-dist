export class DataModel {
    constructor(timestamp) {
        this.timestamp = timestamp;
    }

    readableTimeStamp() {
        return new Date(this.timestamp).toLocaleString(navigator.language, { timeZoneName: 'short' });
    }
}

export class PressureModel extends DataModel {
    constructor(timestamp, val) {
        super(timestamp);

        this.value = this.pascalsToInchesMercury(val);
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

    toString() {
        let obs = moment(new Date(this.timestamp));
        return `${this.formatValue()} as of ${obs.from(moment().utc())}`;
    }

    pascalsToInchesMercury(pa) {
        return pa * 0.0002953;
    }
}

export class TemperatureModel extends DataModel {
    constructor(timestamp, val) {
        super(timestamp);

        this.value = this.celciusToFahrenheit(val);
    }

    formatValue() {
        return `${this.value.toFixed(0)} °F`;
    }

    toDataPoint() {
        return {
            x: new Date(this.timestamp),
            y: this.value.toFixed(0)
        }
    }

    toString() {
        let obs = moment(new Date(this.timestamp));
        return `${this.formatValue()} as of ${obs.from(moment().utc())}`;
    }

    celciusToFahrenheit(c) {
        return (c * 1.8) + 32;
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

    toDataPoint() {
        return {
            x: new Date(this.timestamp),
            y: this.value.toFixed(0)
        }
    }

    toString() {
        let obs = moment(new Date(this.timestamp));
        return `${this.formatValue()} as of ${obs.from(moment().utc())}`;
    }
}