import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import TourContext from '../../context/tour/tourContext';

import styled from 'styled-components';
import MainHeader from '../layout/MainHeader';
import Footer from '../layout/footer/Footer';
// import GuestGallery from '../layout/GuestGallery';
// import Sociall from '../layout/Sociall';
import H2 from '../layout/style/H2Text'
const MainContainer = () => {

    // const tourContext=useContext(TourContext);
    // const {getTours, tours} = tourContext;

    // useEffect(()=>{
    //     getTours();
    //     //eslint-disable-next-line
    // }, []);

    return (
        <Container >
          <MainHeader/>
          <ContentContainer>
                <Section>
                    <Link to='/pragueTour' ><H2>Экскурсии по Праге</H2></Link>
                    <ImageContainer><Img src="/images/pragueTram.jpg" alt="prague"/></ImageContainer>
                </Section>
                <Section>
                    <Link to='/czechTour'><H2>Экскурсии по Чехии</H2></Link>
                    <ImageContainer><Img src="/images/czech-krumlov.jpg" alt="czech"/></ImageContainer>
                </Section>
                <Section>
                    <Link to='/europeTour'><H2>Экскурсии по Европе</H2></Link>
                    <ImageContainer><Img src="/images/veinAndTransfer/belvedere-1601372.jpg" alt="europe"/></ImageContainer>
                </Section>
                <Section>
                    <Link to='/transfer'><H2>Трансфер</H2></Link>
                    <ImageContainer><Img src="/images/veinAndTransfer/mercedes-maybach-s-class-4k-2018-cars-w222-road.jpg" alt="transfer"/></ImageContainer>
                </Section>
            </ContentContainer>
            <Footer/>
        </Container>

    )
}

const Container = styled.div`
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height:100%;
    /* min-width: 980px; */
    min-height:100vh;
    overflow: hidden;
    background-color: #ffffff;
    display:grid;
    @media (max-width: 769px) {
        min-width: 100%;
    }

`
const ContentContainer=styled.div`
    position: static;
    display: grid;
    height: auto;
    width: 100%;
    min-height: 200px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 100%;
    padding-bottom: 0px;
    box-sizing: border-box;
    @media (min-width: 1024px) {
        width: 980px;
        padding: 20px;
        margin: 0 auto;
    }
   
`
const Section = styled.div`
    display: grid;
    align-items:center;
    width:100%;
    left: 0px;
    justify-items:center;
    grid-template-rows: 1fr 3fr;
    grid-template-columns: 100%;
    margin-bottom:20px;
`
const ImageContainer=styled.div`
    /* width: 280px; */
    height: 260px;
    /* background-color:grey; */
    cursor: pointer;
    border: double 3px white;
    -webkit-box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
    box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
    overflow: hidden;
    padding:2px;
    margin:0 3px 0 3px;
    @media(min-width: 600px) {
        width: 560px;
        height: 280px;
    }
    @media (min-width: 1024px) {
        height: 400px;
        width: 100%;
    }
    `
const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;

`

export default MainContainer

