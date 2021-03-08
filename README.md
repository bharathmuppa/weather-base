# WeatherBase

## Content

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [API](#api)
4. [Project Structure](#project-structure)
5. [Deployment](#deployment)
6. [Documentation](#documentation)
7. [Commands](#useful-commands)
8. [Others](#others)

# Introduction

Weather Base is an web application to Monitor weather in your favorite cities across Netherland.

This app consists of following features

1. Air quality of few selected places in Netehrlands
2. Search any city within Netherland and get the live and hourly weather report
3. Add any place as your favorite and go to favorites in menu to check live weather of all your favorite places

It can be extendable to the other parts of world.

1. App is built using Angular framework
2. Weather related data is retrieved from [Open weather API](https://openweathermap.org/api)
3. Places related data is obtained from google places API
4. Project structure is based on monorepo style. (Used Nx)

# Installation

## Local installation

- Clone this reo using `git clone https://github.com/bharathmuppa/weather-base.git`
- Run `npm ci` for a clean install.
- Run `npm start` to start application in your local machine .
- Open chrome and navigate to `http://localhost:4200`

# API

This project makes use of

1. Open Weather API (Weather Data)

   - Go to [Open weather](https://openweathermap.org/api)
   - Subscribe to corresponding api
   - Add a new API key
   - Place the new key in angular environment file

2. Google API (Images of places)
   - Go to [Google cloud console](https://console.cloud.google.com/home/dashboard?project=weatherbase-306123)
   - Select a project
   - Subscribe to places API
   - Add an [API key](https://developers.google.com/maps/documentation/places/web-service/get-api-key?hl=it)
   - Place the new key in angular environment file

# Project Structure

- This project structure is wel suitable for enterprise level applications to small scale applications.
- It is platform agnostic architecture
- Learn more about [Nx](#nx) here
- Configured with latest eslint rules
- Prettier is in place to format the files on Save and on Request
- Equipped with code snippets to help developers to ease the process of documentation

# Deployment

Before deployment, scripts check for any unit test or e2e test anomalies. Not meeting the check wont let you to push the code
After check code will be pushed to the corresponding branch in github and automatic scripts are in place to deploy it to netlify

# Documentation

Latest Documents will be available [here](https://weather-base-docs.netlify.app/)

# Useful Commands

Run `ng g component my-component --project=my-app` to generate a new component.
Run `npm run generate:Docs` to generate docs.
Run `npm run dep-graph` to check whole dependencies between projects and libs in this repo.
Run `npm run update` to update to latest version.
Run `npm run affected:apps` to run sanity check on affected apps

# Others

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

This project was generated using [Nx](https://nx.dev).

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@weather-base/mylib`.

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
