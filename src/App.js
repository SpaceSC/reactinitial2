import './App.css'
import React, { useState, useEffect } from "react";

const App = () => {

  const [ valid, setValid ] = useState(false);

  function validate(e) {
    if(e.target.value.length >= 3){
      setValid(true);
    }else{
      setValid(false);
    }
  }

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <input type="text" id="text" name="text" onInput={validate}/>
        {valid ? <button>Search</button> : <button disabled>Search</button>}

    </div>
  )
}

export default App
