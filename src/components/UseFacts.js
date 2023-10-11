import { useState } from 'react';
import axios from 'axios';

const useFacts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [historicalEvents, setHistoricalEvents] = useState([]);
  const FACT_API_KEY = process.env.REACT_APP_FACTS_API_KEY;
  const [query, setQuery] = useState('');

  const getRandomFact = async (query) => {
    console.log(`Query within getRandomFact: ${query}`);
    setLoading(true);
    setError('');
    try {

      if(!query) throw new Error("Query is empty or undefined"); // Validate the query
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



  return { historicalEvents, loading, error, getRandomFact, query, setQuery };
}



export default useFacts;
