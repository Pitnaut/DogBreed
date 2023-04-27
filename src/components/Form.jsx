import React from 'react';
import { dogs } from '../components/Data';
import '../stylesheets/Form.css';

function Form ({ dogId, onDogIdChange }) {

  const handleChange = (e) => {
    onDogIdChange(e.target.value);
  }

  return (
    <>
      <label className="choose" htmlFor='dogs'>Elige tu perro:
      <select value={dogId} onChange={handleChange}>
        {dogs.map((dog) => (
          <option
            className="option" 
            key={dog.id}
            value={dog.id} 
          >
            {dog.nombre}</option>
        ))}
      </select>
      </label>
    </>
  )
}

export default Form;