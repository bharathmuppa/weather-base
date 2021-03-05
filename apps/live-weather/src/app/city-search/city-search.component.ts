// Copyright WeatherBase 2021

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith, filter, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { PlacesService } from '../core/places/places.service';
import { IPlace } from '../shared/models/IPlace';
import { DataStoreService } from '../core/data-store/data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'weather-base-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
/**
 * Construct elements required for city search
 */
export class CitySearchComponent implements OnInit {


  /**
   * Name of the requested city
   */
  public cityName = '';

  /**
   * List of available cities
   */
  public allCities: IPlace[] = [];

  /**
   * Represents set of cities after filter
   */
  public filteredCities$: Observable<IPlace[]>;

  /**
   * Controller for city name search
   */
  public cityNameControl: FormControl;

  /**
   * Initializes a new instance of the ```DashboardComponent``` class.
   *
   * @param placesService instance to request places information
   * @param dataStoreService to store and access data
   * @param router instance of angular router
   */
  constructor(
    private placesService: PlacesService,
    private dataStoreService: DataStoreService,
    private router: Router) {

    this.cityNameControl = new FormControl();
    this.filteredCities$ = this.cityNameControl.valueChanges
      .pipe(
        startWith(''),
        filter(res => res.length > 2),
        debounceTime(500),
        distinctUntilChanged(),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.allCities.slice())
      );
  }

  /**
   * Creates a city model for UI
   *
   * @param city selected city
   * @returns formatted city text to display
   */
  public displayFn(city: IPlace): string {
    return city && city.name ? city.name : '';
  }

  /**
   * Gets Weather condition of the location
   *
   * @param place location details of city
   */
  public getWeatherCondition(place: IPlace): void {

    this.dataStoreService.setCurrentlySelectedPlace(place);

    this.router.navigate(['/city', place.name, place.id]);

  }

  /**
   * @internal
   */
  ngOnInit(): void {
    this.allCities = this.placesService.getAllPlaces();
  }

  /**
   * @private
   */
  private filter(city: string): IPlace[] {
    const cityLowercase = city.toLowerCase();

    return this.placesService.getPlacesByName(cityLowercase);
  }


}
