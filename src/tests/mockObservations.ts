import { MockObservationStationCollection } from "./MockObservationStationCollection";

const mockObservations: MockObservationStationCollection = {
    "mock": true,
    "@context": [
        "https://geojson.org/geojson-ld/geojson-context.jsonld",
        {
            "@version": "1.1",
            "wx": "https://api.weather.gov/ontology#",
            "s": "https://schema.org/",
            "geo": "http://www.opengis.net/ont/geosparql#",
            "unit": "http://codes.wmo.int/common/unit/",
            "@vocab": "https://api.weather.gov/ontology#",
            "geometry": {
                "@id": "s:GeoCoordinates",
                "@type": "geo:wktLiteral"
            },
            "city": "s:addressLocality",
            "state": "s:addressRegion",
            "distance": {
                "@id": "s:Distance",
                "@type": "s:QuantitativeValue"
            },
            "bearing": {
                "@type": "s:QuantitativeValue"
            },
            "value": {
                "@id": "s:value"
            },
            "unitCode": {
                "@id": "s:unitCode",
                "@type": "@id"
            },
            "forecastOffice": {
                "@type": "@id"
            },
            "forecastGridData": {
                "@type": "@id"
            },
            "publicZone": {
                "@type": "@id"
            },
            "county": {
                "@type": "@id"
            }
        }
    ],
    "type": "FeatureCollection",
    "features": [
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-19T01:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-19T01:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-19T01:35:00+00:00",
                "rawMessage": "KTYQ 190135Z AUTO 00000KT 10SM CLR 24/22 A3014 RMK AO2 T02410224",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102070,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 90.240190512213999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.921827196707778,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-19T00:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-19T00:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-19T00:55:00+00:00",
                "rawMessage": "KTYQ 190055Z AUTO 00000KT 10SM CLR 25/23 A3013 RMK AO2 T02500227",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102030,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 87.082187128531004,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.829368219467224,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-19T00:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-19T00:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-19T00:15:00+00:00",
                "rawMessage": "KTYQ 190015Z AUTO 00000KT 10SM CLR 26/22 A3013 RMK AO2 T02610218",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102030,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 77.227660558725006,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.741679182661112,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T23:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T23:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T23:35:00+00:00",
                "rawMessage": "KTYQ 182335Z AUTO 21003KT 10SM CLR 27/21 A3012 RMK AO2 T02670210",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102000,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 70.976567218249997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.428546224950001,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T23:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T23:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T23:15:00+00:00",
                "rawMessage": "KTYQ 182315Z AUTO 22006KT 10SM CLR 27/21 A3012 RMK AO2 T02670209",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.899999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 220,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102000,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 70.541643680237001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.398380083157779,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T22:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T22:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T22:35:00+00:00",
                "rawMessage": "KTYQ 182235Z AUTO 19007KT 10SM CLR 27/21 A3013 RMK AO2 T02700214",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102030,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 71.467817746462003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.978499936177222,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T21:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T21:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T21:55:00+00:00",
                "rawMessage": "KTYQ 182155Z AUTO 21008KT 10SM CLR 27/21 A3013 RMK AO2 T02700213",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102030,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 71.031204028849999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.941680365008889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T21:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T21:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T21:35:00+00:00",
                "rawMessage": "KTYQ 182135Z AUTO 18007KT 10SM CLR 27/21 A3014 RMK AO2 T02700213",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102070,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 71.031204028849999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.941680365008889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T20:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T20:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T20:55:00+00:00",
                "rawMessage": "KTYQ 182055Z AUTO 19008KT 10SM SCT041 SCT070 BKN100 27/21 A3014 RMK AO2 T02650211",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102070,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.260310586209997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.179718580867224,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1250
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2130
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T20:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T20:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T20:15:00+00:00",
                "rawMessage": "",
                "textDescription": "Light Rain",
                "icon": "https://api.weather.gov/icons/land/day/rain?size=medium",
                "presentWeather": [
                    {
                        "intensity": "light",
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "-RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T19:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T19:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T19:55:00+00:00",
                "rawMessage": "KTYQ 181955Z AUTO 19009KT 10SM CLR 27/21 A3015 RMK AO2 T02700214",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 71.467817746462003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.978499936177222,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T18:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T18:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T18:55:00+00:00",
                "rawMessage": "KTYQ 181855Z AUTO 19010KT 10SM BKN120 27/22 A3015 RMK AO2 T02650218",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 75.424976871864004,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.37486585602278,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3660
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T18:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T18:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T18:15:00+00:00",
                "rawMessage": "KTYQ 181815Z AUTO 19007KT 10SM OVC110 26/21 A3016 RMK AO2 T02550213",
                "textDescription": "Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/ovc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102130,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 77.612217026931006,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.132096777925554,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T17:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T17:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T17:55:00+00:00",
                "rawMessage": "KTYQ 181755Z AUTO 19009KT 10SM OVC110 26/22 A3016 RMK AO2 60011 T02550215 10266 20215",
                "textDescription": "Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/ovc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102130,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 78.568917056337,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.157077278693333,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T17:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T17:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T17:35:00+00:00",
                "rawMessage": "KTYQ 181735Z AUTO 18011KT 10SM SCT095 BKN120 26/22 A3016 RMK AO2 T02610219",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.899999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 20.52,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102130,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 77.700566726396005,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.761708847083334,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2900
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3660
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T16:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T16:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T16:55:00+00:00",
                "rawMessage": "KTYQ 181655Z AUTO 19012KT 10SM BKN110 26/22 A3016 RMK AO2 T02570218",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 22.32,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102130,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 79.078988949565002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.390395822572223,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T16:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T16:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T16:35:00+00:00",
                "rawMessage": "KTYQ 181635Z AUTO 20009KT 10SM SCT085 SCT110 26/22 A3016 RMK AO2 T02550217",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102130,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 79.535937729067996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.182327262925554,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2590
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T16:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T16:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T16:15:00+00:00",
                "rawMessage": "KTYQ 181615Z AUTO 19010KT 10SM CLR 25/22 A3015 RMK AO2 T02500217",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 81.938137162882995,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.695051359253334,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T15:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T15:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T15:55:00+00:00",
                "rawMessage": "KTYQ 181555Z AUTO 19009KT 10SM CLR 25/22 A3015 RMK AO2 T02510216",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 80.954758029779995,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.779374237444443,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T14:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T14:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T14:35:00+00:00",
                "rawMessage": "KTYQ 181435Z AUTO 18006KT 10SM SCT100 BKN120 23/21 A3015 RMK AO2 T02250212",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 92.370394327301995,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.217449185212779,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3660
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T13:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T13:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T13:55:00+00:00",
                "rawMessage": "KTYQ 181355Z AUTO 16008KT 10SM -RA SCT050 BKN100 OVC110 22/21 A3015 RMK AO2 P0009 T02160210",
                "textDescription": "Light Rain",
                "icon": "https://api.weather.gov/icons/land/day/rain?size=medium",
                "presentWeather": [
                    {
                        "intensity": "light",
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "-RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 160,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 96.388643715789001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.332370141467777,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T13:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T13:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T13:35:00+00:00",
                "rawMessage": "KTYQ 181335Z AUTO 16008KT 5SM RA SCT070 OVC100 22/21 A3016 RMK AO2 P0007 T02150207",
                "textDescription": "Rain",
                "icon": "https://api.weather.gov/icons/land/day/rain?size=medium",
                "presentWeather": [
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 160,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102130,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 8050,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 95.206998025995006,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.191516059567778,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2130
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T13:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T13:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T13:15:00+00:00",
                "rawMessage": "",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102130,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 11270,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 92.331503037928996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.446433690435001,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T12:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T12:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T12:55:00+00:00",
                "rawMessage": "KTYQ 181255Z AUTO 21011KT 7SM RA SCT045 OVC090 23/20 A3016 RMK AO2 LTG DSNT S P0001 T02260204",
                "textDescription": "Rain",
                "icon": "https://api.weather.gov/icons/land/day/rain?size=medium",
                "presentWeather": [
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 20.52,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102130,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 11270,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 87.400875357269001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.197689523217779,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1370
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2740
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T12:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T12:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T12:15:00+00:00",
                "rawMessage": "KTYQ 181215Z AUTO 19006KT 10SM CLR 24/20 A3013 RMK AO2 T02410195",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102030,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 75.506546510682995,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.537115381112223,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T11:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T11:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T11:55:00+00:00",
                "rawMessage": "KTYQ 181155Z AUTO 19005KT 10SM CLR 24/20 A3012 RMK AO2 LTG DSNT S T02400195 10253 20230",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102000,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 75.961304990271998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.438989630301666,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T11:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T11:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T11:35:00+00:00",
                "rawMessage": "KTYQ 181135Z AUTO 18005KT 10SM SCT055 SCT100 24/20 A3012 RMK AO2 T02370195",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102000,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 77.344169270090006,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.145097753163334,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1680
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T11:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T11:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T11:15:00+00:00",
                "rawMessage": "KTYQ 181115Z AUTO 19005KT 10SM SCT055 BKN100 24/19 A3011 RMK AO2 T02360193",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101970,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 76.849515809851994,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.022181801701667,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1680
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T10:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T10:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T10:55:00+00:00",
                "rawMessage": "KTYQ 181055Z AUTO 19007KT 10SM SCT042 SCT050 SCT090 24/19 A3010 RMK AO2 T02370192",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101930,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 75.913910904578998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.107752118063889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1280
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2740
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T10:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T10:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T10:15:00+00:00",
                "rawMessage": "KTYQ 181015Z AUTO 18006KT 10SM BKN042 BKN050 24/19 A3010 RMK AO2 T02380192",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101930,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 75.458416563822993,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.205858654722221,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1280
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T09:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T09:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T09:55:00+00:00",
                "rawMessage": "KTYQ 180955Z AUTO 17007KT 10SM BKN039 OVC048 24/19 A3009 RMK AO2 T02390191",
                "textDescription": "Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/ovc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 170,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101900,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 74.540066087515001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.29187950339611,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1190
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1460
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T09:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T09:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T09:35:00+00:00",
                "rawMessage": "KTYQ 180935Z AUTO 17005KT 10SM BKN037 BKN050 BKN055 24/19 A3008 RMK AO2 T02350192",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 170,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 76.834205668200994,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.911782036891665,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1130
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1680
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T08:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T08:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T08:55:00+00:00",
                "rawMessage": "KTYQ 180855Z AUTO 14004KT 10SM BKN050 23/19 A3008 RMK AO2 T02320190",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 140,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 77.268904306132995,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.593132501326668,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T08:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T08:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T08:35:00+00:00",
                "rawMessage": "KTYQ 180835Z AUTO 15003KT 10SM BKN050 BKN060 23/19 A3007 RMK AO2 T02320189",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.899999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 150,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 76.788189207331996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.580580495969443,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1830
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T08:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T08:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T08:15:00+00:00",
                "rawMessage": "KTYQ 180815Z AUTO 18003KT 10SM BKN050 24/19 A3008 RMK AO2 LTG DSNT E T02350186",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 74.009319480765001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.838021119775554,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T07:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T07:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T07:15:00+00:00",
                "rawMessage": "KTYQ 180715Z AUTO 00000KT 10SM CLR 24/18 A3008 RMK AO2 T02390184",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 71.349091527260001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.208559612100554,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T06:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T06:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T06:55:00+00:00",
                "rawMessage": "KTYQ 180655Z AUTO 20005KT 10SM CLR 25/18 A3008 RMK AO2 T02470180",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 66.322557849972995,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.957311232749444,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T06:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T06:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T06:15:00+00:00",
                "rawMessage": "KTYQ 180615Z AUTO 20004KT 10SM CLR 25/19 A3008 RMK AO2 T02510190",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 68.943419585008996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.465744844719445,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T05:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T05:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T05:35:00+00:00",
                "rawMessage": "KTYQ 180535Z AUTO 21006KT 10SM CLR 26/20 A3007 RMK AO2 T02570195",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 68.631515822267005,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.117600690915001,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T05:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T05:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T05:15:00+00:00",
                "rawMessage": "KTYQ 180515Z AUTO 21010G17KT 10SM CLR 26/20 A3007 RMK AO2 T02620195",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 66.629734266393996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.615331950289445,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T04:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T04:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T04:55:00+00:00",
                "rawMessage": "KTYQ 180455Z AUTO 20010KT 10SM CLR 26/20 A3007 RMK AO2 T02630199",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.899999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 67.901945462002999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.631815754029443,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T03:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T03:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T03:55:00+00:00",
                "rawMessage": "KTYQ 180355Z AUTO 20009KT 10SM CLR 27/21 A3006 RMK AO2 T02660206 403350225",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 69.659916065706,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.17941047237111,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T03:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T03:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T03:35:00+00:00",
                "rawMessage": "KTYQ 180335Z AUTO 19010KT 10SM CLR 27/21 A3006 RMK AO2 T02710207",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 68.059464223796994,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.85739232384611,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T03:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T03:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T03:15:00+00:00",
                "rawMessage": "KTYQ 180315Z AUTO 21009KT 10SM CLR 28/21 A3006 RMK AO2 LTG DSNT SE T02750211",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 68.137829495326997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29.532818814435,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T02:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T02:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T02:55:00+00:00",
                "rawMessage": "KTYQ 180255Z AUTO 21006KT 10SM CLR 28/21 A3006 RMK AO2 T02780212",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 67.365408567453002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29.968864215564999,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T02:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T02:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T02:35:00+00:00",
                "rawMessage": "KTYQ 180235Z AUTO 20008KT 10SM CLR 28/21 A3004 RMK AO2 T02820210",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101730,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 65.009190162964998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.375554791556112,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T02:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T02:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T02:15:00+00:00",
                "rawMessage": "KTYQ 180215Z AUTO 20007KT 10SM CLR 28/21 A3004 RMK AO2 T02840207",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 63.082212869571997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.462491351575554,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T01:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T01:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T01:55:00+00:00",
                "rawMessage": "KTYQ 180155Z AUTO 20008KT 10SM CLR 29/21 A3002 RMK AO2 T02870205",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101660,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 61.233287517744998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.710912984572779,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T01:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T01:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T01:35:00+00:00",
                "rawMessage": "",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101660,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 58.394146315633002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.119690102989999,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T00:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-18T00:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-18T00:35:00+00:00",
                "rawMessage": "KTYQ 180035Z AUTO 19010KT 10SM CLR 30/19 A3001 RMK AO2 T03010185",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101630,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 49.878957380381998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.178392699340556,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T23:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T23:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T23:55:00+00:00",
                "rawMessage": "KTYQ 172355Z AUTO 20010KT 10SM CLR 31/19 A3000 RMK AO2 LTG DSNT S T03100189 10335 20287",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.899999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 48.574800740352998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.342133553208889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T22:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T22:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T22:55:00+00:00",
                "rawMessage": "KTYQ 172255Z AUTO 20011G16KT 10SM CLR 33/20 A3000 RMK AO2 T03250200",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 20.52,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.770015645984998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 34.734624806401108,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T22:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T22:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T22:35:00+00:00",
                "rawMessage": "KTYQ 172235Z AUTO 18014KT 10SM CLR 33/20 A2999 RMK AO2 T03260201",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101560,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.796232870699001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 34.92440456330111,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T22:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T22:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T22:15:00+00:00",
                "rawMessage": "KTYQ 172215Z AUTO 20010KT 10SM CLR 33/21 A2999 RMK AO2 T03270205",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.700000000000003,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101560,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 48.716543296337001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 35.348851324872221,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T21:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T21:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T21:15:00+00:00",
                "rawMessage": "KTYQ 172115Z AUTO 22010KT 10SM CLR 33/21 A3002 RMK AO2 T03280206",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.799999999999997,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 220,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101660,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 48.742535253752997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 35.546755125066113,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T20:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T20:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T20:55:00+00:00",
                "rawMessage": "KTYQ 172055Z AUTO 19010KT 10SM CLR 33/20 A3002 RMK AO2 T03310203",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101660,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.048138792061998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 35.662325290758332,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T20:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T20:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T20:15:00+00:00",
                "rawMessage": "KTYQ 172015Z AUTO 20013G17KT 10SM CLR 33/20 A3002 RMK AO2 T03300204",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 24.120000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101660,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.606318875900001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 35.623269374067775,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T19:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T19:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T19:55:00+00:00",
                "rawMessage": "KTYQ 171955Z AUTO 20012G18KT 10SM CLR 33/20 A3003 RMK AO2 T03310201",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 22.32,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101690,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 46.470051076217999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 35.507455599197776,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T19:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T19:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T19:35:00+00:00",
                "rawMessage": "KTYQ 171935Z AUTO 21011G14KT 10SM CLR 33/21 A3002 RMK AO2 T03270214",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.700000000000003,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 20.52,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101660,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 51.487437524832998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 36.105294269930553,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T19:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T19:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T19:15:00+00:00",
                "rawMessage": "KTYQ 171915Z AUTO 24008KT 10SM SCT050 31/23 A3003 RMK AO2 T03080228",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.800000000000001,
                    "qualityControl": "S"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.800000000000001,
                    "qualityControl": "S"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 240,
                    "qualityControl": "S"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "S"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101690,
                    "qualityControl": "S"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 62.454091806740003,
                    "qualityControl": "S"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "S"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 35.027124502987775,
                    "qualityControl": "S"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T18:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T18:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T18:35:00+00:00",
                "rawMessage": "KTYQ 171835Z AUTO 28004KT 10SM BKN050 BKN065 BKN080 29/22 A3005 RMK AO2 T02930224",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 280,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 66.440502430275998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.69768528741222,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1980
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2440
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T18:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T18:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T18:15:00+00:00",
                "rawMessage": "KTYQ 171815Z AUTO 25007KT 10SM SCT050 BKN060 BKN075 31/22 A3005 RMK AO2 LTG DSNT E T03090215",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 250,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 57.370905903995002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 34.011008989093334,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1830
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2290
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T16:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T16:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T16:35:00+00:00",
                "rawMessage": "KTYQ 171635Z AUTO 25007KT 10SM CLR 32/21 A3007 RMK AO2 T03200212",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 250,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 52.911185885423002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 35.088360127334447,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T16:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T16:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T16:15:00+00:00",
                "rawMessage": "KTYQ 171615Z AUTO 22010G14KT 10SM CLR 32/22 A3008 RMK AO2 T03170217",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.699999999999999,
                    "qualityControl": "S"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.699999999999999,
                    "qualityControl": "S"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 220,
                    "qualityControl": "S"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "S"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "S"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 55.491941850979003,
                    "qualityControl": "S"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "S"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 35.154473509723886,
                    "qualityControl": "S"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T15:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T15:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T15:55:00+00:00",
                "rawMessage": "KTYQ 171555Z AUTO 23010G14KT 10SM CLR 32/22 A3008 RMK AO2 LTG DSNT NW T03150218",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 230,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 56.469772052753001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 34.997256990045557,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T15:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T15:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T15:35:00+00:00",
                "rawMessage": "KTYQ 171535Z AUTO 23009KT 10SM CLR 31/22 A3008 RMK AO2 LTG DSNT NW T03140219",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.899999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 230,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 57.139500433233003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 34.962262986221667,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T14:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T14:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T14:55:00+00:00",
                "rawMessage": "KTYQ 171455Z AUTO 22008KT 10SM SCT120 30/22 A3008 RMK AO2 T03040221",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 220,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 61.238331793520999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.886275434466114,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3660
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T14:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T14:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T14:15:00+00:00",
                "rawMessage": "KTYQ 171415Z AUTO 22007KT 10SM CLR 30/22 A3008 RMK AO2 T02950223",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 220,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 65.279796437190001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.886731598046666,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T13:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T13:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T13:55:00+00:00",
                "rawMessage": "KTYQ 171355Z AUTO 21006KT 10SM CLR 29/22 A3008 RMK AO2 T02880220",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 66.745176827565999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.742891777686111,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T13:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T13:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T13:35:00+00:00",
                "rawMessage": "KTYQ 171335Z AUTO 21008KT 10SM SCT100 28/22 A3008 RMK AO2 T02810218",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 68.673165381914004,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.680703756694999,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T12:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T12:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T12:55:00+00:00",
                "rawMessage": "KTYQ 171255Z AUTO 22010G15KT 10SM CLR 27/22 A3007 RMK AO2 T02700216",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 220,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.348107815890998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29.053373784477778,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T12:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T12:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T12:15:00+00:00",
                "rawMessage": "KTYQ 171215Z AUTO 21007KT 10SM CLR 26/22 A3006 RMK AO2 T02560215",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 78.103771108223995,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.254931801159444,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T11:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T11:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T11:35:00+00:00",
                "rawMessage": "KTYQ 171135Z AUTO 19008KT 10SM CLR 25/22 A3005 RMK AO2 T02450216",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 83.907687657500006,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.196478511056668,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T11:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T11:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T11:15:00+00:00",
                "rawMessage": "KTYQ 171115Z AUTO 19007KT 10SM CLR 24/21 A3004 RMK AO2 T02380213",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.800000000000001,
                    "qualityControl": "S"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.300000000000001,
                    "qualityControl": "S"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "S"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "S"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101730,
                    "qualityControl": "S"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 85.914168532619996,
                    "qualityControl": "S"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "S"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.478869956129444,
                    "qualityControl": "S"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T10:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T10:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T10:35:00+00:00",
                "rawMessage": "KTYQ 171035Z AUTO 19006KT 10SM CLR 23/21 A3003 RMK AO2 T02300210",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101690,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 88.518307938961001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.666866929517223,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T09:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T09:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T09:55:00+00:00",
                "rawMessage": "KTYQ 170955Z AUTO 18005KT 10SM CLR 23/21 A3002 RMK AO2 T02290208",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101660,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 87.967382979693994,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.542481666692222,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T09:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T09:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T09:35:00+00:00",
                "rawMessage": "KTYQ 170935Z AUTO 19004KT 10SM CLR 23/21 A3001 RMK AO2 T02260206",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101630,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 88.485653517637999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.226014286293889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T08:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T08:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T08:35:00+00:00",
                "rawMessage": "KTYQ 170835Z AUTO 19005KT 10SM CLR 23/21 A3000 RMK AO2 T02300205",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 85.835267622616996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.596809765701668,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T08:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T08:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T08:15:00+00:00",
                "rawMessage": "KTYQ 170815Z AUTO 19005KT 10SM CLR 23/20 A3000 RMK AO2 T02270204",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 86.872119433362002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.293883118537778,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T07:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T07:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T07:35:00+00:00",
                "rawMessage": "KTYQ 170735Z AUTO 20003KT 10SM CLR 24/21 A3000 RMK AO2 T02350205",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 83.28144302314,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.080126567826667,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T06:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T06:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T06:55:00+00:00",
                "rawMessage": "KTYQ 170655Z AUTO 19003KT 10SM CLR 24/20 A3000 RMK AO2 T02350204",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 82.769186172583005,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.066750972283888,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T06:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T06:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T06:35:00+00:00",
                "rawMessage": "KTYQ 170635Z AUTO 18004KT 10SM CLR 24/21 A3000 RMK AO2 LTG DSNT N T02370205",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 82.283925377781998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.274080273753334,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T06:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T06:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T06:15:00+00:00",
                "rawMessage": "KTYQ 170615Z AUTO 18005KT 10SM CLR 24/21 A3000 RMK AO2 T02400205",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 80.812741418060995,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.565666025916112,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T05:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T05:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T05:55:00+00:00",
                "rawMessage": "KTYQ 170555Z AUTO 18005KT 10SM CLR 24/21 A3000 RMK AO2 T02410205 10309 20240",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 80.328938784293001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.663033401589999,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T05:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T05:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T05:15:00+00:00",
                "rawMessage": "KTYQ 170515Z AUTO 19004KT 10SM CLR 25/21 A3000 RMK AO2 T02500205",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 76.118338832511,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.543089958404444,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T04:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T04:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T04:55:00+00:00",
                "rawMessage": "KTYQ 170455Z AUTO 19005KT 10SM CLR 26/20 A3000 RMK AO2 T02550204",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 73.432288802550005,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.022954207622224,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T04:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T04:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T04:35:00+00:00",
                "rawMessage": "KTYQ 170435Z AUTO 20005KT 10SM CLR 26/20 A3000 RMK AO2 T02620203",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 70.01552593241,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.587490182472223,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T04:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T04:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T04:15:00+00:00",
                "rawMessage": "KTYQ 170415Z AUTO 19006KT 10SM CLR 26/20 A3000 RMK AO2 T02640203",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 69.193533757880999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.844863171462777,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T03:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T03:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T03:55:00+00:00",
                "rawMessage": "KTYQ 170355Z AUTO 19007KT 10SM CLR 27/20 A2999 RMK AO2 T02710203 403260145",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101560,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 66.400960324465004,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.71741321009889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T02:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T02:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T02:15:00+00:00",
                "rawMessage": "KTYQ 170215Z AUTO 19006KT 10SM CLR 28/20 A2997 RMK AO2 T02810199",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T01:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T01:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T01:35:00+00:00",
                "rawMessage": "KTYQ 170135Z AUTO 18008KT 10SM CLR 29/20 A2996 RMK AO2 T02870195",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 57.557265686979001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.201778162051667,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T01:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T01:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T01:15:00+00:00",
                "rawMessage": "KTYQ 170115Z AUTO 18008KT 10SM CLR 29/19 A2995 RMK AO2 T02900193",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 55.866110263494001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.426729065899444,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T00:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T00:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T00:55:00+00:00",
                "rawMessage": "KTYQ 170055Z AUTO 18009KT 10SM CLR 30/19 A2995 RMK AO2 T02950193",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 54.275350833932997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.959424446955001,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T00:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-17T00:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-17T00:35:00+00:00",
                "rawMessage": "KTYQ 170035Z AUTO 18010KT 10SM CLR 30/19 A2995 RMK AO2 T03010193",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 52.433435668971001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.602270480911113,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T23:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T23:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T23:55:00+00:00",
                "rawMessage": "KTYQ 162355Z AUTO 19012KT 10SM CLR 31/19 A2995 RMK AO2 T03100194 10326 20306",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 22.32,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 50.112031687265997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.639119603473887,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T23:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T23:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T23:35:00+00:00",
                "rawMessage": "KTYQ 162335Z AUTO 20010KT 10SM CLR 31/20 A2995 RMK AO2 T03120195",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 49.852989979725997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.92201398952389,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T23:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T23:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T23:15:00+00:00",
                "rawMessage": "KTYQ 162315Z AUTO 20010G18KT 10SM CLR 32/19 A2995 RMK AO2 T03150192",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 48.103015694078998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.065256825177777,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T22:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T22:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T22:55:00+00:00",
                "rawMessage": "KTYQ 162255Z AUTO 19013G16KT 10SM CLR 32/19 A2995 RMK AO2 T03180192",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 24.120000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.290705571173,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.396662034400556,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T22:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T22:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T22:15:00+00:00",
                "rawMessage": "",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.899999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 25.920000000000002,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 46.151848006351997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.320794420079444,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T21:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T21:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T21:55:00+00:00",
                "rawMessage": "KTYQ 162155Z AUTO 19013G19KT 10SM CLR 32/19 A2995 RMK AO2 T03200191",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 24.120000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 46.467312651813003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.555356572140553,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T21:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T21:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T21:35:00+00:00",
                "rawMessage": "KTYQ 162135Z AUTO 20017G21KT 10SM CLR 32/19 A2995 RMK AO2 T03210194",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.076223303593999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.86080904078667,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T20:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T20:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T20:35:00+00:00",
                "rawMessage": "KTYQ 162035Z AUTO 21013G18KT 10SM CLR 32/20 A2996 RMK AO2 T03210201",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 24.120000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 49.165289712761997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 34.346402681143886,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T20:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T20:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T20:15:00+00:00",
                "rawMessage": "KTYQ 162015Z AUTO 20008G18KT 10SM CLR 32/20 A2997 RMK AO2 T03200198",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101490,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 48.534177382273,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 34.01882258875667,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T19:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T19:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T19:55:00+00:00",
                "rawMessage": "KTYQ 161955Z AUTO 20010KT 10SM CLR 32/20 A2998 RMK AO2 T03200195",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.638706864776999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.814750889940555,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T19:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T19:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T19:35:00+00:00",
                "rawMessage": "KTYQ 161935Z AUTO 20014G17KT 10SM CLR 32/19 A2998 RMK AO2 T03170193",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.856797558978997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 33.349172859299443,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T18:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T18:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T18:55:00+00:00",
                "rawMessage": "KTYQ 161855Z AUTO 19012KT 10SM CLR 32/18 A3000 RMK AO2 T03170182",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 22.32,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 44.677033510167,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.699558887483889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T18:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T18:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T18:35:00+00:00",
                "rawMessage": "KTYQ 161835Z AUTO 18010G16KT 10SM CLR 31/18 A3000 RMK AO2 T03140176",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 43.761591168137997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 32.072385754874446,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T18:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T18:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T18:15:00+00:00",
                "rawMessage": "KTYQ 161815Z AUTO 16011KT 10SM CLR 31/17 A3001 RMK AO2 T03080172",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 160,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 20.52,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101630,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 44.154483862644,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.273776150199446,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T17:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T17:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T17:55:00+00:00",
                "rawMessage": "KTYQ 161755Z AUTO 17010G16KT 10SM CLR 31/17 A3002 RMK AO2 T03070171 10307 20186",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 30.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 170,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101660,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 44.127425833747999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 31.130208998412776,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T16:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T16:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T16:55:00+00:00",
                "rawMessage": "KTYQ 161655Z AUTO 15012KT 10SM SCT050 29/16 A3004 RMK AO2 T02910160",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 16,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 150,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 22.32,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101730,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 45.112500239623003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 29.220328989276666,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T16:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T16:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T16:35:00+00:00",
                "rawMessage": "KTYQ 161635Z AUTO 19011KT 10SM SCT050 29/16 A3005 RMK AO2 T02890156",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 15.6,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 20.52,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 44.485415047811003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.927148070609444,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T15:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T15:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T15:55:00+00:00",
                "rawMessage": "KTYQ 161555Z AUTO 17006KT 10SM CLR 28/15 A3005 RMK AO2 T02780149",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 14.9,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 170,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 45.340058431745,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.861353354357778,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T15:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T15:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T15:35:00+00:00",
                "rawMessage": "KTYQ 161535Z AUTO 16007KT 10SM SCT065 27/14 A3005 RMK AO2 T02700144",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 14.4,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 160,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 46.006930193264999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.182651465896665,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1980
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T15:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T15:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T15:15:00+00:00",
                "rawMessage": "KTYQ 161515Z AUTO 15008KT 10SM CLR 27/14 A3005 RMK AO2 T02650139",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 13.9,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 150,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 45.871234989613001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.403304469173332,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T14:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T14:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T14:55:00+00:00",
                "rawMessage": "KTYQ 161455Z AUTO 15008KT 10SM SCT060 26/14 A3006 RMK AO2 T02600135",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 13.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 150,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 46.033933286111001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.857552702470556,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1830
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T14:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T14:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T14:35:00+00:00",
                "rawMessage": "KTYQ 161435Z AUTO 17007KT 10SM SCT060 25/13 A3006 RMK AO2 T02540132",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 13.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 170,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 46.778184569895998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.21698593043611,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T13:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T13:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T13:55:00+00:00",
                "rawMessage": "KTYQ 161355Z AUTO 14006KT 10SM CLR 24/13 A3007 RMK AO2 T02390126",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.6,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 140,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 49.197810268481,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.630165045899446,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T13:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T13:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T13:35:00+00:00",
                "rawMessage": "KTYQ 161335Z AUTO 15007KT 10SM CLR 23/12 A3007 RMK AO2 T02300122",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 150,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 50.596153777858,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.676677348643889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T13:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T13:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T13:15:00+00:00",
                "rawMessage": "KTYQ 161315Z AUTO 13006KT 10SM CLR 22/12 A3007 RMK AO2 T02230120",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 130,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 52.101408051023,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.94598121022111,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T12:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T12:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T12:55:00+00:00",
                "rawMessage": "",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.1,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 140,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 55.069470086617002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.143480607817221,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T12:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T12:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T12:35:00+00:00",
                "rawMessage": "KTYQ 161235Z AUTO 15007KT 10SM CLR 20/12 A3006 RMK AO2 T02040118",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 150,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 57.768496200846997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T12:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T12:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T12:15:00+00:00",
                "rawMessage": "KTYQ 161215Z AUTO 14003KT 10SM CLR 19/12 A3007 RMK AO2 T01930120",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 140,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 62.665082019798,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T11:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T11:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T11:35:00+00:00",
                "rawMessage": "KTYQ 161135Z AUTO 13003KT 10SM CLR 17/12 A3007 RMK AO2 T01720122",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 130,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.437660318587007,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T11:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T11:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T11:15:00+00:00",
                "rawMessage": "KTYQ 161115Z AUTO 00000KT 10SM CLR 16/12 A3007 RMK AO2 T01620121",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 16.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.1,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 76.680104218775,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T10:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T10:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T10:55:00+00:00",
                "rawMessage": "KTYQ 161055Z AUTO 00000KT 10SM CLR 16/11 A3006 RMK AO2 T01550112",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 15.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 75.561525205891002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T10:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T10:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T10:35:00+00:00",
                "rawMessage": "KTYQ 161035Z AUTO 14004KT 10SM CLR 15/11 A3006 RMK AO2 T01480110",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 14.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 140,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 77.996464399491998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T09:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T09:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T09:55:00+00:00",
                "rawMessage": "KTYQ 160955Z AUTO 00000KT 10SM CLR 16/11 A3006 RMK AO2 T01570106",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 15.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.6,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 71.685179561715003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T09:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T09:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T09:15:00+00:00",
                "rawMessage": "KTYQ 160915Z AUTO 00000KT 10SM CLR 16/11 A3006 RMK AO2 T01590109",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 15.9,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.9,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.200612907017003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T08:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T08:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T08:55:00+00:00",
                "rawMessage": "KTYQ 160855Z AUTO 14005KT 10SM CLR 16/11 A3005 RMK AO2 T01590110",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 15.9,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 140,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.681626358143006,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T08:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T08:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T08:35:00+00:00",
                "rawMessage": "KTYQ 160835Z AUTO 13005KT 10SM CLR 15/11 A3005 RMK AO2 T01480112",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 14.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 130,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 79.037940585224007,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T07:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T07:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T07:55:00+00:00",
                "rawMessage": "KTYQ 160755Z AUTO 11003KT 10SM CLR 16/11 A3006 RMK AO2 T01610112",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 16.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.717763656238006,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T06:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T06:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T06:35:00+00:00",
                "rawMessage": "KTYQ 160635Z AUTO 00000KT 10SM CLR 17/12 A3007 RMK AO2 T01660115",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 16.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 71.852173109681004,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T05:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T05:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T05:55:00+00:00",
                "rawMessage": "KTYQ 160555Z AUTO 13003KT 10SM CLR 18/11 A3007 RMK AO2 T01790111 10260 20177",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.1,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 130,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 64.452592593432996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T05:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T05:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T05:15:00+00:00",
                "rawMessage": "KTYQ 160515Z AUTO 00000KT 10SM CLR 18/12 A3007 RMK AO2 T01770117",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 67.912597254413001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T04:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T04:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T04:55:00+00:00",
                "rawMessage": "KTYQ 160455Z AUTO 12003KT 10SM CLR 19/12 A3007 RMK AO2 T01860115",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 63.338761356737997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T04:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T04:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T04:35:00+00:00",
                "rawMessage": "KTYQ 160435Z AUTO 12003KT 10SM CLR 19/11 A3006 RMK AO2 T01940109",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.9,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 57.906410264107002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T04:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T04:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T04:15:00+00:00",
                "rawMessage": "KTYQ 160415Z AUTO 12003KT 10SM CLR 20/11 A3006 RMK AO2 T01970110",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 57.215872556541001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T03:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T03:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T03:55:00+00:00",
                "rawMessage": "KTYQ 160355Z AUTO 12003KT 10SM CLR 20/11 A3006 RMK AO2 T01970109 402870157",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.9,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 56.837212836105003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T03:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T03:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T03:15:00+00:00",
                "rawMessage": "KTYQ 160315Z AUTO 12005KT 10SM CLR 21/11 A3006 RMK AO2 T02070107",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 52.724426858034001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T02:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T02:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T02:55:00+00:00",
                "rawMessage": "KTYQ 160255Z AUTO 12004KT 10SM CLR 21/11 A3006 RMK AO2 T02140105",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 49.837544689491999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.896869222447776,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T02:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T02:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T02:35:00+00:00",
                "rawMessage": "KTYQ 160235Z AUTO 12005KT 10SM CLR 22/11 A3006 RMK AO2 T02200105",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 48.043068975738997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.510013467699999,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T02:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T02:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T02:15:00+00:00",
                "rawMessage": "KTYQ 160215Z AUTO 12005KT 10SM CLR 22/11 A3006 RMK AO2 T02200108",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 49.012005696754002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.535313482081666,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T01:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T01:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T01:55:00+00:00",
                "rawMessage": "KTYQ 160155Z AUTO 11005KT 10SM CLR 22/11 A3006 RMK AO2 T02210111",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.1,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 49.694282786354997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.663128494977222,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T01:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T01:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T01:15:00+00:00",
                "rawMessage": "KTYQ 160115Z AUTO 11004KT 10SM CLR 23/12 A3007 RMK AO2 T02290120",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 50.237879171058999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.557322400577778,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T00:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T00:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T00:55:00+00:00",
                "rawMessage": "KTYQ 160055Z AUTO 11004KT 10SM CLR 24/11 A3007 RMK AO2 T02400109",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.9,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 43.713849044897003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.596972725061111,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T00:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-16T00:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-16T00:35:00+00:00",
                "rawMessage": "KTYQ 160035Z AUTO 11004KT 10SM CLR 25/11 A3008 RMK AO2 T02490106",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.6,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 40.602608303171003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.505734772360555,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T22:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T22:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T22:35:00+00:00",
                "rawMessage": "KTYQ 152235Z AUTO 12008KT 10SM CLR 28/10 A3008 RMK AO2 T02800100",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 32.490115870985001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.21694996280111,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T22:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T22:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T22:15:00+00:00",
                "rawMessage": "KTYQ 152215Z AUTO 12006KT 10SM CLR 28/09 A3008 RMK AO2 T02790094",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 9.4000000000000004,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101860,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 31.391382134166999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.088186518383889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T21:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T21:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T21:55:00+00:00",
                "rawMessage": "KTYQ 152155Z AUTO 11007KT 10SM CLR 28/10 A3009 RMK AO2 T02840095",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 9.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101900,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 30.695928738321001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.429821081247223,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T20:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T20:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T20:55:00+00:00",
                "rawMessage": "KTYQ 152055Z AUTO 15006KT 10SM CLR 28/09 A3010 RMK AO2 T02830092",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 9.1999999999999993,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 150,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101930,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 30.258354683968999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.330851546064444,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T20:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T20:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T20:35:00+00:00",
                "rawMessage": "KTYQ 152035Z AUTO 11009KT 10SM CLR 28/10 A3011 RMK AO2 T02840098",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 9.8000000000000007,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101970,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 31.319966023393999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.462704505132777,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T20:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T20:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T20:15:00+00:00",
                "rawMessage": "KTYQ 152015Z AUTO 12007KT 10SM CLR 28/10 A3011 RMK AO2 T02820095",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 9.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101970,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 31.055197354674,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.294863738797776,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T19:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T19:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T19:55:00+00:00",
                "rawMessage": "KTYQ 151955Z AUTO 10010KT 10SM CLR 29/10 A3010 RMK AO2 T02850103",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 100,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101930,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 32.197253115823003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.590555038389443,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T19:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T19:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T19:35:00+00:00",
                "rawMessage": "KTYQ 151935Z AUTO 13006KT 10SM CLR 28/10 A3011 RMK AO2 T02750100",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 130,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101970,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 33.453104803643001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.899479766321665,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T19:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T19:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T19:15:00+00:00",
                "rawMessage": "KTYQ 151915Z AUTO 14006KT 10SM CLR 28/11 A3012 RMK AO2 T02810105",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 140,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102000,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 33.397843267460999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.341545782922221,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T18:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T18:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T18:55:00+00:00",
                "rawMessage": "KTYQ 151855Z AUTO 12008KT 10SM CLR 28/11 A3012 RMK AO2 T02780110",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102000,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 35.136605323528997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.205536872438888,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T18:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T18:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T18:35:00+00:00",
                "rawMessage": "KTYQ 151835Z AUTO 11006KT 10SM CLR 27/11 A3013 RMK AO2 T02740106",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.6,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102030,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 35.024386203699002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.904340104309444,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T18:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T18:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T18:15:00+00:00",
                "rawMessage": "",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102030,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 34.996307193446,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.832260248954444,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T17:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T17:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T17:55:00+00:00",
                "rawMessage": "KTYQ 151755Z AUTO 13006KT 10SM CLR 27/11 A3013 RMK AO2 T02710110 10271 20186",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 130,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102030,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 36.606522109947001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.769211205794445,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T16:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T16:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T16:55:00+00:00",
                "rawMessage": "KTYQ 151655Z AUTO 15009KT 10SM CLR 26/11 A3014 RMK AO2 T02600109",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.9,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 150,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102070,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 38.799951454494,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.668665399089445,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T15:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T15:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T15:35:00+00:00",
                "rawMessage": "KTYQ 151535Z AUTO 11008KT 10SM CLR 24/11 A3015 RMK AO2 T02440110",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 42.961878416144998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.017337936421665,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T15:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T15:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T15:15:00+00:00",
                "rawMessage": "KTYQ 151515Z AUTO 12009KT 10SM CLR 24/10 A3015 RMK AO2 T02370098",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 9.8000000000000007,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 41.360176328774998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.20551571525111,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T14:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T14:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T14:55:00+00:00",
                "rawMessage": "KTYQ 151455Z AUTO 12010KT 10SM CLR 23/11 A3015 RMK AO2 T02340108",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 45.021606917370001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.971119736175556,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T14:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T14:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T14:35:00+00:00",
                "rawMessage": "KTYQ 151435Z AUTO 12009KT 10SM CLR 23/11 A3015 RMK AO2 T02300109",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.9,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 46.430672512055999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.567912004481666,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T13:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T13:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T13:55:00+00:00",
                "rawMessage": "",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102130,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.961459184607001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.177882545376111,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T12:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T12:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T12:35:00+00:00",
                "rawMessage": "KTYQ 151235Z AUTO 13006KT 10SM CLR 20/12 A3015 RMK AO2 T01970122",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 130,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102100,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 61.936306440827998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T11:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T11:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T11:55:00+00:00",
                "rawMessage": "KTYQ 151155Z AUTO 12007KT 10SM CLR 19/13 A3012 RMK AO2 70001 T01850127 10191 20157",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 120,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 102000,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 68.973482910829006,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T10:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T10:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T10:15:00+00:00",
                "rawMessage": "KTYQ 151015Z AUTO 00000KT 10SM CLR 17/13 A3011 RMK AO2 T01650125",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T08:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T08:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T08:35:00+00:00",
                "rawMessage": "KTYQ 150835Z AUTO 09005KT 10SM CLR 18/12 A3007 RMK AO2 T01820124",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.4,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 90,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101830,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 68.913963418571001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T08:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T08:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T08:15:00+00:00",
                "rawMessage": "KTYQ 150815Z AUTO 09006KT 10SM CLR 18/13 A3006 RMK AO2 T01810125",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T07:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T07:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T07:55:00+00:00",
                "rawMessage": "KTYQ 150755Z AUTO 09005KT 10SM CLR 18/13 A3006 RMK AO2 T01800126",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.6,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 90,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 70.706767047683002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T06:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T06:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T06:35:00+00:00",
                "rawMessage": "KTYQ 150635Z AUTO 00000KT 10SM CLR 18/13 A3006 RMK AO2 T01760127",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.986684523541996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T05:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T05:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T05:55:00+00:00",
                "rawMessage": "KTYQ 150555Z AUTO 03003KT 10SM CLR 17/13 A3006 RMK AO2 T01690133 10272 20169",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 16.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 13.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 30,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 79.339813291751,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T05:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T05:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T05:15:00+00:00",
                "rawMessage": "KTYQ 150515Z AUTO 00000KT 10SM CLR 18/12 A3006 RMK AO2 T01780124",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.4,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101800,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 70.668780530782001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T04:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T04:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T04:55:00+00:00",
                "rawMessage": "KTYQ 150455Z AUTO 04004KT 10SM CLR 19/12 A3005 RMK AO2 T01930118",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 40,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 61.844489720151998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T04:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T04:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T04:35:00+00:00",
                "rawMessage": "KTYQ 150435Z AUTO 03004KT 10SM CLR 19/11 A3005 RMK AO2 T01920114",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.4,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 30,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101760,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 60.607858512333003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T02:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T02:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T02:35:00+00:00",
                "rawMessage": "KTYQ 150235Z AUTO 36004KT 10SM CLR 21/13 A3003 RMK AO2 T02090125",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 360,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101690,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 58.655735781882001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T01:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T01:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T01:55:00+00:00",
                "rawMessage": "KTYQ 150155Z AUTO 34004KT 10SM CLR 22/12 A3003 RMK AO2 T02220120",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 340,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101690,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 52.419488465006999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.844286643252779,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T01:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T01:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T01:35:00+00:00",
                "rawMessage": "KTYQ 150135Z AUTO 34005KT 10SM CLR 23/12 A3001 RMK AO2 T02270122",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 340,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101630,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 51.524253951538,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 22.370911075401111,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T00:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T00:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T00:55:00+00:00",
                "rawMessage": "KTYQ 150055Z AUTO 34006KT 10SM CLR 25/13 A3001 RMK AO2 T02480131",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 13.1,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 340,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101630,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 48.16521495528,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.593202834943334,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T00:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T00:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T00:35:00+00:00",
                "rawMessage": "KTYQ 150035Z AUTO 34004KT 10SM CLR 26/13 A3000 RMK AO2 T02580133",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 13.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 340,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101590,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 45.979513169599002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.636131732761665,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T00:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-15T00:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-15T00:15:00+00:00",
                "rawMessage": "KTYQ 150015Z AUTO 33005KT 10SM CLR 27/12 A2999 RMK AO2 T02660121",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.1,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 330,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101560,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 40.541560949748003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.374140758132221,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T23:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T23:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T23:55:00+00:00",
                "rawMessage": "KTYQ 142355Z AUTO 34007KT 10SM CLR 27/12 A2999 RMK AO2 T02740115 10290 20269",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.399999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 340,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101560,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 37.179535578054001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.013348791205001,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T23:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T23:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T23:35:00+00:00",
                "rawMessage": "KTYQ 142335Z AUTO 36007KT 10SM CLR 28/12 A2998 RMK AO2 T02780122",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 360,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 38.035451656496001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.37121915513389,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T23:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T23:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T23:15:00+00:00",
                "rawMessage": "KTYQ 142315Z AUTO 01007KT 10SM CLR 28/12 A2998 RMK AO2 T02820120",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T22:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T22:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T22:55:00+00:00",
                "rawMessage": "KTYQ 142255Z AUTO 33006KT 10SM CLR 28/12 A2998 RMK AO2 T02830120",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 330,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 36.459930509575003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.686466412016109,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T22:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T22:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T22:35:00+00:00",
                "rawMessage": "KTYQ 142235Z AUTO 33010KT 10SM SCT080 29/12 A2998 RMK AO2 T02860118",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 330,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 18.359999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 35.360576264953998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.870470402088888,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2440
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T22:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T22:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T22:15:00+00:00",
                "rawMessage": "KTYQ 142215Z AUTO 35008KT 10SM SCT080 29/12 A2998 RMK AO2 T02870124",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.4,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 350,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 36.571771304336004,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.043306500692221,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2440
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T21:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T21:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T21:35:00+00:00",
                "rawMessage": "KTYQ 142135Z AUTO 36004KT 10SM SCT070 29/13 A2998 RMK AO2 T02880128",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 360,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 37.326235503973002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.190890042706666,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2130
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T21:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T21:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T21:15:00+00:00",
                "rawMessage": "KTYQ 142115Z AUTO 01008KT 10SM SCT070 29/14 A2998 RMK AO2 T02880135",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "Z"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2130
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T20:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T20:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T20:55:00+00:00",
                "rawMessage": "KTYQ 142055Z AUTO 35008G15KT 10SM SCT060 SCT080 29/14 A2997 RMK AO2 T02890136",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 13.6,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 350,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101490,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 39.098883087772997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.428634501847224,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1830
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2440
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T20:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T20:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T20:15:00+00:00",
                "rawMessage": "KTYQ 142015Z AUTO 02007KT 10SM CLR 28/16 A2997 RMK AO2 T02760155",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 15.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 20,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101490,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.675551239252997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.839420218796111,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T19:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T19:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T19:55:00+00:00",
                "rawMessage": "KTYQ 141955Z AUTO 35008G14KT 10SM SCT050 29/16 A2997 RMK AO2 T02850164",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 16.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 350,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101490,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 47.915308165204003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.819328569102776,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T19:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T19:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T19:35:00+00:00",
                "rawMessage": "KTYQ 141935Z AUTO 01009KT 10SM SCT050 28/17 A2997 RMK AO2 T02810171",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 10,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101490,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 51.271537111477002,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.681313154142778,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T18:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T18:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T18:35:00+00:00",
                "rawMessage": "KTYQ 141835Z AUTO 03006KT 10SM SCT039 28/19 A2998 RMK AO2 T02750191",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 27.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 30,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 60.207935019952998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.757546912136668,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1190
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T17:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T17:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T17:55:00+00:00",
                "rawMessage": "KTYQ 141755Z AUTO 36009KT 10SM SCT030 SCT036 27/20 A2998 RMK AO2 60001 T02680202 10270 20205",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 360,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 16.559999999999999,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 67.165615833014996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 28.318723455045557,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 910
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1100
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T16:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T16:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T16:35:00+00:00",
                "rawMessage": "KTYQ 141635Z AUTO 33006KT 10SM SCT026 26/21 A2998 RMK AO2 T02600207",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 330,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 11.16,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.618118259059997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 26.551695310097777,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 790
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T15:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T15:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T15:55:00+00:00",
                "rawMessage": "KTYQ 141555Z AUTO 33005KT 10SM SCT024 26/20 A2997 RMK AO2 P0001 T02550201",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 330,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101490,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.083551442563007,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.987737176555555,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 730
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T15:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T15:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T15:35:00+00:00",
                "rawMessage": "",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.899999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 340,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101490,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 72.910990549706,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.569342531019998,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T14:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T14:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T14:55:00+00:00",
                "rawMessage": "KTYQ 141455Z AUTO 31003KT 10SM BKN110 24/19 A2996 RMK AO2 T02410190",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 310,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 73.192054814273007,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.476681431261667,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T14:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T14:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T14:35:00+00:00",
                "rawMessage": "KTYQ 141435Z AUTO 26004KT 10SM SCT110 24/19 A2996 RMK AO2 T02400191",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 260,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 74.093482815179996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.390218717951665,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T14:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T14:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T14:15:00+00:00",
                "rawMessage": "KTYQ 141415Z AUTO 28003KT 10SM CLR 24/19 A2996 RMK AO2 T02380191",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 280,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 74.989678799814996,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.193619390883889,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T13:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T13:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T13:55:00+00:00",
                "rawMessage": "KTYQ 141355Z AUTO 00000KT 10SM CLR 23/19 A2996 RMK AO2 T02320187",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.199999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.699999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 75.834627561820994,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.555681941892221,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T12:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T12:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T12:35:00+00:00",
                "rawMessage": "KTYQ 141235Z AUTO 00000KT 10SM CLR 21/18 A2996 RMK AO2 T02130178",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.800000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 80.457651854524997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.586394242868334,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T12:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T12:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T12:15:00+00:00",
                "rawMessage": "KTYQ 141215Z AUTO 00000KT 10SM CLR 21/19 A2995 RMK AO2 T02090185",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 20.899999999999999,
                    "qualityControl": "S"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.5,
                    "qualityControl": "S"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "S"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "S"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "S"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 86.163161255934,
                    "qualityControl": "S"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "S"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "S"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T11:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T11:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T11:35:00+00:00",
                "rawMessage": "KTYQ 141135Z AUTO 00000KT 10SM CLR 20/19 A2994 RMK AO2 T01980186",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.800000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101390,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 92.797843277544999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T11:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T11:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T11:15:00+00:00",
                "rawMessage": "KTYQ 141115Z AUTO 00000KT 10SM CLR 20/18 A2994 RMK AO2 T01950182",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.5,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101390,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 92.201633026031004,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T10:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T10:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T10:35:00+00:00",
                "rawMessage": "KTYQ 141035Z AUTO 24003KT 10SM SCT110 19/18 A2993 RMK AO2 T01890182",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 240,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101360,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 95.712708894385003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T09:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T09:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T09:55:00+00:00",
                "rawMessage": "KTYQ 140955Z AUTO 00000KT 10SM SCT075 OVC100 19/18 A2992 RMK AO2 P0005 T01900182",
                "textDescription": "Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/ovc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101320,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 95.117248861324995,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2290
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T09:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T09:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T09:35:00+00:00",
                "rawMessage": "KTYQ 140935Z AUTO 19005KT 10SM -RA SCT049 SCT065 OVC100 19/18 A2993 RMK AO2 LTG DSNT E P0005 T01910182",
                "textDescription": "Light Rain",
                "icon": "https://api.weather.gov/icons/land/night/rain?size=medium",
                "presentWeather": [
                    {
                        "intensity": "light",
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "-RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 190,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101360,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 94.525943453916994,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1490
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1980
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T09:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T09:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T09:15:00+00:00",
                "rawMessage": "KTYQ 140915Z AUTO 27003KT 7SM VCTSRA SCT050 BKN065 OVC110 19/18 A2995 RMK AO2 LTG DSNT S THRU W P0003 T01910183",
                "textDescription": "Rain",
                "icon": "https://api.weather.gov/icons/land/night/rain?size=medium",
                "presentWeather": [
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "S"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.300000000000001,
                    "qualityControl": "S"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 270,
                    "qualityControl": "S"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "S"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "S"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 11270,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 95.120886630423001,
                    "qualityControl": "S"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "S"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "S"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1980
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T08:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T08:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T08:55:00+00:00",
                "rawMessage": "KTYQ 140855Z AUTO 23003KT 10SM BKN110 19/18 A2994 RMK AO2 LTG DSNT W 60003 T01900184",
                "textDescription": "Mostly Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/bkn?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.399999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 230,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101390,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 96.317884201048997,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T08:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T08:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T08:35:00+00:00",
                "rawMessage": "KTYQ 140835Z AUTO 00000KT 7SM SCT100 19/19 A2993 RMK AO2 T01900185",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.5,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101360,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 11270,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 96.923175907339001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3050
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T07:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T07:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T07:55:00+00:00",
                "rawMessage": "KTYQ 140755Z AUTO 18003KT 10SM -RA SCT075 OVC110 19/19 A2993 RMK AO2 P0001 T01910186",
                "textDescription": "Light Rain",
                "icon": "https://api.weather.gov/icons/land/night/rain?size=medium",
                "presentWeather": [
                    {
                        "intensity": "light",
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "-RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101360,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 96.925488677877993,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2290
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T07:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T07:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T07:35:00+00:00",
                "rawMessage": "KTYQ 140735Z AUTO 18003KT 10SM -RA SCT050 SCT075 BKN120 19/19 A2993 RMK AO2 T01910186",
                "textDescription": "Light Rain",
                "icon": "https://api.weather.gov/icons/land/night/rain?size=medium",
                "presentWeather": [
                    {
                        "intensity": "light",
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "-RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.600000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101360,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 96.925488677877993,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1520
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2290
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3660
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T06:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T06:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T06:55:00+00:00",
                "rawMessage": "KTYQ 140655Z AUTO 00000KT 10SM -RA SCT065 SCT090 OVC110 19/18 A2996 RMK AO2 P0002 T01910182",
                "textDescription": "Light Rain",
                "icon": "https://api.weather.gov/icons/land/night/rain?size=medium",
                "presentWeather": [
                    {
                        "intensity": "light",
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "-RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 94.525943453916994,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1980
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2740
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T06:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T06:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T06:35:00+00:00",
                "rawMessage": "KTYQ 140635Z AUTO 00000KT 10SM -RA OVC110 19/18 A2996 RMK AO2 P0001 T01900183",
                "textDescription": "",
                "icon": null,
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 95.715913694600999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": []
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T05:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T05:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T05:55:00+00:00",
                "rawMessage": "KTYQ 140555Z AUTO 00000KT 10SM -TSRA SCT090 BKN120 19/18 A2995 RMK AO2 LTG DSNT N THRU SE P0007 60028 T01910181 10286 20190",
                "textDescription": "Thunderstorms and Rain",
                "icon": "https://api.weather.gov/icons/land/night/tsra?size=medium",
                "presentWeather": [
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "thunderstorms",
                        "rawString": "TS"
                    },
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101420,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": 10,
                    "qualityControl": "C"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 93.934270028756998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2740
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3660
                        },
                        "amount": "BKN"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T05:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T05:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T05:35:00+00:00",
                "rawMessage": "KTYQ 140535Z AUTO 20008KT 10SM TSRA SCT080 OVC110 19/18 A2997 RMK AO2 LTG DSNT NE THRU S P0006 T01910181",
                "textDescription": "Thunderstorms and Rain",
                "icon": "https://api.weather.gov/icons/land/night/tsra?size=medium",
                "presentWeather": [
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "thunderstorms",
                        "rawString": "TS"
                    },
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 19.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 18.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 200,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 14.76,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101490,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 93.934270028756998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2440
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 3350
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T04:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T04:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T04:35:00+00:00",
                "rawMessage": "KTYQ 140435Z AUTO 26018G25KT 7SM +TSRA BKN065 OVC080 22/17 A3002 RMK AO2 LTG DSNT ALQDS P0008 T02170171",
                "textDescription": "Heavy Thunderstorms and Heavy Rain",
                "icon": "https://api.weather.gov/icons/land/night/tsra?size=medium",
                "presentWeather": [
                    {
                        "intensity": "heavy",
                        "modifier": null,
                        "weather": "thunderstorms",
                        "rawString": "+TS"
                    },
                    {
                        "intensity": "heavy",
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "+RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.699999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 17.100000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 11270,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": 0,
                    "qualityControl": "C"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 75.117751907325001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 21.886963522024445,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1980
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2440
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T04:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T04:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T04:15:00+00:00",
                "rawMessage": "KTYQ 140415Z AUTO 00000KT 10SM TSRA OVC060 23/17 A2998 RMK AO2 LTG DSNT ALQDS T02330169",
                "textDescription": "Thunderstorms and Rain",
                "icon": "https://api.weather.gov/icons/land/night/tsra?size=medium",
                "presentWeather": [
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "thunderstorms",
                        "rawString": "TS"
                    },
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.300000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 16.899999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 0,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101520,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 67.301764341641999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 23.44287940225389,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1830
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T03:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T03:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T03:55:00+00:00",
                "rawMessage": "KTYQ 140355Z AUTO 11005KT 10SM -TSRA OVC060 25/16 A2997 RMK AO2 LTG DSNT ALQDS T02490159 403100170",
                "textDescription": "Thunderstorms and Rain",
                "icon": "https://api.weather.gov/icons/land/night/tsra?size=medium",
                "presentWeather": [
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "thunderstorms",
                        "rawString": "TS"
                    },
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "rain",
                        "rawString": "RA"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.899999999999999,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 15.9,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 110,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 9.3599999999999994,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101490,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 57.369088516643998,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 24.943526200156668,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1830
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T03:35:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T03:35:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T03:35:00+00:00",
                "rawMessage": "KTYQ 140335Z AUTO 09004KT 10SM TS BKN060 OVC075 25/15 A2996 RMK AO2 LTG DSNT E W AND NW T02510146",
                "textDescription": "Thunderstorms",
                "icon": "https://api.weather.gov/icons/land/night/tsra?size=medium",
                "presentWeather": [
                    {
                        "intensity": null,
                        "modifier": null,
                        "weather": "thunderstorms",
                        "rawString": "TS"
                    }
                ],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 14.6,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 90,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 7.5599999999999996,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101460,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 52.149248888500999,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.027230387644444,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1830
                        },
                        "amount": "BKN"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2290
                        },
                        "amount": "OVC"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T03:15:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T03:15:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T03:15:00+00:00",
                "rawMessage": "KTYQ 140315Z AUTO 18003KT 10SM SCT060 SCT075 25/14 A2994 RMK AO2 LTG DSNT W THRU E T02510143",
                "textDescription": "Partly Cloudy",
                "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.100000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 14.300000000000001,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 180,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 5.4000000000000004,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101390,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 51.148203957492001,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.001091992223333,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 1830
                        },
                        "amount": "SCT"
                    },
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": 2290
                        },
                        "amount": "SCT"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T02:55:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.25,
                    40.030000000000001
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTYQ/observations/2024-06-14T02:55:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "unitCode": "wmoUnit:m",
                    "value": 281
                },
                "station": "https://api.weather.gov/stations/KTYQ",
                "timestamp": "2024-06-14T02:55:00+00:00",
                "rawMessage": "KTYQ 140255Z AUTO 21007KT 10SM CLR 26/14 A2993 RMK AO2 LTG DSNT NE AND NW T02560142",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.600000000000001,
                    "qualityControl": "V"
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 14.199999999999999,
                    "qualityControl": "V"
                },
                "windDirection": {
                    "unitCode": "wmoUnit:degree_(angle)",
                    "value": 210,
                    "qualityControl": "V"
                },
                "windSpeed": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": 12.960000000000001,
                    "qualityControl": "V"
                },
                "windGust": {
                    "unitCode": "wmoUnit:km_h-1",
                    "value": null,
                    "qualityControl": "Z"
                },
                "barometricPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": 101360,
                    "qualityControl": "V"
                },
                "seaLevelPressure": {
                    "unitCode": "wmoUnit:Pa",
                    "value": null,
                    "qualityControl": "Z"
                },
                "visibility": {
                    "unitCode": "wmoUnit:m",
                    "value": 16090,
                    "qualityControl": "C"
                },
                "maxTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "minTemperatureLast24Hours": {
                    "unitCode": "wmoUnit:degC",
                    "value": null
                },
                "precipitationLastHour": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast3Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "precipitationLast6Hours": {
                    "unitCode": "wmoUnit:mm",
                    "value": null,
                    "qualityControl": "Z"
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 49.329541972119003,
                    "qualityControl": "V"
                },
                "windChill": {
                    "unitCode": "wmoUnit:degC",
                    "value": null,
                    "qualityControl": "V"
                },
                "heatIndex": {
                    "unitCode": "wmoUnit:degC",
                    "value": 25.503604707049998,
                    "qualityControl": "V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "unitCode": "wmoUnit:m",
                            "value": null
                        },
                        "amount": "CLR"
                    }
                ]
            }
        }
    ]
}

export default mockObservations;