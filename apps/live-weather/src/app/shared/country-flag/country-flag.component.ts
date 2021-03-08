// Copyright WeatherBase 2021

import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-base-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss'],
})
/**
 * Provide icon for any country flag
 */
export class CountryFlagComponent {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private _country = '';

  public flagUrl = '';

  /**
   * Get Country
   *
   * @returns name of the country
   */
  get country(): string {
    return this._country;
  }

  /**
   * set country and create url to get flag
   */
  @Input()
  set country(value: string) {
    this.flagUrl = `https://www.countryflags.io/${value.toLowerCase()}/shiny/24.png`;
    this._country = value;
  }
}
