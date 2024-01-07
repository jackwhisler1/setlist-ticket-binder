import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [setlist, setSetlist] = useState(null);
  const apiKey = process.env.SET
  const url = 'https://api.setlist.fm/rest/1.0/search/artists?artistName=radiohead&p=1&sort=sortName'; 
  useEffect(() => {
    const fetchSetlist = async () => {
      try {
               
        console.log(apiKey);

        console.log(url);
        const headers = {
          'x-api-key': apiKey,
          'Accept': 'application/json',
          'Accept-Language': 'en', // You can change this to your preferred language
        };

        const response = await fetch(url, { headers });
        const result = await response.json();
        setSetlist(result);
      } catch (error) {
        console.error('Error fetching setlist:', error);
      }
    };

    fetchSetlist();
  }, []);

  return (
    <div className="App">
        <p>
         Setlist Sandbox
        </p>
        <div>
      {setlist ? (
        <p>Setlist: {JSON.stringify(setlist)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
}

export default App;
