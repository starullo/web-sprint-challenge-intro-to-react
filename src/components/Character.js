// Write your Character component here
import React, {useState, useEffect} from "react";
import styled, {keyframes} from 'styled-components';

const Character = props => {
const {character} = props;

return (
    <div>
        <h2>{character.name}</h2>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Birth Year: {character.birth_year}</p>
    </div>
)

}

export default Character;