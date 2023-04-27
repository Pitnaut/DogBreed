import './stylesheets/App.css';
import footsprint from './assets/huella.png';
import DogCard from './components/DogCard';

function App() {

  return (
    <div className="App">
      <header className="header">
        <img className="huella" src={footsprint} />
        <h1 className="titulo">Enciclopedia Perruna</h1>  
      </header>
      <DogCard />    
    </div>
  )
}

export default App
