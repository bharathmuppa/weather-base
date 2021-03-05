// Copyright WeatherBase 2021

import { getGreeting } from '../support/app.po';

describe('live-weather', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Weather Base');
  });

  it('should navigate Eindhoven details page', () => {
    const expectedUrl = '/city/Gemeente%20Eindhoven/2756252';
    cy.get('#city-search-field').type('Gemeente Eindhoven');
    cy.get('mat-option').contains('Gemeente Eindhoven').click();
    cy.url().should('contain', expectedUrl);
  });

  // it('should add Gemeente Eindhoven to favorites list', () => {
  //   cy.get('#city-search-field').type('Gemeente Eindhoven');
  //   cy.get('mat-option').contains('Gemeente Eindhoven').click({ force: true })
  //   cy.pause();
  //   cy.get('.place-card__fav-icon').click();
  //   cy.get('.profle-icon').click();
  //   cy.get('.go-to-favorites').click();
  //   cy.get('#place-name').contains('Gemeente Eindhoven');
  // });

});
