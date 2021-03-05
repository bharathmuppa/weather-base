// Copyright WeatherBase 2021

/**
 * Interface for Air pollution data model
 */
export interface IAirPollution {
    list: IAirQuality[]
}

/**
 * Interface for Air quality model
 */
export interface IAirQuality {
    main: {
        aqi: string
    },
    components: {
        co: string;
        no: string;
        no2: string;
        o3: string;
        so2: string;
        nh3: string;
    }
}