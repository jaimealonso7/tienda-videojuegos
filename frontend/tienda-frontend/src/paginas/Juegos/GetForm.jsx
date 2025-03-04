import React, { useState } from 'react'
import "./GetForm.css"
function GetForm({ handleFormSubmit}) {

  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(10);  

  const handleFromInput = (e) => {
    setFrom(e.target.value);
  }

  const handleToInput = (e) => {
    setTo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("From:", from, "To:", to);
    handleFormSubmit(from, to);
    
  }

  return (
    <form onSubmit={handleSubmit} className='formulario'>
        <fieldset>
            <label htmlFor="from-pokemon">Desde: </label>
            <input type="number" id="from-pokemon" min={1} onChange={handleFromInput}/>
        </fieldset>
        <fieldset>
            <label htmlFor="to-pokemon">Hasta: </label>
            <input type="number" id="to-pokemon" onChange={handleToInput}/>
        </fieldset>
        <button>Buscar Juegos!</button>
    </form>
  )
}

export default GetForm