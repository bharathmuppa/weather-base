// Copyright WeatherBase 2021

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PlaceHourlyForecastComponent } from './place-hourly-forecast.component';

describe('PlaceHourlyForecastComponent', () => {
  let component: PlaceHourlyForecastComponent;
  let fixture: ComponentFixture<PlaceHourlyForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceHourlyForecastComponent],
      imports: [MatToolbarModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceHourlyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
