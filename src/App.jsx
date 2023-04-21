import { useState } from 'react';
import './stylesheets/App.css';
import footsprint from './assets/huella.png';
import Form from './components/Form';
import DogCard from './components/DogCard'

function App() {

  return (
    <div className="App">
      <header className="header">
        <img className="huella" src={footsprint} />
        <h1 className="titulo">Enciclopedia Perruna</h1>  
      </header>
      <Form />
      <DogCard />    
    </div>
  )
}

export default App
