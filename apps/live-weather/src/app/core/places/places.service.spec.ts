// Copyright WeatherBase 2021

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PlacesService } from './places.service';

describe('PlacesService', () => {
  let service: PlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(PlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
