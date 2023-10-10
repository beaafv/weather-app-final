import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import globe from './components/globe.svg';
import sun from './components/sun.svg';
import cold from './components/cold.svg';


const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [historicalEvents, setHistoricalEvents] = useState([]);



  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const FACT_API_KEY = process.env.REACT_APP_FACTS_API_KEY;


  const getWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      setError('Unable to retrieve weather data. Please try again.');
    }
    setLoading(false);
  };

  const getRandomFact = async () => {
    setLoading(true);
    setError('');
    try {
      const headers = {
        'X-Api-Key': FACT_API_KEY,
      };
      const response = await axios.get(`https://api.api-ninjas.com/v1/historicalevents?text=${query}`, {
        headers: headers,
      });
      setHistoricalEvents(response.data);
    } catch (error) {
      setError('Unable to retrieve fact. Please try again.');
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather();
    getRandomFact();
  };

  return (
    <div className="App">

      <div className="container vh-100 justify-content-center">
        <div className="row m-4 vh-100">
      <h1> Check the Weather for today</h1>
      <form onSubmit={handleSearch}>
        <input style={{width: '50vw', borderRadius:'4px', height:'5vh', borderColor:'blue', display:'flex', flexDirection:'column', margin:'auto'}}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city "
        />


        <button className="btn btn-light mt-2" style={{width:'200px', backgroundColor:'black', color:'white'}}type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <div className="weather-box col-lg-12">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <h2>Temperature today: {Math.round(weatherData.main.temp - 273.15)}°C </h2>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p> Temperature sensation: {Math.round(weatherData.main.feels_like - 273.15)} °C </p>
          <img src={globe} alt="Logo" width={'200px'} />
          {Math.round(weatherData.main.temp - 273.15) > 20 ? (
  <>
    <img src={sun} alt="Logo" width={'100px'} style={{ position: 'absolute', top: '170px', left: '25px' }} />
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

      )}
      <div className="weather-box col-lg-12">

                {historicalEvents.slice(0, 1).map((event, index) => (
                  <p>
                    <strong>In {event.year}</strong> {event.event}
                  </p>

                ))}
            </div>
    </div>
    </div>
    </div>

  );
};

export default WeatherApp;
