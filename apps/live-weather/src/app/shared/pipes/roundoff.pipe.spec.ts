// Copyright WeatherBase 2021

import { RoundoffPipe } from './roundoff.pipe';

describe('RoundoffPipe', () => {
  it('create an instance', () => {
    const pipe = new RoundoffPipe();
    expect(pipe).toBeTruthy();
  });
  it('should transform 2.57 to 3 ', () => {
    // Assign
    const pipe = new RoundoffPipe();
    // Act & Assert
    expect(pipe.transform(2.57)).toEqual(3);
  });

  it('should transform 2.47 to 2 ', () => {
    // Assign
    const pipe = new RoundoffPipe();
    // Act & Assert
    expect(pipe.transform(2.47)).toEqual(2);
  });

  it('should transform 2.7 to 3 ', () => {
    // Assign
    const pipe = new RoundoffPipe();
    // Act & Assert
    expect(pipe.transform(2.7)).toEqual(3);
  });

  it('should transform 2.1 to 2 ', () => {
    // Assign
    const pipe = new RoundoffPipe();
    // Act & Assert
    expect(pipe.transform(2.1)).toEqual(2);
  });
  it('should transform -2.1 to -2 ', () => {
    // Assign
    const pipe = new RoundoffPipe();
    // Act & Assert
    expect(pipe.transform(-2.1)).toEqual(-2);
  });
  it('should transform -2.8 to -3 ', () => {
    // Assign
    const pipe = new RoundoffPipe();
    // Act & Assert
    expect(pipe.transform(-2.8)).toEqual(-3);
  });


});
