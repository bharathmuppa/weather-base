// Copyright WeatherBase 2021

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'weather-base-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * Creates a information card with label and value
 */
export class InfoCardComponent {
  @Input() label = '';

  @Input() value = '';

  @Input() direction = 'column';
}
