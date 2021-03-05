import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPollutionCardComponent } from './air-pollution-card.component';

describe('AirPollutionCardComponent', () => {
  let component: AirPollutionCardComponent;
  let fixture: ComponentFixture<AirPollutionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPollutionCardComponent ]
    })
    .compileComponents();
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
