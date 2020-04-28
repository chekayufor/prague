import React, {useState, useEffect, useContext, Fragment} from 'react';
import styled from 'styled-components';
import TourContext from '../context/tour/tourContext';
import Spinner from './layout/Spinner';

import {useParams} from 'react-router-dom';
import CarouselReactSlickFade from './layout/carousel/CarouselReactSlickFade';
import { withRouter } from 'react-router-dom';//navigation for goBack 

const Tour = (props) => {
    const tourContext=useContext(TourContext);
    const {setTour, tour, loading} = tourContext;
    console.log({props})

    useEffect(() => {
       if(props.location.tourProps && props.location.tourProps!==undefined) setTour(props.location.tourProps);
       
        //eslint-disable-next-line
    }, [props.location.tourProps]);

    const isPageRefreshed=()=> {
        return window.performance && performance.navigation.type === 1;
      }

    return (
        <Container>
        {tour !== null && !loading ? (
            <Fragment>
            <H3>{tour.name}</H3>
            <Div>
                <Button onClick={props.history.goBack}>⬅️ Назад</Button>
            </Div>
            <Content>
                <CarouselReactSlickFade pic={tour.img}/>
                <ContentText>
                    <p>{tour.text}</p>
                </ContentText>
            </Content>
            </Fragment>
        ):(
            <Spinner/>
        )}
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
        /* min-width: 980px; */
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
    const H3=styled.h3`
        font-size: 2.2rem;
        line-height: 110%;
        margin: 120px 40px 20px 40px;
        @media (min-width: 1024px) {
            font-size: 2.6rem;
        }
        @media (min-width: 1400px) {
            font-size: 4rem;        }
    `
    const Content = styled.div`
        display: grid;
        justify-content: center;
        justify-items: center;
        text-align: center;
        padding: 10px;
        @media (min-width: 1024px) {
            width: 780px;
        }
        @media (min-width: 1400px) {
            width: 1200px;
        }
        @media (min-width: 1800px) {
            width: 1600px;
        }
    `
    const Div=styled.div`
        display:grid;
        height:50px;
        align-items:center;
        position: relative;
    `
    const Button = styled.button`
        height: 40px;
        width: 150px;
        font-size: 1.2rem;
        position: fixed;
        background: #8dd6da57;
        z-index: 900;
        @media (min-width: 1024px) {
            font-size: 1.4rem;
        }
        @media (min-width: 1400px) {
            font-size: 1.6rem;
        }
    `
    const ContentText= styled.div`
        display: grid;
        align-items: center;
        text-align: start;
        padding: 20px 40px;
        font-size: 1.4rem;
        @media (min-width: 1024px) {
            font-size: 1.6rem;
        }
        @media (min-width: 1400px) {
            font-size: 2rem;
        }
    `
export default withRouter(Tour);
