// Copyright WeatherBase 2021

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CityDetailsContainerComponent } from './city-details-container.component';

describe('CityDetailsContainerComponent', () => {
  let component: CityDetailsContainerComponent;
  let fixture: ComponentFixture<CityDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityDetailsContainerComponent],
      imports: [RouterTestingModule.withRoutes([]),
        HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
