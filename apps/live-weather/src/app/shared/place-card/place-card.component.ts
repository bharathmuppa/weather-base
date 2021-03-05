// Copyright WeatherBase 2021

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IOpenWeatherReport } from '../models/IOpenWeatherReport';
import { IPlace } from '../models/IPlace';

@Component({
  selector: 'weather-base-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Visualize place model as material card element
 */
export class PlaceCardComponent {

  /** Represents current time */
  public currentTime = new Date().toISOString();

  @Input() place!: IPlace;

  @Input() weather!: IOpenWeatherReport;

  @Output() addPlaceToFavorites: EventEmitter<IPlace> = new EventEmitter();

  /**
   * Toggles favorite state of a place
   */
  toggleFavorite(): void {
    if (!this.place) {
      return;
    }
    this.addPlaceToFavorites.emit(this.place);
    this.place.isFavorite = !this.place.isFavorite;
  }

}
