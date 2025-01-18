import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import useCountries from './countries';


const useWeather = () => {

const [weatherData, setWeatherData] = useState(null);
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const [query, setQuery] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');


const getWeather = async (query) => {
  setLoading(true);
  setError('');
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`);
    setWeatherData(response.data);
  } catch (error) {
    console.error(error);
    console.log(query);

    setError('did you mean something else?');
  }
  setLoading(false);
};
return { weatherData, query, setQuery, loading, error, getWeather };
}


export default useWeather;
