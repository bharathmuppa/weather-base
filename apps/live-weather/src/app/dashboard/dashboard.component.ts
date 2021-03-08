// Copyright WeatherBase 2021

import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../core/open-weather/open-weather.service';
import { PlacesService } from '../core/places/places.service';
import { IPlace } from '../shared/models/IPlace';

@Component({
  selector: 'weather-base-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
/**
 * Generates a dashboard page with high level information
 */
export class DashboardComponent implements OnInit {
  private places: number[];

  public placesDetails: IPlace[] = [];

  /**
   * Creates instance of ```CityDetailsContainerComponent``` class
   *
   * @param placesService instance to request places information
   */
  constructor(private placesService: PlacesService) {
    this.places = [2759793, 2756253, 2745912, 2747891, 2750053, 2746301];
  }

  /**
   * @internal
   */
  ngOnInit(): void {
    this.placesDetails = this.places.map((id: number) => {
      return this.placesService.getPlaceById(id);
    });
  }
}
