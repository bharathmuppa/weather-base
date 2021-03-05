// Copyright WeatherBase 2021


import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { IPlace } from '../../shared/models/IPlace';

@Injectable({
  providedIn: 'root'
})
/**
 * Service to store and access data across app
 */
export class DataStoreService {


  private selectedPlace$: BehaviorSubject<IPlace>;

  private favoritePlaces: IPlace[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  /**
   * Initializes a new instance of the ```DataStoreService``` class.
   */
  constructor() {
    this.selectedPlace$ = new BehaviorSubject({} as IPlace);
  }

  /**
   * Gets currently selected place information
   *
   * @returns subscribable place data
   */
  public getSelectedPlace(): Observable<IPlace> {
    return this.selectedPlace$.asObservable();
  }

  /**
   * Gets  all favorite places
   *
   * @returns list of places
   */
  public getAllFavoritePlaces(): IPlace[] {
    return this.favoritePlaces;
  }

  /**
   * Set place information
   *
   * @param place details of place
   */
  public setCurrentlySelectedPlace(place: IPlace): void {
    this.selectedPlace$.next(place)
  }

  /**
   * Add a place to favorites list
   *
   * @param place to be added
   */
  public addFavoritePlace(place: IPlace): void {
    if (this.isDuplicate(this.favoritePlaces, place)) {
      return;
    }

    this.favoritePlaces.push(place);

    localStorage.setItem('favorites', JSON.stringify(this.favoritePlaces));
  }

  /**
   * Remove a place from favorites list
   *
   * @param place to be removed
   */
  public removeFavoritePlace(place: IPlace): void {

    this.favoritePlaces = this.favoritePlaces.filter(p => place.id === p.id);
    localStorage.setItem('favorites', JSON.stringify(this.favoritePlaces));
  }

  /**
   * @private
   */
  private isDuplicate(places: IPlace[], place: IPlace): boolean {
    const duplicates = places.filter((p) => p.id === place.id);

    return duplicates.length > 0;
  }
}
