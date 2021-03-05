// Copyright WeatherBase 2021

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Validates the path before navigating to Place details
 */
export class ValidateDataForPlaceNavigationGuard implements CanActivate {
  /**
   * Creates instance of ```CityDetailsContainerComponent``` class
   *
   * @param router instance of angular router
   */
  constructor(private router: Router) {

  }

  /**
   * @internal
   */
  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!route.params.name || !route.params.id) {
      this.router.navigate(['/home']);

      return false;
    }

    return true;

  }

}
