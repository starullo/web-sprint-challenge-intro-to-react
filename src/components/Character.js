// Write your Character component here
import React, {useState, useEffect} from "react";
import styled, {keyframes} from 'styled-components';
import axios from 'axios';
import Films from './Films';

const kf = keyframes`
33% {
    transform: scale(.5);
}
66% {
    transform: scale(1.2);
}
100% {
    transform: scale(1)
}
`

const Container = styled.div`
background-color: hsla(0, 0%, 53%, 0.4);
color: black;
width: 55%;
margin: 2% auto;
padding: 2%;
border-radius: 10px;
font-family: orbitron;
border: solid 4px black;

transition: all .5s ease-in-out;
&:hover {
    transition: all .3s ease-in-out;
    transform: scale(1.1);
}
`

const H2 = styled.h2`
font-size: 2rem;
font-family: acme;
text-shadow: 4px 4px 4px white;
border-bottom: dotted #404040 5px;
padding-bottom: 2%;
width: 60%;
margin: auto;
animation: ${kf} 1s forwards;
`

const Button = styled.button`
padding: 2%;
font-family: orbitron;
background-color: black;
color: white;
`

const Character = props => {
const {character} = props;
const [numOfFilms, setNumOfFilms] = useState(0);
const [isClicked, setIsClicked] = useState(false);

return (
    <Container>
        <H2>{character.name}</H2>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Birth Year: {character.birth_year}</p>
        {
            isClicked && <Films num={character.films.length} />
        }
        <Button onClick={()=>{
            if (isClicked) {
                setIsClicked(false);
            } else {
                setIsClicked(true);
            }
        }}>Click to see the number of films they were in!</Button>

    </Container>
)

}

export default Character;