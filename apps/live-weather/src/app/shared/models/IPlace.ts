// Copyright WeatherBase 2021

import { ICoordinate } from './ICoordinate';

/**
 * Interface for classes that uses city
 */
export interface IPlace {
  /**
   *  Identifier for the city
   */
  id: number;
  /**
   * Name of the city
   */
  name: string;

  /**
   * State in which city resides
   */
  state: string;
  /**
   * Country in which city resides
   */
  country: string;
  /**
   * Coordinates of the city
   */
  coord: ICoordinate;

  /**
   * points of locations photo
   */
  photoUrl: string;

  /**
   * Gets current favorite state of location
   */
  isFavorite: boolean;
}
