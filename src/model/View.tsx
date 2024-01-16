import { Observation } from "../spec/weather-gov-api";
import { ObservationViewModel, HumidityModel, TemperatureModel } from "./Model";
import { PressureModel } from "./Model";

class View {
    name: string;
    nullCheck: (a: Observation) => boolean;
    viewModelFactory: (a: Observation) => ObservationViewModel;

    constructor(viewName: string,
        referenceValue: number | null = null,
        nullCheck: (a: Observation) => boolean,
        viewModelFactory: (a: Observation) => ObservationViewModel,
        labelInterpolationFunc: (v: number) => string) {
        this.name = viewName;
        this.nullCheck = nullCheck;
        this.viewModelFactory = viewModelFactory;
        this.labelInterpolationFunc = labelInterpolationFunc;
        this.referenceValue = () => referenceValue;
    }
    referenceValue(): number | null { return null; }
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

const pressureView = new View("Pressure", 29.92,
    (v) => v.barometricPressure?.value == null,
    (v) => new PressureModel(v.timestamp!, v.barometricPressure!.value!),
    (v) => v.toFixed(2));

const temperatureView = new View("Temperature", null,
    (v) => v.temperature?.value == null,
    (v) => new TemperatureModel(v.timestamp!, v.temperature!.value!),
    (v) => v.toFixed(1));

const humidityView = new View("Humidity", null,
    (v) => v.relativeHumidity?.value == null,
    (v) => new HumidityModel(v.timestamp!, v.relativeHumidity!.value!),
    (v) => v.toFixed(1));

const dewpointView = new View("Dew Point", null,
    (v) => v.dewpoint?.value == null,
    (v) => new TemperatureModel(v.timestamp!, v.dewpoint!.value!),
    (v) => v.toFixed(1));

export { View, pressureView, temperatureView, humidityView, dewpointView };
