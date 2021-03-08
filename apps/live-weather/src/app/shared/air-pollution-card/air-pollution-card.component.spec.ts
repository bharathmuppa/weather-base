// Copyright WeatherBase 2021

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { createMock } from 'ts-auto-mock';

import { of } from 'rxjs';

import { OpenWeatherService } from '../../core/open-weather/open-weather.service';
import { AirPollutionCardComponent } from './air-pollution-card.component';
import { IAirPollution } from '../models/IAirPollution';
import { AirQualityIndexPipe } from '../pipes/air-quality-index.pipe';

describe('AirPollutionCardComponent', () => {
  let component: AirPollutionCardComponent;
  let fixture: ComponentFixture<AirPollutionCardComponent>;

  beforeEach(async () => {
    const openWeatherServiceStub: Partial<OpenWeatherService> = {
      getAirPollutionDetails: () => {
        return of(createMock<IAirPollution>());
      },
    };

    await TestBed.configureTestingModule({
      declarations: [AirPollutionCardComponent, AirQualityIndexPipe],
      imports: [MatToolbarModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [{ provide: OpenWeatherService, useValue: openWeatherServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPollutionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
