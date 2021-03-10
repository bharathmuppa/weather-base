// Copyright WeatherBase 2021

import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createMock } from 'ts-auto-mock';
import { IWeatherDetail } from '../models/IWeatherDetail';

import { CurrentWeatherDetailsContainerComponent } from './current-weather-details-container.component';

describe('CurrentWeatherDetailsContainerComponent', () => {
  let component: CurrentWeatherDetailsContainerComponent;
  let fixture: ComponentFixture<CurrentWeatherDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherDetailsContainerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).overrideComponent(CurrentWeatherDetailsContainerComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display dew_point as "10°C"', () => {
    // Arrange
    const tempWeatherDetails = createMock<IWeatherDetail>({
      dew_point: 10
    });

    // Act
    component.weather = tempWeatherDetails;

    fixture.detectChanges();

    // Assert

    const receivedDewPoint = fixture.nativeElement.querySelector('weather-base-info-card').value;

    expect(receivedDewPoint).toBe('10 °C');
  });
  it('should display pressure as "100 hpa"', () => {
    // Arrange
    const tempWeatherDetails = createMock<IWeatherDetail>({
      pressure: 100
    });

    // Act
    component.weather = tempWeatherDetails;

    fixture.detectChanges();

    // Assert

    const receivedDewPoint = fixture.nativeElement.querySelectorAll('weather-base-info-card')[1].value;

    expect(receivedDewPoint).toBe('100hPa');
  });
  it('should display humidity as "10%"', () => {
    // Arrange
    const tempWeatherDetails = createMock<IWeatherDetail>({
      humidity: 10
    });

    // Act
    component.weather = tempWeatherDetails;

    fixture.detectChanges();

    // Assert

    const receivedDewPoint = fixture.nativeElement.querySelectorAll('weather-base-info-card')[2].value;

    expect(receivedDewPoint).toBe('10%');
  });
  it('should display visibility as "10 m"', () => {
    // Arrange
    const tempWeatherDetails = createMock<IWeatherDetail>({
      visibility: 10
    });

    // Act
    component.weather = tempWeatherDetails;

    fixture.detectChanges();

    // Assert

    const receivedDewPoint = fixture.nativeElement.querySelectorAll('weather-base-info-card')[3].value;

    expect(receivedDewPoint).toBe('10 m');
  });
});
