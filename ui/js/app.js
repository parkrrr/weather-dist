const apiUrl = "https://yg526bw8o1.execute-api.us-east-1.amazonaws.com/dev/observations?location=KIND"


function ViewModel() {
    var self = this;

    self.latestObservation = ko.observable();
    self.observations = ko.observableArray([]);

    self.getObservations = async function () {
        try {
            var result = await $.ajax({
                type: "GET",
                url: apiUrl,
                crossDomain: true
            });

            result.forEach(o => {
                if (o.barometricPressure.value == null) return;

                let vm = new ObservationModel();
                vm.timestamp(o.timestamp);
                vm.pressure(self.pascalsToInchesMercury(o.barometricPressure.value));
                self.observations.push(vm);
            });

            self.latestObservation(self.observations()[0]);

            console.log(self.observations()[0]);
            var myChart = new Chart('chart', {
                type: 'line',
                data: {
                    datasets: [{
                        data: self.observations().map(o => o.toDataPoint())
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    //responsive: false,
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                                unit: 'hour'
                            }
                        }]
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
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

    self.toDataPoint = function () {
        return {
            x: new Date(self.timestamp()),
            y: self.pressure().toFixed(2)
        }
    }
    
    self.toString = function() {
        return `${self.timestamp()} - ${self.pressure().toFixed(2)} inHg`
    }
}

ko.applyBindings(new ViewModel()); 