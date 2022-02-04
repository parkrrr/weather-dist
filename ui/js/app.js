import { VIEWS } from "./const";
import { HumidityView, PressureView, TemperatureView } from "./view";

function ViewModel() {
    var self = this;

    self.views = VIEWS;

    self.view = ko.observable(new PressureView());

    self.loading = ko.observable(true);

    self.title = ko.observable();
    self.subtitle = ko.observable();

    self.rawObservations = ko.observableArray([]);
    self.observations = ko.observableArray([]);

    self.setView = async function (data, event, view) {
        switch (view) {
            case VIEWS.Pressure:
                self.view(new PressureView());
                break;
            case VIEWS.Temperature:
                self.view(new TemperatureView());
                break;
            case VIEWS.Humidity:
                self.view(new HumidityView());
                break;
        }

        await self.initialize();
    }

    self.initialize = async function () {
        try {
            self.loading(true);

            if (self.rawObservations().length === 0) {
                let values = await self.load();
                self.rawObservations(values);
            }

            self.observations(self.view().parseValues(self.rawObservations()));

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

    self.load = async function () {
        const refDate = new Date();
        refDate.setDate(refDate.getDate() - 3);
        const startDate = refDate.toISOString();

        console.debug(`start date: ${startDate}`);

        const response = await fetch(new Request(`https://api.weather.gov/stations/KIND/observations?limit=25&start=${startDate}`, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/geo+json',
                'User-Agent': 'https://weather.parkrrr.net/',
            }),
        }));
        
        const data = await response.json();
        const observations = data.features.map((r) => r.properties);

        observations.sort(function (a, b) {
            if (!a.timestamp && !b.timestamp) {
                return 0;
            } else if (!a.timestamp) {
                return 1;
            } else if (!b.timestamp) {
                return -1;
            }

            return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        });

        return observations;
    }

    self.createChart = function () {
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