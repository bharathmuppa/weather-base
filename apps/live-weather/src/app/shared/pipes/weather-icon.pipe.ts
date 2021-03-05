// Copyright WeatherBase 2021

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon'
})
/**
 * Helps in transforming icon string to open weather icon URL
 */
export class WeatherIconPipe implements PipeTransform {

  /**
   * @internal
   * @param value value to be transformed
   */
  transform(value: unknown): unknown {
    return `http://openweathermap.org/img/w/${value}.png`;
  }

}
