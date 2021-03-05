// Copyright WeatherBase 2021

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherDetailsContainerComponent } from './current-weather-details-container.component';

describe('CurrentWeatherDetailsContainerComponent', () => {
  let component: CurrentWeatherDetailsContainerComponent;
  let fixture: ComponentFixture<CurrentWeatherDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherDetailsContainerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
