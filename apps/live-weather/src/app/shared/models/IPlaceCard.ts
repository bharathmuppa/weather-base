// Copyright WeatherBase 2021

import { IOpenWeatherReport } from './IOpenWeatherReport';
import { IPlace } from './IPlace';

/**
 * Interface for place and weather composition
 */
export interface IPlaceCard {
    place: IPlace;
    weatherReport: IOpenWeatherReport;
}