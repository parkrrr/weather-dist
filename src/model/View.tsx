import { Observation } from "../spec/weather-gov-api";
import { ObservationViewModel, HumidityModel, TemperatureModel, WindModel } from "./Model";
import { PressureModel } from "./Model";

class View {
    name: string;
    nullCheck: (a: Observation) => boolean;
    viewModelFactory: (a: Observation) => ObservationViewModel<any>;

    constructor(viewName: string,
        referenceValue: number | null = null,
        nullCheck: (a: Observation) => boolean,
        viewModelFactory: (a: Observation) => ObservationViewModel<any>,
        labelInterpolationFunc: (v: number) => string) {
        this.name = viewName;
        this.nullCheck = nullCheck;
        this.viewModelFactory = viewModelFactory;
        this.labelInterpolationFunc = labelInterpolationFunc;
        this.referenceValue = () => referenceValue;
    }
    referenceValue(): number | null { return null; }
    labelInterpolationFunc(v: number): string { return v.toFixed(0); }
    parseValues(values: Observation[]): ObservationViewModel<any>[] {
        var parsedValues: ObservationViewModel<any>[] = [];
        values.forEach(v => {
            if (this.nullCheck(v)) return;
            parsedValues.push(this.viewModelFactory(v));
        });

        return parsedValues;
    }
}

const pressureView = new View("Pressure", 29.92,
    (v) => v.barometricPressure?.value == null,
    (v) => new PressureModel(v.timestamp!, v.barometricPressure!),
    (v) => v.toFixed(2));

const temperatureView = new View("Temperature", null,
    (v) => v.temperature?.value == null,
    (v) => new TemperatureModel(v.timestamp!, v.temperature!),
    (v) => v.toFixed(1));

const humidityView = new View("Humidity", null,
    (v) => v.relativeHumidity?.value == null,
    (v) => new HumidityModel(v.timestamp!, v.relativeHumidity!),
    (v) => v.toFixed(1));

const dewpointView = new View("Dew Point", null,
    (v) => v.dewpoint?.value == null,
    (v) => new TemperatureModel(v.timestamp!, v.dewpoint!),
    (v) => v.toFixed(1));

const windView = new View("Wind", null,
    (v) => v.windSpeed?.value == null,
    (v) => new WindModel(v.timestamp!, v.windSpeed!, v.windDirection!),
    (v) => v.toFixed(1));

const getViewByName = (name: string | null): View | null => {
    if (name == null) {
        return null;
    }

    const view = views.find(v => v.name == name);
    if (view == undefined) {
        return null;
    }

    return view;
}

const views = [temperatureView, dewpointView, humidityView, pressureView, windView];
export { View, views, getViewByName };
