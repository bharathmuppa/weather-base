// Copyright WeatherBase 2021

/**
 * Interface for chart data
 */
export interface IChart {

    /**
     * name of the chart category
     */
    name: string;
    /**
     * Collection of detailed data
     */
    series: ISeries[]
}

/**
 * Interface for series data
 */
export interface ISeries {
    /**
     * Data to be published on y-axis
     */
    name: string;
    /**
     * Data to be published on x-axis
     */
    value: number;
}