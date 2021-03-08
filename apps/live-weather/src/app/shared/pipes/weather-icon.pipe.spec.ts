// Copyright WeatherBase 2021

import { WeatherIconPipe } from './weather-icon.pipe';

describe('WeatherIconPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform xy to http://openweathermap.org/img/w/xy.png', () => {
    // Arrange
    const pipe = new WeatherIconPipe();
    const inputValue = 'xy';
    const expectedValue = 'http://openweathermap.org/img/w/xy.png';

    // Act & Assert
    expect(pipe.transform(inputValue)).toBe(expectedValue);
  });

  it('should transform yz to http://openweathermap.org/img/w/yz.png', () => {
    // Arrange
    const pipe = new WeatherIconPipe();
    const inputValue = 'yz';
    const expectedValue = 'http://openweathermap.org/img/w/yz.png';

    // Act & Assert
    expect(pipe.transform(inputValue)).toBe(expectedValue);
  });
});
