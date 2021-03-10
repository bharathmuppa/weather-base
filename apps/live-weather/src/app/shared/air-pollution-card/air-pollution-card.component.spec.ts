// Copyright WeatherBase 2021

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { createMock } from 'ts-auto-mock';

import { of } from 'rxjs';

import { OpenWeatherService } from '../../core/open-weather/open-weather.service';
import { AirPollutionCardComponent } from './air-pollution-card.component';
import { IAirPollution, IAirQuality } from '../models/IAirPollution';
import { AirQualityIndexPipe } from '../pipes/air-quality-index.pipe';
import { IPlace } from '../models/IPlace';

describe('AirPollutionCardComponent', () => {
  let component: AirPollutionCardComponent;
  let fixture: ComponentFixture<AirPollutionCardComponent>;

  beforeEach(async () => {
    const openWeatherServiceStub: Partial<OpenWeatherService> = {
      getAirPollutionDetails: () => {
        return of(createMock<IAirPollution>({
          list: [createMock<IAirQuality>({
            main: {
              aqi: '0'
            },
            components: {
              co: '100'
            }
          })]
        }));
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

  it('should return weather report', () => {
    // Arrange
    const dummyPlace = createMock<IPlace>();
    component.place = dummyPlace;

    // Act
    component.ngOnChanges({
      place: new SimpleChange(null, dummyPlace, true)
    })

    fixture.detectChanges();

    // Assert
    expect(component.airPollutionReport).toBeDefined();
  });

  it('should show air quality as Good', () => {
    // Arrange
    const dummyPlace = createMock<IPlace>();
    component.place = dummyPlace;

    // Act
    component.ngOnChanges({
      place: new SimpleChange(null, dummyPlace, true)
    })
    fixture.detectChanges();
    const receivedAirQuality = fixture.nativeElement.querySelector('#air-quality').value;

    // Assert
    expect(receivedAirQuality).toBe('Good');
  });

  it('should show co as 100', () => {
    // Arrange
    const dummyPlace = createMock<IPlace>();
    component.place = dummyPlace;

    // Act
    component.ngOnChanges({
      place: new SimpleChange(null, dummyPlace, true)
    })
    fixture.detectChanges();
    const receivedAirQuality = fixture.nativeElement.querySelector('#co-card').value;

    // Assert
    expect(receivedAirQuality).toBe('100μg/m3');
  });
});
