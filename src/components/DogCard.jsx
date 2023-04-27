import React, {useState} from 'react';
import Form from './Form';
import { dogs } from '../components/Data';

function DogCard() {

  const [dogId, setDogId] = useState(0)

  return (
    <>
      <Form dogId={dogId} onDogIdChange={setDogId} />
      <div className="container">
        <img 
          className="fotodog"
          src={`../../public/imagenes/${dogs[dogId].imagen}.jpg`}
          alt='texto'
          />
        <div className="text-container">
          <p className="dogname">{dogs[dogId].nombre}</p>
          <p className="origen">{dogs[dogId].origen}</p>
          <p className="frase">{dogs[dogId].frase}</p>
          <p className="trivia">{dogs[dogId].trivia}</p>  
        </div> 
      </div>
    </>
  )
}

export default DogCard