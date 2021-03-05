// Copyright WeatherBase 2021

import { IWeatherSummary } from './IWeatherSummary';

/**
 * Interface for detailed weather data
 */
export interface IWeatherDetail {

    /**
     * Gets cloudiness in %
     */
    clouds: number;

    /**
     * Current time, Unix, UTC
     */
    dt: number;
    /**
     * accounts for the Dew point of weather
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    dew_point: number;
    /**
     * accounts for the human perception of weather
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    feels_like: number;

    /**
     * Gets concentration of water vapor present in the air
     */
    humidity: number;
    /**
     * Gets atmospheric pressure
     */
    pressure: number;
    /**
     * Temperature in location
     */
    temp: number;

    /**
     * Visibility of the place
     */
    visibility: number
    /**
     * Gets weather condition data
     */
    weather: IWeatherSummary[]

}