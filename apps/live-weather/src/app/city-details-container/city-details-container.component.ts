// Copyright WeatherBase 2021

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DataStoreService } from '../core/data-store/data-store.service';

import { GooglePlacesService } from '../core/google-places/google-places.service';
import { OpenWeatherService } from '../core/open-weather/open-weather.service';
import { PlacesService } from '../core/places/places.service';
import { IOpenWeatherReport } from '../shared/models/IOpenWeatherReport';
import { IPlace } from '../shared/models/IPlace';

@Component({
  selector: 'weather-base-city-details-container',
  templateUrl: './city-details-container.component.html',
  styleUrls: ['./city-details-container.component.scss']
})
/**
 * Provides smart container to display detailed place information
 */
export class CityDetailsContainerComponent implements OnInit {

  public place!: IPlace;

  public weatherReport!: IOpenWeatherReport;


  /**
   * Creates instance of ```CityDetailsContainerComponent``` class
   *
   * @param activatedRoute get access to information a route associated with component
   * @param dataStoreService instance to store and access data
   * @param googlePlacesService instance to request google place details from google places api
   * @param openWeatherService instance to request weather details from open weather
   * @param placesService instance to request places information
   */
  constructor(private activatedRoute: ActivatedRoute,

    private dataStoreService: DataStoreService,
    private googlePlacesService: GooglePlacesService,


    private openWeatherService: OpenWeatherService,

    private placesService: PlacesService
  ) { }

  /**
   * @internal
   */
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.place = this.placesService.getPlaceById(+params.id)

      const weatherReport = this.openWeatherService.getCurrentWeatherCondition(this.place);
      const placeDetails = this.googlePlacesService.getPlaceImage(this.place);

      forkJoin({
        weatherReport,
        placeDetails
      }).subscribe((results) => {
        this.place.photoUrl = results.placeDetails;
        this.weatherReport = results.weatherReport;
      });
    })

  }

  /**
   * Add a place to favorite collection
   *
   * @param place to be added to favorite collection
   */
  public onFavoriteAdd(place: IPlace): void {
    this.dataStoreService.addFavoritePlace(place)
  }

}
