import React from 'react';
import { dogs } from '../components/Data';
import '../stylesheets/Form.css';

function Form ({ dogId, onDogIdChange }) {

  const handleChange = (e) => {
    onDogIdChange(e.target.value);
  }

  return (
    <div className="dropdown">
      <label className="choose" htmlFor='dogs'>
      <select value={dogId} onChange={handleChange} className="buttond">
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
    </div>
  )
}

export default Form;