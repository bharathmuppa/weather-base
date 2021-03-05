// Copyright WeatherBase 2021

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityDetailsContainerComponent } from './city-details-container/city-details-container.component';
import { ValidateDataForPlaceNavigationGuard } from './core/router-guards/validate-data-for-place-navigation.guard';
import { FavoritePlacesComponent } from './favorite-places/favorite-places.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'favorites', component: FavoritePlacesComponent },
  { path: 'city/:name/:id', component: CityDetailsContainerComponent, canActivate: [ValidateDataForPlaceNavigationGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //TODO: Map to page not found component
  { path: '**', redirectTo: '/home' }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
/**
 * Packs Route specific configuration
 */
export class AppRoutingModule { }
