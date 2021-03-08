// Copyright WeatherBase 2021

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IPlace } from '../../shared/models/IPlace';
import { IGooglePlace } from '../../shared/models/IGooglePlace';

@Injectable({
  providedIn: 'root',
})

/**
 * Service for google places api
 */
export class GooglePlacesService {
  /**
   * Initializes a new instance of the ```OpenWeatherService``` class.
   *
   * @param httpClient client to perform remote service call
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Gets photo of location requested
   *
   * @param city location details of the place
   * @returns image url
   */
  public getPlaceImage(city: IPlace): Observable<string> {
    const placesApiUrl =
      `https://europe-west1-weatherbase-306123.cloudfunctions.net/google-place-details?place=${city.name}`;

    return this.httpClient.get<string>(placesApiUrl, {
      responseType: 'text' as 'json'
    }).pipe(
      map((googlePlace: string) => {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&&key=${environment.googleKeyNetlify}` +
          `&photoreference=${googlePlace}`
          ;
      })
    );

  }
}
