// Copyright WeatherBase 2021

import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from './core/core.module';
import { PlacesService } from './core/places/places.service';
import { OpenWeatherService } from './core/open-weather/open-weather.service';
import { CitySearchComponent } from './city-search/city-search.component';
import { DataStoreService } from './core/data-store/data-store.service';
import { GooglePlacesService } from './core/google-places/google-places.service';
import { CityDetailsContainerComponent } from './city-details-container/city-details-container.component';
import { FavoritePlacesComponent } from './favorite-places/favorite-places.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FavoritePlacesComponent,
    CitySearchComponent,
    CityDetailsContainerComponent,
    FavoritePlacesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    PlacesService,
    OpenWeatherService,
    GooglePlacesService,
    DataStoreService,
    {
      provide: APP_INITIALIZER,
      /**
       * Loads places data into app
       *
       * @param placesService instance to load data
       * @returns resolvable places data
       */
      useFactory: (placesService: PlacesService) => () => {
        return placesService.getAllPlacesFromServer();
      },
      deps: [PlacesService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
/**
 * Acts as Root Module, which is an normal convention in Enterprise Angular web Apps
 */
export class AppModule {}
