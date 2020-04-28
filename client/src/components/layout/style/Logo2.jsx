import React from 'react';
import styled, {keyframes} from 'styled-components'

const Logo2 = () => {
    return (
        <NeonWrapper>
            <Txt>Prague</Txt>
            <Gradient/>
            <Dodge/>
        </NeonWrapper>
    )
}
const NeonWrapper = styled.div`
    height: 24px;
    text-align: center;
    padding-left: 0.6rem; 
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#000000;
    display:inline-flex;
    filter:brightness(200%);
    overflow:hidden;
    @media(min-width: 600px) {
        height: 36px;
    }
`
const Txt = styled.span`
    color:#ffffff;
    font-size:18px;
    font-weight:500;
    letter-spacing:0.5rem;
    font-family:Arial;
    text-transform:uppercase;
    &&::before {
        content:'Prague';
        position: absolute;
        mix-blend-mode:difference;
        filter:blur(1.5px);
    }
    @media(min-width: 600px) {
        font-size:24px;
        font-weight:bold;
        letter-spacing:1rem;
    }
`
const Gradient = styled.span`
    background: linear-gradient(114.5793141156962deg, rgba(6, 227, 250,1) 4.927083333333334%,rgba(229, 151, 64,1) 97.84374999999999%);
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height:100%;
    mix-blend-mode:multiply;
`
const DodgeArea = keyframes`
    to {
        transform: translate(50%,50%);
    }
`
const Dodge = styled.span`
    background: radial-gradient(circle,white,black 35%) center / 25% 25%;
    position: absolute;
    top:-100%;
    left:-100%;
    right:0;
    bottom:0;
    mix-blend-mode: color-dodge;
    animation: ${DodgeArea} 3s linear infinite;
`





export default Logo2
