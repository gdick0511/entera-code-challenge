import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useEffect, useState} from 'react'
import InfoContainer from './InfoContainer';

function App() {

  const [info, setInfo] = useState({})

  // using useEffect to make the fetch request to the given API. Once the data is returned, I am then setting state with that data
  useEffect(() => {
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436121')
    .then(resp => resp.json())
    .then(dataInfo => setInfo(dataInfo))
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>Entera Code Challenge</h1>
       <InfoContainer info={info} />
      </header>
    </div>
  );
}

export default App;
