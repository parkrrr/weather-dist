import { USER_AGENT } from "./constants";
import { throwErrorOrContinue } from "./throwErrorOrContinue";
import { Observation, ObservationStationCollectionGeoJson } from "./weather-gov-api";

export const getObservations = async (airport: string, startDate: Date): Promise<{ observations: Observation[], isUsingMocks: boolean } > => {
    const request = new Request(`https://api.weather.gov/stations/${airport}/observations?start=${startDate.toISOString()}`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/geo+json',
            'User-Agent': USER_AGENT,
        }),
    });

    const resp = await fetch(request);
    await throwErrorOrContinue(resp);

    const data = await resp.json() as ObservationStationCollectionGeoJson;
    const isUsingMocks = Object.prototype.hasOwnProperty.call(data, 'mock');

    const observations = data.features.map(((feat: { properties: Observation; }) => feat.properties));

    observations.sort((a, b) => new Date(b.timestamp || 0).getTime() - new Date(a.timestamp || 0).getTime());

    return  { observations, isUsingMocks };
}