import React from 'react';
import styled, { keyframes } from 'styled-components'


const Logo = () => {
    return (
      <Box >
      <Inner >
        <span>Прага с Дмитрием</span>
      </Inner>
      <Inner class="inner">
        <span>Прага с Дмитрием</span>
      </Inner>
    </Box>
    )
}

const marquee = keyframes`
  from {
    left: 100%;
  }
  to {
    left: -100%;
  }
`
const  Box= styled.div`
   display:flex;
   width: 250px;
   margin: 20px 0 0 20px

`
const Inner = styled.div`
  width: 200px;
	height: 60px;
	line-height: 50px;
	font-size: 1.6em;
	font-family: sans-serif;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
  &&:first-child {
    background-color: #8aa6b1;
    color: #3d496d;
    transform-origin: right;
    transform: perspective(50px) rotateY(-15deg);
  }
  &&:last-child {
    background-color: #657b88;
    color: antiquewhite;
    transform-origin: left;
    transform: perspective(50px) rotateY(15deg);
  }
  span {
	position: absolute;
	animation: ${marquee} 5s linear infinite;
}

&&:first-child span {
	animation-delay: 2.5s;
	left: -100%;
}
`


export default Logo;
