import React, {useState, useEffect} from 'react';
import './App.css';
import styled, {keyframes} from 'styled-components';
import axios from 'axios';
import Character from './components/Character';

const H1 = styled.h1`
font-family: orbitron;
`

const App = () => {
  const [characters, setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(()=>{
axios.get('https://swapi.dev/api/people')
.then(res=>{
  setCharacters(res.data.results);
})
}, []);
  return (
    <div className="App">
      <H1 className="Header">Characters</H1>
      {characters.map(char=>{
        return <Character key={char.name} character={char} />
      })}
    </div>
  );
}

export default App;
