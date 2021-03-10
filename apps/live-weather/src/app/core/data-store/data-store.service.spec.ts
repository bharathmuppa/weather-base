// Copyright WeatherBase 2021

import { TestBed } from '@angular/core/testing';
import { createMock } from 'ts-auto-mock';

import { IPlace } from '../../shared/models/IPlace';
import { DataStoreService } from './data-store.service';

describe('DataStoreService', () => {
  let service: DataStoreService;

  beforeEach(() => {
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();

    jest.spyOn(window.localStorage.__proto__, 'getItem');
    window.localStorage.__proto__.getItem = jest.fn();

    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should match no of places to be 1', () => {
    // Arrange
    const mockPlace = createMock<IPlace>();

    // Act
    service.addFavoritePlace(mockPlace);

    // Assert
    expect(service.getAllFavoritePlaces().length).toEqual(1);
  });

  it('should match no of places to be 2', () => {
    // Arrange
    const mockPlace1 = createMock<IPlace>({ id: 1 });
    const mockPlace2 = createMock<IPlace>({ id: 2 });

    // Act
    service.addFavoritePlace(mockPlace1);
    service.addFavoritePlace(mockPlace2);

    // Assert
    expect(service.getAllFavoritePlaces().length).toEqual(2);
  });

  it('should return 1 when you remove a place from  favorites list with 2 items', () => {
    // Arrange
    const mockPlace1 = createMock<IPlace>({ id: 1 });
    const mockPlace2 = createMock<IPlace>({ id: 2 });

    // Act
    service.addFavoritePlace(mockPlace1);
    service.addFavoritePlace(mockPlace2);
    service.removeFavoritePlace(mockPlace2);

    // Assert
    expect(service.getAllFavoritePlaces().length).toEqual(1);
  });
});
