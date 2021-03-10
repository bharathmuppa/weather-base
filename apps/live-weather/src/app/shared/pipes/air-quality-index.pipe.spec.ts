// Copyright WeatherBase 2021

import { AirQualityIndexPipe } from './air-quality-index.pipe';

describe('AirQualityIndexPipe', () => {

  it('create an instance', () => {
    const pipe = new AirQualityIndexPipe();
    expect(pipe).toBeTruthy();
  });
  it('should transform 0 to "Good" ', () => {
    // Arrange
    const pipe = new AirQualityIndexPipe();
    // Act & Assert
    expect(pipe.transform(0)).toContain('Good');
  });
  it('should transform 1 to "Fair" ', () => {
    // Arrange
    const pipe = new AirQualityIndexPipe();
    // Act & Assert
    expect(pipe.transform(1)).toContain('Fair');
  });
  it('should transform string "1" to "Fair" ', () => {
    // Arrange
    const pipe = new AirQualityIndexPipe();
    // Act & Assert
    expect(pipe.transform(1)).toContain('Fair');
  });
  it('should transform 2 to "Moderate" ', () => {
    // Arrange
    const pipe = new AirQualityIndexPipe();
    // Act & Assert
    expect(pipe.transform(2)).toContain('Moderate');
  });
  it('should transform 3 to "Poor" ', () => {
    // Arrange
    const pipe = new AirQualityIndexPipe();
    // Act & Assert
    expect(pipe.transform(3)).toContain('Poor');
  });
  it('should transform 4 to "Very Poor" ', () => {
    // Arrange
    const pipe = new AirQualityIndexPipe();
    // Act & Assert
    expect(pipe.transform(4)).toContain('Very poor');
  });
  it('should transform 5 to undefined ', () => {
    // Arrange
    const pipe = new AirQualityIndexPipe();
    // Act & Assert
    expect(pipe.transform(5)).toBeUndefined();
  });

});
