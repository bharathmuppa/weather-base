// Copyright WeatherBase 2021

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { PlaceCardComponent } from './place-card.component';
import { WeatherIconPipe } from '../pipes/weather-icon.pipe';
import { RoundoffPipe } from '../pipes/roundoff.pipe';
import { Component } from '@angular/core';

describe('PlaceCardComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, PlaceCardComponent, WeatherIconPipe, RoundoffPipe],
      imports: [MatCardModule, MatToolbarModule, MatIconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display amsterdam in place-name field', () => {
    // Assign
    const placeName = fixture.nativeElement.querySelector('#place-name');

    // Assert
    expect(placeName.textContent).toContain('amsterdam');
  });
});

@Component({
  selector: `host-component`,
  template: `<weather-base-place-card [place]="{ name: 'amsterdam' }"></weather-base-place-card>`,
})
class TestHostComponent {}
