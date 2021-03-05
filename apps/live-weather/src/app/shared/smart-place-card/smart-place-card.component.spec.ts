// Copyright WeatherBase 2021

import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { createMock } from 'ts-auto-mock';

import { RoundoffPipe } from '../pipes/roundoff.pipe';
import { WeatherIconPipe } from '../pipes/weather-icon.pipe';

import { SmartPlaceCardComponent } from './smart-place-card.component';
import { OpenWeatherService } from '../../core/open-weather/open-weather.service';
import { IOpenWeatherReport } from '../models/IOpenWeatherReport';
import { of } from 'rxjs';
import { IPlace } from '../models/IPlace';
import { RouterTestingModule } from '@angular/router/testing';

describe('SmartPlaceCardComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  let smartPlaceComponent: SmartPlaceCardComponent;
  let smartPlaceCardFixture: ComponentFixture<SmartPlaceCardComponent>;

  beforeEach(async () => {
    let openWeatherServiceStub: Partial<OpenWeatherService>;
    openWeatherServiceStub = {
      getCurrentWeatherCondition: () => { return of(createMock<IOpenWeatherReport>()) }
    }
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, SmartPlaceCardComponent, WeatherIconPipe, RoundoffPipe],
      imports: [MatCardModule, MatToolbarModule, MatIconModule, MatProgressBarModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [{ provide: OpenWeatherService, useValue: openWeatherServiceStub }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    smartPlaceCardFixture = TestBed.createComponent(SmartPlaceCardComponent);
    testHostComponent = testHostFixture.componentInstance;
    smartPlaceComponent = smartPlaceCardFixture.componentInstance;
    jest.spyOn(smartPlaceComponent, "getWeatherReport").mockImplementation(() => { return of({ lat: "50" } as unknown as IOpenWeatherReport) })
    testHostFixture.detectChanges();
    smartPlaceCardFixture.detectChanges();
  });

  it('should create', () => {
    expect(smartPlaceComponent).toBeTruthy();
  });

});

const mockPlace: IPlace = createMock<IPlace>({ name: 'amsterdam' });

@Component({
  selector: `host-component`,
  template: `<weather-base-smart-place-card [place]="mockPlace"></weather-base-smart-place-card>`
})
class TestHostComponent {
}

