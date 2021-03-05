// Copyright WeatherBase 2021

/**
 * Interface for weather as per open weather API
 */
export interface IWeatherSummary {
    /**
     * unique identifier for weather report
     */
    id: number;
    /**
     * description about weather
     */
    description: string;
    /**
     * Icon to display
     */
    icon: string;
}