import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const useCountries = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountry(response.data);
      } catch (error) {
        setError('Unable to retrieve country data. Please try again.');
      }
      setLoading(false);
    };

    getCountries(); 
  }, []); // Empty dependency array to ensure it only runs once on mount

  return { country, loading, error };
};

export default useCountries;
