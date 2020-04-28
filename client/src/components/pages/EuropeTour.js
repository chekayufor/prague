import React, {useContext, useEffect} from 'react';
import TourContext from '../../context/tour/tourContext';

import styled from 'styled-components';
import H2 from '../layout/style/H2Text';
import Tours from '../Tours'
const EuropeTour = () => {
    const tourContext=useContext(TourContext);
    const {tours, getTours} = tourContext;

    useEffect(()=>{
        getTours();
        //eslint-disable-next-line
    }, []);

  
    return (
        <Container>
           <H2 style={{marginTop:'100px'}}>ЭКСКУРСИИ ПО ЕВРОПЕ</H2>
           <Tours tours={tours}/>
        </Container>
    )
}
const Container = styled.div`
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height:100%;
    text-align:center;
    min-height:100vh;
    overflow: hidden;
    background-color: #ffffff;
    display:grid;
    align-content: center;
    justify-content: center;
    @media (max-width: 769px) {
        min-width: 100%;
    }
    `
    
export default EuropeTour;

// props={id, name, section,text, img, cost,quantity,duration,included,unincluded,necessary,location,language,contentType,
//     date}