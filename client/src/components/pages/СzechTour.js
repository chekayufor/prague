import React from 'react';
import styled from 'styled-components';
import H2 from '../layout/style/H2Text';
import Tours from '../Tours'

const СzechTour = () => {
   
    const tours=[
        {id:1,name:'name', section:'section',text:'textvhdjjjjjhjhdjhjdhdjhjhjfhjdhksdkhkdhjkhdkhdkhdkkhkdhkdh', img:'/images/guests/IMG_20190111_124316.jpg',cost:'cost',quantity:'quantity',duration:'duration',included:'included',unincluded:'unincluded',necessary:'necessary',location:'location',language:'language',contentType:'contentType',
        date:'date'},{id:2,name:'name', section:'section',text:'text', img:'/images/guests/IMG_20190111_124316.jpg',cost:'cost',quantity:'quantity',duration:'duration',included:'included',unincluded:'unincluded',necessary:'necessary',location:'location',language:'language',contentType:'contentType',
        date:'date'},{id:3,name:'name', section:'section',text:'text', img:'/images/guests/IMG_20190111_124316.jpg',cost:'cost',quantity:'quantity',duration:'duration',included:'included',unincluded:'unincluded',necessary:'necessary',location:'location',language:'language',contentType:'contentType',
        date:'date'},{id:4,name:'name', section:'section',text:'text', img:'/images/guests/IMG_20190111_124316.jpg',cost:'cost',quantity:'quantity',duration:'duration',included:'included',unincluded:'unincluded',necessary:'necessary',location:'location',language:'language',contentType:'contentType',
        date:'date'}
    ];

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
    
export default СzechTour
