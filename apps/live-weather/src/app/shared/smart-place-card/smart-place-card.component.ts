// Copyright WeatherBase 2021

import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { OpenWeatherService } from '../../core/open-weather/open-weather.service';
import { IOpenWeatherReport } from '../models/IOpenWeatherReport';
import { IPlace } from '../models/IPlace';

@Component({
  selector: 'weather-base-smart-place-card',
  templateUrl: './smart-place-card.component.html',
  styleUrls: ['./smart-place-card.component.scss'],
})
/**
 * Visualize place model as material card element
 */
export class SmartPlaceCardComponent implements OnChanges {
  @Input() place!: IPlace;

  @Input() airQuality = false;

  @Input() placeImage = false;

  weather: IOpenWeatherReport | null = null;

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
  constructor(private openWeatherService: OpenWeatherService, private router: Router) { }

  /**
   * Toggles favorite state of a place
   */
  public toggleFavorite(): void {
    if (!this.place) {
      return;
    }
    this.place.isFavorite = !this.place.isFavorite;
    this.addPlaceToFavorites.emit(this.place);
  }

  /**
   * Gets weather condition for the requested location
   *
   * @param place location details of the city
   * @returns weather condition details observer
   */
  public getWeatherReport(place: IPlace): Observable<IOpenWeatherReport> {
    return this.openWeatherService.getCurrentWeatherCondition(place);
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
      this.getWeatherReport(this.place).subscribe(
        (weather: IOpenWeatherReport) => {
          this.weather = weather;
          this.loadingWeather = false;
        },
        (_) => {
          this.weather = null;
          this.loadingWeather = false;
        }
      );
    }
  }
}
