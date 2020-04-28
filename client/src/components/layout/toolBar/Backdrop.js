import React from 'react';
import styled from 'styled-components';

const Backdrop = (props) => {
    return (
        <BackdropContainer onClick={props.backdropClickHandler}/>            
    )
}
const BackdropContainer = styled.div`
    position:fixed;
    height:100%;
    width:100%;
    top:0;
    left:0;
    background-color:rgba(0, 0, 0, 0.3);
    z-index:100;
`

export default Backdrop;
