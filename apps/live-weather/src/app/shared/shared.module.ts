// Copyright WeatherBase 2021

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material specific modules
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
// third party libs
import { NgxChartsModule } from '@swimlane/ngx-charts';

// App specific modules
import { PlaceCardComponent } from './place-card/place-card.component';
import { PlaceHourlyForecastComponent } from './place-hourly-forecast/place-hourly-forecast.component';
import { CountryFlagComponent } from './country-flag/country-flag.component';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { RoundoffPipe } from './pipes/roundoff.pipe';
import { SmartPlaceCardComponent } from './smart-place-card/smart-place-card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { CurrentWeatherSummaryContainerComponent } from './current-weather-summary-container/current-weather-summary-container.component';
import { CurrentWeatherDetailsContainerComponent } from './current-weather-details-container/current-weather-details-container.component';
import { AirPollutionCardComponent } from './air-pollution-card/air-pollution-card.component';
import { AirQualityIndexPipe } from './pipes/air-quality-index.pipe';

@NgModule({
  declarations: [
    AirPollutionCardComponent,
    AirQualityIndexPipe,
    CurrentWeatherSummaryContainerComponent,
    CurrentWeatherDetailsContainerComponent,
    CountryFlagComponent,
    InfoCardComponent,
    PlaceCardComponent,
    PlaceHourlyForecastComponent,
    RoundoffPipe,
    SmartPlaceCardComponent,
    WeatherIconPipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatToolbarModule,
    NgxChartsModule,
  ],
  exports: [
    AirPollutionCardComponent,
    CountryFlagComponent,
    FlexLayoutModule,
    InfoCardComponent,
    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatToolbarModule,
    PlaceCardComponent,
    PlaceHourlyForecastComponent,
    SmartPlaceCardComponent,
  ],
})
/**
 * Packs all components required for the application
 */
export class SharedModule { }
