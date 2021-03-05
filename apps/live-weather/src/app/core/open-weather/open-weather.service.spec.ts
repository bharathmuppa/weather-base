// Copyright WeatherBase 2021

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OpenWeatherService } from './open-weather.service';

describe('OpenWeatherService', () => {
  let service: OpenWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(OpenWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
