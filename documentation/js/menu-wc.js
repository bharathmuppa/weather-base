'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">weather-base documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-bad8bb1913c87b5a7ec2478bf4cdb2c6"' : 'data-target="#xs-components-links-module-AppModule-bad8bb1913c87b5a7ec2478bf4cdb2c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-bad8bb1913c87b5a7ec2478bf4cdb2c6"' :
                                            'id="xs-components-links-module-AppModule-bad8bb1913c87b5a7ec2478bf4cdb2c6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CityDetailsContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CityDetailsContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CitySearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CitySearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavoritePlacesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FavoritePlacesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-bad8bb1913c87b5a7ec2478bf4cdb2c6"' : 'data-target="#xs-injectables-links-module-AppModule-bad8bb1913c87b5a7ec2478bf4cdb2c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-bad8bb1913c87b5a7ec2478bf4cdb2c6"' :
                                        'id="xs-injectables-links-module-AppModule-bad8bb1913c87b5a7ec2478bf4cdb2c6"' }>
                                        <li class="link">
                                            <a href="injectables/DataStoreService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DataStoreService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GooglePlacesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GooglePlacesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OpenWeatherService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>OpenWeatherService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PlacesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PlacesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-be323f0449241498664bd530eb6216d9"' : 'data-target="#xs-components-links-module-SharedModule-be323f0449241498664bd530eb6216d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-be323f0449241498664bd530eb6216d9"' :
                                            'id="xs-components-links-module-SharedModule-be323f0449241498664bd530eb6216d9"' }>
                                            <li class="link">
                                                <a href="components/AirPollutionCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AirPollutionCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CountryFlagComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CountryFlagComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CurrentWeatherDetailsContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CurrentWeatherDetailsContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CurrentWeatherSummaryContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CurrentWeatherSummaryContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaceCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlaceCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaceHourlyForecastComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlaceHourlyForecastComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SmartPlaceCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SmartPlaceCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-be323f0449241498664bd530eb6216d9"' : 'data-target="#xs-pipes-links-module-SharedModule-be323f0449241498664bd530eb6216d9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-be323f0449241498664bd530eb6216d9"' :
                                            'id="xs-pipes-links-module-SharedModule-be323f0449241498664bd530eb6216d9"' }>
                                            <li class="link">
                                                <a href="pipes/AirQualityIndexPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AirQualityIndexPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RoundoffPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoundoffPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/WeatherIconPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WeatherIconPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataStoreService.html" data-type="entity-link">DataStoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GooglePlacesService.html" data-type="entity-link">GooglePlacesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OpenWeatherService.html" data-type="entity-link">OpenWeatherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlacesService.html" data-type="entity-link">PlacesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/ValidateDataForPlaceNavigationGuard.html" data-type="entity-link">ValidateDataForPlaceNavigationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAirPollution.html" data-type="entity-link">IAirPollution</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAirQuality.html" data-type="entity-link">IAirQuality</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChart.html" data-type="entity-link">IChart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinate.html" data-type="entity-link">ICoordinate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGooglePlace.html" data-type="entity-link">IGooglePlace</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOpenWeatherReport.html" data-type="entity-link">IOpenWeatherReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhoto.html" data-type="entity-link">IPhoto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPlace.html" data-type="entity-link">IPlace</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPlaceCard.html" data-type="entity-link">IPlaceCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISeries.html" data-type="entity-link">ISeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWeatherDetail.html" data-type="entity-link">IWeatherDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWeatherSummary.html" data-type="entity-link">IWeatherSummary</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});