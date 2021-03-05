// Copyright WeatherBase 2021

import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'weather-base-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
/**
 * Provides header for application
 */
export class HeaderComponent {
  /**
   * Initializes a new instance of the ```HeaderComponent``` class.
   *
   * @param domSanitizer used to  sanitize the url
   * @param matIconRegistry to register and display icons
   * @param router instance of angular router
   */
  constructor(private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry, private router: Router) {
    this.matIconRegistry.addSvgIcon(
      `weather-base-icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/wb.svg')
    );
  }


}
