import { VIEWS } from "./const";
import { PressureView, TemperatureView } from "./view";

function ViewModel() {
    var self = this;

    self.views = VIEWS;

    self.view = ko.observable(new PressureView());

    self.loading = ko.observable(true);

    self.title = ko.observable();
    self.subtitle = ko.observable();

    self.observations = ko.observableArray([]);

    self.setView = function(data, event, view) {
        switch (view) {
            case VIEWS.Pressure:
                self.view(new PressureView());
                break;
            case VIEWS.Temperature:
                self.view(new TemperatureView());
                break;
        }

        self.initialize();
    }

    self.initialize = async function() {
        try {
            self.loading(true);

            let values = await self.view().loadValues();
            self.observations(values);

            let latestObservation = self.observations()[0];
            self.title(latestObservation.toString());
            self.subtitle(latestObservation.readableTimeStamp());

            self.createChart();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            self.loading(false);
        }
    }

    self.createChart = function() {
        new Chartist.Line('.chart', {
            series: [
                {
                    name: 'series-1',
                    data: self.observations().map(o => o.toDataPoint())
                }
            ]
        }, {
            axisX: {
                type: Chartist.FixedScaleAxis,
                divisor: 9,
                labelInterpolationFnc: function (value) {
                    return moment(value).format('ddd HH:mm');
                }
            },
            axisY: {
                referenceValue: self.view().referenceValue(),
                labelInterpolationFnc: self.view().labelInterpolationFnc
            },
            lineSmooth: Chartist.Interpolation.cardinal({
                fillHoles: true,
            })
        });
    }

    self.initialize();
}

ko.applyBindings(new ViewModel());