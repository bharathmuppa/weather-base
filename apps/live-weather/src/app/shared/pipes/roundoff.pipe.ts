// Copyright WeatherBase 2021

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundoff',
})
/**
 * Perform a round off approach for numbers
 */
export class RoundoffPipe implements PipeTransform {
  /**
   * @internal
   */
  transform(value: number): number {
    if (isNaN(value)) {
      return value;
    }

    return Math.round(value);
  }
}
