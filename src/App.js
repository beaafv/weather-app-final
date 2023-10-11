import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import SearchForm from './components/search';
import WeatherDisplay from './components/weather_display';
import HistoricalDisplay from './components/historical_display';
import useWeather from './components/useWeather';
import useFacts from './components/UseFacts'; 

const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const {
    weatherData,
    loading: weatherLoading,
    error: weatherError,
    getWeather
  } = useWeather();
  const {
    historicalEvents,
    loading: factsLoading,
    error: factsError,
    getRandomFact
  } = useFacts();

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
    getRandomFact(query);
  };

  return (
    <div className="App">
      <div className="container vh-100 justify-content-center">
        <div className="row m-4 vh-100">
          <h1>Check the Weather for today</h1>

          {/* Search Form Component */}
          <SearchForm
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
          />

          {/* Loading & Error States */}
          {(weatherLoading || factsLoading) && <p>Loading...</p>}
          {(weatherError || factsError) && (
            <p>{weatherError || factsError}</p>
          )}

          {/* Weather Display Component */}
          {weatherData && <WeatherDisplay weatherData={weatherData} />}

          {/* Historical Display Component */}
          {historicalEvents && (
            <HistoricalDisplay historicalEvents={historicalEvents} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
