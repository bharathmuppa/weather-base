// Copyright WeatherBase 2021

import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { OpenWeatherService } from '../../core/open-weather/open-weather.service';
import { IAirPollution, IAirQuality } from '../models/IAirPollution';
import { IPlace } from '../models/IPlace';

@Component({
  selector: 'weather-base-air-pollution-card',
  templateUrl: './air-pollution-card.component.html',
  styleUrls: ['./air-pollution-card.component.scss']
})
/**
 * Visualize air pollution model as material card element
 */
export class AirPollutionCardComponent implements OnChanges {

  @Input() place!: IPlace;

  airPollutionReport: IAirQuality | null = null;

  /** Flag to check loading status of weather */
  public loadingWeather = false;

  /** Represents current time in ISO format */
  public currentTime = new Date().toISOString();

  @Output() addPlaceToFavorites: EventEmitter<IPlace> = new EventEmitter<IPlace>();

  /**
   * Creates instance of ``` FavoritePlacesComponent``` class
   *
   * @param openWeatherService instance to request weather details from open weather
   * @param router instance of angular router
   */
  constructor(
    private openWeatherService: OpenWeatherService,
    private router: Router) { }


  /**
   * Gets weather condition for the requested location
   *
   * @param place location details of the city
   * @returns weather condition details observer
   */
  public getAirPollutionReport(place: IPlace): Observable<IAirPollution> {
    return this.openWeatherService.getAirPollutionDetails(place);
  }

  /**
   * Navigate to details page of place requested
   *
   * @param place to navigate
   */
  public goToPlaceDetails(place: IPlace): void {
    this.router.navigate(['/city', place.name, place.id]);
  }

  /**
   * @internal
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.place && changes.place.currentValue) {
      this.loadingWeather = true;
      this.getAirPollutionReport(this.place).subscribe((weather: IAirPollution) => {
        this.airPollutionReport = weather.list[0];
        this.loadingWeather = false;
      }, _ => {
        this.airPollutionReport = null;
        this.loadingWeather = false;
      });
    }
  }

}
