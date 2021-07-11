'use strict';

import { API_URL } from "./const";
import { PressureModel } from "./datamodel";


export class View {   
    constructor() {
        View.prototype.values = [];
    }

    async load() {
        return await $.ajax({
            type: "GET",
            url: API_URL,
            crossDomain: true
        });
    }
}

export class PressureView extends View {
    constructor() {
        super();
    }

    referenceValue() {
        return 29.92;
    }

    labelInterpolationFnc(value) {
        return value.toFixed(2);
    }

    async loadValues() {
        let results = await super.load();

        results.forEach(o => {
            if (o.barometricPressure.value == null) return;
            let model = new PressureModel(o.timestamp, o.barometricPressure.value);
            super.values.push(model);
        });

        return super.values;
    }
}