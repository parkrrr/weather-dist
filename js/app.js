import { VIEWS } from "./const";
import { humidityView, pressureView, temperatureView, dewpointView } from "./view";

function ViewModel() {
    var self = this;

    self.views = VIEWS;

    self.view = ko.observable(pressureView);

    self.loading = ko.observable(true);

    self.airport = ko.observable();
    self.title = ko.observable();
    self.subtitle = ko.observable();

    self.error = ko.observable();

    self.rawObservations = ko.observableArray([]);
    self.observations = ko.observableArray([]);

    self.setView = async function (data, event) {
        var element = event.target;
        var viewValue = element.getAttribute('value');

        switch (viewValue) {
            case VIEWS.Pressure:
                self.view(pressureView);
                break;
            case VIEWS.Temperature:
                self.view(temperatureView);
                break;
            case VIEWS.Humidity:
                self.view(humidityView);
                break;
            case VIEWS.Dewpoint:
                self.view(dewpointView);
                break;
        }

        await self.initialize();
    }

    self.initialize = async function (reload) {
        try {
            self.loading(true);
            self.error(null)

            if (!reload) {
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams == null || urlParams.size == 0) {
                    self.airport('KTYQ');
                } else {
                    const airport = urlParams.get('a').toUpperCase();
                    if (airport == null || airport == '') {
                        self.airport('KTYQ');
                    } else {
                        self.airport(airport);
                    }
                }
            }

            if (self.rawObservations().length === 0 || reload) {
                let values = await self.load();
                self.rawObservations(values);
            }

            if (self.rawObservations().length === 0) {
                self.error(`No observations from ${self.airport()}`);
                return;
            }

            self.observations(self.view().parseValues(self.rawObservations()));

            let latestObservation = self.observations()[0];
            self.title(self.formatTitle(latestObservation));
            self.subtitle(`${self.airport()} at ${latestObservation.readableTimeStamp()}`);

            self.createChart();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            self.loading(false);
        }
    }

    self.formatTitle = function (model) {
        const rtf = new Intl.RelativeTimeFormat("en", {
            localeMatcher: "best fit",
            numeric: "auto",
        });

        const dateDiff = (new Date(model.timestamp).getTime() - Date.now()) / 1000;
        var second = 1,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let relativeDateString = '';
        const absDateDiff = Math.abs(dateDiff);

        if (absDateDiff > day) {
            relativeDateString = rtf.format(Math.floor(dateDiff / day), 'day');
        } else if (absDateDiff > hour) {
            relativeDateString = rtf.format(Math.floor(dateDiff / hour), 'hour');
        } else if (absDateDiff > minute) {
            relativeDateString = rtf.format(Math.floor(dateDiff / minute), 'minute');
        } else {
            relativeDateString = rtf.format(Math.floor(dateDiff / second), 'second');
        }

        return `${model.formatValue()} as of ${relativeDateString}`;
    }

    self.changeAirport = function () {
        const airport = window.prompt("Enter airport code");
        if (!airport) {
            return;
        }
        
        self.airport(airport);
        self.initialize(true);
    }

    self.load = async function () {
        const refDate = new Date();
        refDate.setDate(refDate.getDate() - 3);
        const startDate = refDate.toISOString();

        const response = await fetch(new Request(`https://api.weather.gov/stations/${self.airport()}/observations?limit=25&start=${startDate}`, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/geo+json',
                'User-Agent': 'https://github.com/parkrrr/weather',
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
                    name: 'observations',
                    data: self.observations().map(o => o.toDataPoint())
                }
            ]
        }, {
            axisX: {
                type: Chartist.FixedScaleAxis,
                divisor: 9,
                labelInterpolationFnc: function (value) {
                    return new Intl.DateTimeFormat('en-GB', {
                        weekday: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                    }).format(new Date(value));
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