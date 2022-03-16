import { PressureModel, TemperatureModel, HumidityModel } from "./datamodel";

class View {
    constructor(name, nullCheck, factory) {
        this.name = name;
        this.nullCheck = nullCheck;
        this.factory = factory;
    }
    referenceValue() { return null; }
    labelInterpolationFnc(v) { return v.toFixed(0); }
    parseValues(values) {
        var parsedValues = [];
        values.forEach(v => {
            if (this.nullCheck(v)) return;
            parsedValues.push(this.factory(v));
        });
    
        return parsedValues;
    }
}

const pressureView = new View("Pressure",
    (v) => v.barometricPressure.value == null,
    (v) => new PressureModel(v.timestamp, v.barometricPressure.value));
pressureView.referenceValue = () => 29.92;
pressureView.labelInterpolationFnc = (v) => v.toFixed(2);

const temperatureView = new View("Temperature",
    (v) => v.temperature.value == null,
    (v) => new TemperatureModel(v.timestamp, v.temperature.value));

const humidityView = new View("Humidity",
    (v) => v.relativeHumidity.value == null,
    (v) => new HumidityModel(v.timestamp, v.relativeHumidity.value));

const dewpointView = new View("Dew Point",
    (v) => v.dewpoint.value == null,
    (v) => new TemperatureModel(v.timestamp, v.dewpoint.value));

export { pressureView, temperatureView, humidityView, dewpointView };
