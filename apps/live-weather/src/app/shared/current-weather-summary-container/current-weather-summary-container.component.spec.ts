// Copyright WeatherBase 2021

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundoffPipe } from '../pipes/roundoff.pipe';
import { WeatherIconPipe } from '../pipes/weather-icon.pipe';

import { CurrentWeatherSummaryContainerComponent } from './current-weather-summary-container.component';

describe('CurrentWeatherSummaryContainerComponent', () => {
  let component: CurrentWeatherSummaryContainerComponent;
  let fixture: ComponentFixture<CurrentWeatherSummaryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherSummaryContainerComponent, WeatherIconPipe, RoundoffPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherSummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
