import React from 'react';
import carlino from '../assets/carlino.jpg'

function DogCard ({name, imagen, alttext, origen, frase, trivia}) {

  return (
    <div className="container">
      <img 
        className="fotodog"
        src={carlino}
        alt='texto'
        />
      <div className="text-container">
        <p className="dogname">Carlino</p>
        <p className="origen">China</p>
        <p className="frase">Hey hola mundo</p>
        <p className="trivia">'El carlino o pug es un perro pequeño muy sociable y cariñoso. Siempre está llamando la atención de sus amos para conseguir su atención y llevarse unas caricias. No es un buen perro guardían pero al ser recelosos de los extraños puede ser un buen "perro-alarma". Como tienen el hocico muy corto es muy propenso a padecer disnea.'</p>  
      </div> 
    </div>
  )
}

export default DogCard