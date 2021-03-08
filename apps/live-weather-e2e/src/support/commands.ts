// Copyright WeatherBase 2021

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    logger(message: string): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('logger', (message) => {
  console.log('Logger: ', new Date(), ' : ', message);
});
