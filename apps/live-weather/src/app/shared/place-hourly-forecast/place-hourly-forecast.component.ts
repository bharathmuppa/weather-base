// Copyright WeatherBase 2021

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IOpenWeatherReport } from '../models/IOpenWeatherReport';
import { IPlace } from '../models/IPlace';
import { IWeatherDetail } from '../models/IWeatherDetail';
import { IChart, ISeries } from './IChart';

@Component({
  selector: 'weather-base-place-hourly-forecast',
  templateUrl: './place-hourly-forecast.component.html',
  styleUrls: ['./place-hourly-forecast.component.scss']
})
/**
 * Build hourly based charts based on weather report
 */
export class PlaceHourlyForecastComponent implements OnChanges {

  @Input() place!: IPlace;

  @Input() weather!: IOpenWeatherReport;

  weatherData: IChart[] = [];

  xAxisLabel = 'Time';

  yAxisLabel = 'Temperature in (°C)';

  colorScheme = {
    domain: ['#5AA454']
  };

  /**
   * @internal
   */
  ngOnChanges(changes: SimpleChanges): void {

    if (changes.weather && changes.weather.currentValue) {
      this.weatherData = [this.formatWeatherReportForHourlyData(this.weather)];
      console.log(this.weatherData);
    }
  }

  /**
   * Format weather report into chart specific data structure
   *
   * @param weatherReport which is formatted for charts
   * @returns chart data
   */
  public formatWeatherReportForHourlyData(weatherReport: IOpenWeatherReport): IChart {
    const series = weatherReport.hourly.slice(0, 7).map((weatherDetail: IWeatherDetail): ISeries => {
      return {
        name: `${new Date(weatherDetail.dt * 1000).getHours()}:00`,
        value: weatherDetail.temp
      }
    });

    return {
      name: this.place.name,
      series: series
    }
  }

}
