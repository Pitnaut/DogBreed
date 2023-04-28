import React, {useState} from 'react';
import Form from './Form';
import { dogs } from '../components/Data';
import '../stylesheets/Dogcard.css'

function DogCard() {

  const [dogId, setDogId] = useState(0)

  return (
    <>
      <Form dogId={dogId} onDogIdChange={setDogId} />
      <div className="container">
        <div className="fotodog"><img 
          src={`../../public/imagenes/${dogs[dogId].imagen}.jpg`}
          alt={dogs[dogId].alttext}
          />
        </div>
        <div className="text-container">
          <div className="dogintro">
            <div className="dogname"><h1 >{dogs[dogId].nombre}</h1></div>
            <div className="frase"><p >{dogs[dogId].frase}</p></div>
          </div>
          <div className="origen"><p >{dogs[dogId].origen}</p></div>
          <div className="trivia"><p >{dogs[dogId].trivia}</p> </div> 
        </div> 
      </div>
    </>
  )
}

export default DogCard