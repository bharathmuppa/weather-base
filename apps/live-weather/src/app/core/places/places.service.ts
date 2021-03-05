// Copyright WeatherBase 2021

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPlace } from './../../shared/models/IPlace';

@Injectable({
  providedIn: 'root'
})
/**
 * Service to get details about available cities
 */
export class PlacesService {

  private places: IPlace[] = [];

  /**
   * Initializes a new instance of the ```PlacesService``` class.
   *
   * @param http client to perform http request
   */
  constructor(private http: HttpClient) {

  }


  /**
   * Get All places from json
   *
   * @returns All the places in json
   */
  public getAllPlaces(): IPlace[] {
    return this.places;
  }

  /**
   * Get all places by name
   *
   * @param name of the city
   * @returns All the places which were matched with passed param
   */
  public getPlacesByName(name: string): IPlace[] {

    return this.places.filter((city: IPlace) => city.name.toLowerCase().indexOf(name) > -1);

  }

  /**
   * Get place by id
   *
   * @param id of the place
   * @returns Place which is matched with passed param
   */
  public getPlaceById(id: number): IPlace {

    const city = this.places.filter((city: IPlace) => city.id === id);

    return city[0];

  }

  /**
   * Get All places from json
   *
   * @returns promise resolver for place data
   */
  public getAllPlacesFromServer(): Promise<boolean> {
    return this.http.get<{ places: IPlace[] }>('./assets/cities.json').pipe(map((places: { places: IPlace[] }) => {
      this.places = places.places;

      return true;
    })).toPromise();
  }


}
