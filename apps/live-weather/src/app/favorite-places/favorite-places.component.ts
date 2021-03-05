// Copyright WeatherBase 2021

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataStoreService } from '../core/data-store/data-store.service';
import { OpenWeatherService } from '../core/open-weather/open-weather.service';
import { IOpenWeatherReport } from '../shared/models/IOpenWeatherReport';
import { IPlace } from '../shared/models/IPlace';

@Component({
  selector: 'weather-base-favorite-places',
  templateUrl: './favorite-places.component.html',
  styleUrls: ['./favorite-places.component.scss']
})
/**
 * Show favorite places in a container
 */
export class FavoritePlacesComponent implements OnInit {

  public favoritePlaces: IPlace[] = [];

  public favoritePlacesAndWeather: { place: IPlace; weather: IOpenWeatherReport }[] = [];

  /**
   * Creates instance of ``` FavoritePlacesComponent``` class
   *
   * @param dataStoreService instance to request data state
   */
  constructor(private dataStoreService: DataStoreService) { }

  /**
   * @internal
   */
  ngOnInit(): void {
    this.favoritePlaces = this.dataStoreService.getAllFavoritePlaces();
  }

  /**
   * Add a place to favorite collection
   *
   * @param place to be added to favorite collection
   */
  public onFavoriteAdd(place: IPlace): void {
    this.dataStoreService.addFavoritePlace(place)
  }


}
