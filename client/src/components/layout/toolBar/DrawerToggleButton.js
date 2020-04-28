import React from 'react'
import styled from 'styled-components'


const DrawerToggleButton = (props)=> (
  <ToggleButton onClick={props.click}>
    <TogglButtonLine />
    <TogglButtonLine />
    <TogglButtonLine />
  </ToggleButton>
)
const ToggleButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 28px;
    width: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left:1rem;
    box-sizing: border-box;
    &&:focus{
        outline: none;
    }
    @media(min-width: 560px) {
      /* height: 32px;
      width: 46px; */
      display:none;
    }
  `
  const TogglButtonLine = styled.div`
    width: 28px;
    height: 2px;
    background: #fafafa;
    @media(min-width: 600px) {
      width: 36px;
      height: 2px;
    }
  `

export default DrawerToggleButton;