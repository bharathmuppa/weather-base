// Copyright WeatherBase 2021

import {
  ComponentFixture,
  TestBed
}

  from '@angular/core/testing';

import {
  CountryFlagComponent
}

  from './country-flag.component';

describe('CountryFlagComponent', () => {
  let component: CountryFlagComponent;
  let fixture: ComponentFixture<CountryFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryFlagComponent]
    }).compileComponents();
  }

  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFlagComponent);
    component = fixture.componentInstance;
  }

  );

  it('should create', () => {
    expect(component).toBeTruthy();
  }

  );

  it('should get image src with country code ', () => {
    // Arrange
    const imageEle = fixture.nativeElement.querySelector('img');
    const expectedText = 'https://www.countryflags.io/nl/shiny/24.png';
    component.country = 'nl';

    // Act
    fixture.detectChanges();

    // Assert
    expect(imageEle.src).toBe(expectedText);
  }

  );
}

);