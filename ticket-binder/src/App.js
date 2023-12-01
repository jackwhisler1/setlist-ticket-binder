import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const apiKey = process.env.SETLIST_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
        <p>
         Setlist Sandbox
        </p>
        <div>
      {data ? (
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading...</p>
      )}
        </div>
    </div>
  );
}

export default App;
