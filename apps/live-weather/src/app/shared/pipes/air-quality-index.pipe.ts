// Copyright WeatherBase 2021

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'airQualityIndex'
})
/**
 * Convert air quality index into readable data
 */
export class AirQualityIndexPipe implements PipeTransform {

  private airQualityCode = ['Good', 'Fair', 'Moderate', 'Poor', 'Very poor'];

  /**
   * Convert air quality index into readable data
   *
   * @param value of air quality index
   * @returns human readable air quality
   */
  transform(value: number): string {

    return this.airQualityCode[value];
  }
}
