import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    axios.get(process.env.REACT_APP_BACKEND_URL + '/message')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setMessage("Error fetching data from the server");
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {message} {/* Display the API response here */}
        </p>
      </header>
    </div>
  );
}

export default App;
