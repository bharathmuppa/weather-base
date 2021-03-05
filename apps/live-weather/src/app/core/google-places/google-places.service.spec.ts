// Copyright WeatherBase 2021

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GooglePlacesService } from './google-places.service';

describe('GooglePlacesService', () => {
  let service: GooglePlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(GooglePlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
