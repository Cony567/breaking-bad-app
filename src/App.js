import { queryByPlaceholderText } from '@testing-library/react';
import {useState, useEffect} from 'react';
import {Frase} from './components/Frase';
import Spinner from './components/Spinner';

const initialSentence = {
  texto: 'Frase',
  autor: 'Autor ;)'
}


function App() {
  const [frase, setFrase] = useState(initialSentence);
  const [loading, setLoading] = useState(true);
  const actualizacionFrase = async()=>{
    const url = 'https://www.breakingbadapi.com/api/quote/random';
    const res = await fetch(url);
    const [nuevaFrase] = await res.json();
    
    const { quote:texto, author:autor } = nuevaFrase;
    setFrase({
      texto,
      autor
    });
    setLoading(false);
  }
  useEffect(()=>{
    actualizacionFrase();
  }, []);
  return (
    <div className="app">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={()=>actualizacionFrase()}>Obtener otra frase</button>
      { loading ? <Spinner/> : <Frase frase={frase}/>}
      
    </div>
  );
}

export default App;
