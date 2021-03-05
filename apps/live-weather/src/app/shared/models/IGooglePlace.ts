// Copyright WeatherBase 2021

/**
 * Interface for Google place api model
 */
export interface IGooglePlace {
    candidates: [{ photos: IPhoto[] }];
    status: string;
}

/**
 * Interface represents places model of Google API
 */
interface IPhoto {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;

}