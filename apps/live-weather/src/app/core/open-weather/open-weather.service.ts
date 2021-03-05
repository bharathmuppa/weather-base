// Copyright WeatherBase 2021

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IPlace } from '../../shared/models/IPlace';
import { IOpenWeatherReport } from '../../shared/models/IOpenWeatherReport';

@Injectable({
  providedIn: 'root'
})
/**
 * Service to fetch data from [OPenWeather API](https://openweathermap.org)
 * There are 2 types of API models
 * 1. [Current weather data API]{@link https://openweathermap.org/current}
 * 2. [One Call API]{@link https://openweathermap.org/api/one-call-api}
 */
export class OpenWeatherService {

  private currentWeatherApiUrl = environment.openWeatherURL + environment.currentWeatherAPi;

  private oneCallApiUrl = environment.openWeatherURL + environment.onceCallAPI;



  /**
   * Initializes a new instance of the ```OpenWeatherService``` class.
   *
   * @param httpClient client to perform remote api calls
   */
  constructor(private httpClient: HttpClient) {

  }

  /**
   * Gets weather condition for the requested location
   *
   * @param city location details of the city
   * @returns weather condition details observer
   */
  public getCurrentWeatherCondition(city: IPlace): Observable<IOpenWeatherReport> {
    const finalUrl = `${this.oneCallApiUrl}lat=${city.coord.lat}&lon=${city.coord.lon}` +
      `&exclude=minutely,daily&units=metric&appid=${environment.openWeatherAPIkey}`

    return this.httpClient.get<IOpenWeatherReport>(finalUrl);
  }
}
