// Copyright WeatherBase 2021

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IWeatherDetail } from '../models/IWeatherDetail';

@Component({
  selector: 'weather-base-current-weather-summary-container',
  templateUrl: './current-weather-summary-container.component.html',
  styleUrls: ['./current-weather-summary-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Create a ui container with current weather image along with summary.
 */
export class CurrentWeatherSummaryContainerComponent {
  /** Represents current time */
  public currentTime = new Date().toISOString();

  @Input() weather!: IWeatherDetail;

}
