// Copyright WeatherBase 2021

import { IWeatherDetail } from './IWeatherDetail';

/**
 * Interface for OpenWeather API data model
 */
export interface IOpenWeatherReport {
    /**
     * Latitude of the location
     */
    lat: number;

    /**
     * Longitude of the location
     */
    lon: number;

    /**
     * Current weather data
     */
    current: IWeatherDetail;

    /**
     * Hourly forecast weather data
     */
    hourly: IWeatherDetail[];

}


