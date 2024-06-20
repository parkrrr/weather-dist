import { USER_AGENT } from "./constants";
import { throwErrorOrContinue } from "./throwErrorOrContinue";
import { Observation, ObservationStationCollectionGeoJson } from "./weather-gov-api";

/**
 * Retrieves weather observations between now and the start date
 * @param stationId - The ID of the station for which to retrieve observations.
 * @param startDate - The start date from which to retrieve observations (the end date is always today).
 * @returns A promise that resolves to an object containing the observations and a flag indicating if mocks are being used.
 */
export const getObservations = async (stationId: string, startDate: Date): Promise<{ observations: Observation[], isUsingMocks: boolean } > => {
    const request = new Request(`https://api.weather.gov/stations/${stationId}/observations?start=${startDate.toISOString()}`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/geo+json',
            'User-Agent': USER_AGENT,
        }),
    });

    const resp = await fetch(request);
    await throwErrorOrContinue(resp);

    const data = await resp.json() as ObservationStationCollectionGeoJson;
    // if the application is being fed mock data by the tests, the mock property will be present
    const isUsingMocks = Object.prototype.hasOwnProperty.call(data, 'mock');

    const observations = data.features.map(((feat: { properties: Observation; }) => feat.properties));

    observations.sort((a, b) => new Date(b.timestamp || 0).getTime() - new Date(a.timestamp || 0).getTime());

    return  { observations, isUsingMocks };
}