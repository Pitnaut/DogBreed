import { useState } from 'react';
import './App.css';
import footsprint from './assets/huella.png';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <header className="header">
        <img className="huella" src={footsprint} />
        <h1 className="titulo">Enciclopedia Perruna</h1>  
      </header>
      <Form />    
    </div>
  )
}

export default App
