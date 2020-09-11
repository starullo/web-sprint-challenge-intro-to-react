import React, {useState, useEffect} from "react";
import styled, {keyframes} from 'styled-components';
import axios from 'axios';

const Films = props => {
    const {num} = props;
    return (
        <>
        <p>Appeared in {num} {num === 1 ? 'film' : 'films'}!</p>
        </>
    )
}

export default Films;