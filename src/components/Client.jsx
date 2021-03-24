import React, { useState} from "react";


function Client({client}) {
  const [ show, setShow ] = useState(true);

  return (
    <div>
      <p>{client.name}</p>
      {show && <button onClick={() => {setShow(false)}}>vaccinated</button>}
      {!show && <p>{client.isVaccinated}</p>}
    </div>
  )
}

export default Client;
