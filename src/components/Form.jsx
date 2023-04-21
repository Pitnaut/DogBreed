import React from 'react';
import { dogs } from '../components/Data';

function Form () {


  
  return (
    <form>
      <label for='dogs'>Elige tu perro</label>
      <select id='dogs'>
        {dogs.map((dog, index) => (
          <option key={index} value={dog.name}>{dog.name}</option>
        ))}
      </select>
    </form>
  )
}

export default Form;