import React from 'react';
import globe from './globe.svg';
import sun from './sun.svg';
import cold from './cold.svg';

const WeatherDisplay = ({ weatherData }) => {

  if (!weatherData) return null;

  const celsiusTemp = Math.round(weatherData.main.temp - 273.15);
  const feelsLikeTemp = Math.round(weatherData.main.feels_like - 273.15);

  return (
    <div className="weather-box col-lg-12">
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <h2>Temperature today: {celsiusTemp}°C </h2>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Temperature sensation: {feelsLikeTemp} °C </p>
      <img src={globe} alt="Logo" width='200px' />
      {celsiusTemp > 20 ? (
        <>
          <img src={sun} alt="Sun" width='100px' style={{ position: 'absolute', top: '170px', left: '25px' }} />
          <img src={sun} alt="Logo" width={'100px'} style={{ position: 'absolute', top: '300px', left: '200px' }} />
          <img src={sun} alt="Logo" width={'100px'} style={{ position: 'absolute', top: '300px', right: '200px' }} />
          <img src={sun} alt="Logo" width={'100px'} style={{ position: 'absolute', top: '500px', right: '300px' }} />
          <img src={sun} alt="Logo" width={'100px'} style={{ position: 'absolute', top: '350px', right: '400px' }} />
        </>
      ) : (
        <>
            <img src={cold} alt="Logo" width={'100px'} style={{ position: 'absolute', top: '170px', right: '400px' }} />
  <img src={cold} alt="Logo" width={'100px'} style={{ position: 'absolute', top: '500px', left: '400px' }} />
  <img src={cold} alt="Logo" width={'100px'} style={{ position: 'absolute', top: '350px', right: '200px' }} />
  <img src={cold} alt="Logo" width={'100px'} style={{ position: 'absolute', top: '350px', left: '200px' }} />
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;
