import './App.css'
import React, { useState, useEffect } from "react";
import Client from './components/Client';

const App = () => {

  const [ valid, setValid ] = useState(false);
  const [ search, setSearch ] = useState("");
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ clients, setClients ] = useState([]);

  function validate(e) {
    if(e.target.value.length >= 3){
      setSearch(e.target.value);
      setValid(true);
    }else{
      setValid(false);
    }
  }

  function doFetch() {
    fetch("/api/clients?search={search}")
    .then(res => res.json())
     .then(
      (result) => {
        setIsLoaded(true);
        setClients(result);
      })
      
    }

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <input type="text" id="text" name="text" onInput={validate}/>
      {valid ? <button onClick={doFetch}>Search</button> : <button disabled>Search</button>}
      {clients.map((client) => (<Client key={client.name} client={client}/>))}

    </div>
  )
}

export default App
