// Copyright WeatherBase 2021

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IWeatherDetail } from '../models/IWeatherDetail';

@Component({
  selector: 'weather-base-current-weather-details-container',
  templateUrl: './current-weather-details-container.component.html',
  styleUrls: ['./current-weather-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Create a ui container with current weather image along with summary.
 */
export class CurrentWeatherDetailsContainerComponent {
  @Input() weather!: IWeatherDetail;

}
