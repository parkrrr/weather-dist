const apiUrl = "https://yg526bw8o1.execute-api.us-east-1.amazonaws.com/dev/observations?location=KIND"


function ViewModel() {
    var self = this;

    self.loading = ko.observable(true);
    self.latestObservation = ko.observable({});
    self.observations = ko.observableArray([]);

    self.getObservations = async function () {
        try {
            self.loading(true);
            var result = await $.ajax({
                type: "GET",
                url: apiUrl,
                crossDomain: true
            });

            result.forEach(o => {
                if (o.barometricPressure.value == null) return;

                let pressure = self.pascalsToInchesMercury(o.barometricPressure.value);

                let vm = new ObservationModel();
                vm.timestamp(o.timestamp);
                vm.pressure(pressure);
                vm.readableTimestamp(moment(new Date(o.timestamp)).toString());

                self.observations.push(vm);
            });

            self.latestObservation(self.observations()[0]);



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
                    labelInterpolationFnc: function (value) {
                        return value.toFixed(2);
                    }
                },
                lineSmooth: Chartist.Interpolation.cardinal({
                    fillHoles: true,
                })
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            self.loading(false);
        }
    }

    self.pascalsToInchesMercury = function (pa) {
        return pa * 0.0002953;
    }

    self.getObservations();
}

function ObservationModel() {
    var self = this;

    self.timestamp = ko.observable();
    self.pressure = ko.observable();
    self.readableTimestamp = ko.observable();   

    self.toDataPoint = function () {
        return {
            x: new Date(self.timestamp()),
            y: self.pressure().toFixed(2)
        }
    }

    self.toString = function () {
        let fixedPressure = self.pressure().toFixed(2);
        let obs = moment(new Date(self.timestamp()));
        return `${fixedPressure} inHg as of ${obs.from(moment().utc())}`;
    }
}

ko.applyBindings(new ViewModel());