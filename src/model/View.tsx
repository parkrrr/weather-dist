import { Observation } from "../spec/weather-gov-api";
import { ObservationViewModel, HumidityModel, TemperatureModel } from "./Model";
import { PressureModel } from "./Model";

class View {
    name: string;
    nullCheck: (a: Observation) => boolean;
    viewModelFactory: (a: Observation) => ObservationViewModel;

    constructor(viewName: string, nullCheck: (a: Observation) => boolean, viewModelFactory: (a: Observation) => ObservationViewModel) {
        this.name = viewName;
        this.nullCheck = nullCheck;
        this.viewModelFactory = viewModelFactory;
    }
    referenceValue(): number { return null; }
    labelInterpolationFunc(v: number): string { return v.toFixed(0); }
    parseValues(values: Observation[]): ObservationViewModel[] {
        var parsedValues: ObservationViewModel[] = [];
        values.forEach(v => {
            if (this.nullCheck(v)) return;
            parsedValues.push(this.viewModelFactory(v));
        });
    
        return parsedValues;
    }
}

const pressureView = new View("Pressure",
    (v) => v.barometricPressure.value == null,
    (v) => new PressureModel(v.timestamp, v.barometricPressure.value));
pressureView.referenceValue = () => 29.92;
pressureView.labelInterpolationFunc = (v) => v.toFixed(2);

const temperatureView = new View("Temperature",
    (v) => v.temperature.value == null,
    (v) => new TemperatureModel(v.timestamp, v.temperature.value));

const humidityView = new View("Humidity",
    (v) => v.relativeHumidity.value == null,
    (v) => new HumidityModel(v.timestamp, v.relativeHumidity.value));

const dewpointView = new View("Dew Point",
    (v) => v.dewpoint.value == null,
    (v) => new TemperatureModel(v.timestamp, v.dewpoint.value));

export { View, pressureView, temperatureView, humidityView, dewpointView };
