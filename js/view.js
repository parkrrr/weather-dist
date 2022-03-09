'use strict';

import { PressureModel, TemperatureModel, HumidityModel } from "./datamodel";

export class PressureView {  
    referenceValue() {
        return 29.92;
    }

    labelInterpolationFnc(value) {
        return value.toFixed(2);
    }

    parseValues(values) {
        var parsedValues = [];
        values.forEach(o => {
            if (o.barometricPressure.value == null) return;
            let model = new PressureModel(o.timestamp, o.barometricPressure.value);
            parsedValues.push(model);
        });

        return parsedValues;
    }
}

export class TemperatureView {
    referenceValue() {
        return null;
    }

    labelInterpolationFnc(value) {
        return value.toFixed(0);
    }

    parseValues(values) {
        var parsedValues = [];
        values.forEach(o => {
            if (o.temperature.value == null) return;
            let model = new TemperatureModel(o.timestamp, o.temperature.value);
            parsedValues.push(model);
        });

        return parsedValues;
    }
}

export class HumidityView {
    referenceValue() {
        return null;
    }

    labelInterpolationFnc(value) {
        return value.toFixed(0);
    }

    parseValues(values) {
        var parsedValues = [];
        values.forEach(o => {
            if (o.relativeHumidity.value == null) return;
            let model = new HumidityModel(o.timestamp, o.relativeHumidity.value);
            parsedValues.push(model);
        });

        return parsedValues;
    }
}

export class DewpointView {  
    referenceValue() {
        return null;
    }

    labelInterpolationFnc(value) {
        return value.toFixed(0);
    }

    parseValues(values) {
        var parsedValues = [];
        values.forEach(o => {
            if (o.temperature.value == null) return;
            let model = new TemperatureModel(o.timestamp, o.dewpoint.value);
            parsedValues.push(model);
        });

        return parsedValues;
    }
}