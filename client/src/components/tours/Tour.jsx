import React, {useEffect, useContext, Fragment} from 'react';
import styled from 'styled-components';
import TourContext from '../../context/tour/tourContext';
import Spinner from '../layout/Spinner';
import Emoji from '../layout/Emoji'

import CarouselReactSlickFade from '../layout/carousel/CarouselReactSlickFade';
import { withRouter } from 'react-router-dom'; 

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import ModalZakaz from '../layout/button/ModalZakaz';
import ZakazButton from '../layout/button/ZakazButton';

const Tour = (props) => {
    const tourContext=useContext(TourContext);
    const {getTours, setTour, tour, tours} = tourContext;
    // console.log({props})
    // console.log({tours})
    // console.log({tour})

    useEffect(()=>{
        M.AutoInit();
        getTours();
        if(props && props !== undefined)    
        setTour(props.match.params.tourId);
       // eslint-disable-next-line
    },[]);
    
    return (
        <Container>
        {tour !== null && tours !== null ? (
            <ul style={{padding:'0'}}> {
                tours.filter(i => tour === i._id).map(i =>{

                    console.log('i.text', i.text)
                    return <Fragment>
                    <H3 className='browser-default'>{i.name}</H3>
                    <Div>
                        <ButtonContainer style={{ justifyContent: 'flex-start'}}>
                            <Button onClick={props.history.goBack}><Emoji symbol='⬅️' label='button'/>
                                <span style = {{paddingLeft: '10px',  color:'rgb(119, 140, 165)'}} >Назад </span>
                            </Button>
                        </ButtonContainer>
                    </Div>
                    <ZakazButton/>
                    <ModalZakaz/>
                    <Content>
                    <CarouselReactSlickFade pic={i.img}/>
                    {i.text && <ContentText>
                        <Text style={{whiteSpace: 'pre-wrap'}}>{`${i.text}`}</Text>
                    </ContentText>
                    }
                    
                    <Discription>
                        <Conditions>
                        <h5>Дополнительные условия</h5>
                        <ul>
                        {i.duration && (
                            <P>
                            Продолжительность экскурсии:
                            <li>
                            {i.duration}
                            </li>
                            </P>
                        )}
                        {i.start && (
                            <P>
                            Время начала экскурсии:
                            <li>
                            {i.start}
                            </li>
                            </P>
                        )}
                        {i.location && (
                            <P>
                            Место встречи:
                            <li>
                            {i.location}
                            </li>
                            </P>
                        )}
                        {i.necessary && (
                            <P>
                            Необходимо иметь при себе:
                            <li>
                            {i.necessary}
                            </li>
                            </P>
                        )}
                        {i.language && (
                            <P>
                            Язык: 
                            <li>
                            {i.language}
                            </li>
                            </P>
                        )}
                        </ul>
                        </Conditions>
                        <CostTerms>
                        <h5>Стоимость</h5>
                        <ul>
                        {i.cost1 && (
                            <P>
                            Цена за 1-3 чел:
                            <li>
                            {i.cost1}
                            </li>
                            </P>
                        )}
                        {i.cost2 && (
                            <P>
                            Цена за 4-7 чел:
                            <li>
                            {i.cost2}
                            </li>
                            </P>
                        )}
                        {i.cost3 && (
                            <P>
                            Цена за 8-15 чел:
                            <li>
                            {i.cost3}
                            </li>
                            </P>
                        )}
                        {i.cost4 && (
                            <P>
                            Цена за 16 и более чел:
                            <li>
                            {i.cost4}
                            </li>
                            </P>
                        )}
                        </ul>
                        {i.included && (
                            <P>
                            Включено в стоимость:
                            <li>
                            {i.included}
                            </li>
                            </P>
                        )}
                        {i.unincluded && (
                            <P>
                            Не включено в стоимость экскурсии:
                            <li>
                            {i.unincluded}
                            </li>
                            </P>
                        )}
                        </CostTerms>
                    </Discription> 
                    </Content>
                    </Fragment>
                    
                })
            }
            </ul>
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
        justify-items: center;
        @media (max-width: 769px) {
            min-width: 100%;
        }
    `
    const H3=styled.h3`
        font-size: 24px;
        text-transform: uppercase;
        font-weight: 700;
        color:#455f8e;
        filter: drop-shadow(black 1px 1px 1px);
        text-align:center;
        margin: 150px 40px 20px 40px;
        padding: 0 2rem 0 2rem;
        /* margin-top:0; */
        @media (min-width: 1024px) {
            font-size:48px;
        }
        @media (min-width: 1480px) {
            font-size:62px;
        }
`
    const Content = styled.div`
        display: grid;
        justify-content: center;
        justify-items: center;
        text-align: center;
        padding: 10px 10px 0 10px;
        /* @media (min-width: 1024px) {
            width: 980px;
        }
        @media (min-width: 1400px) {
            width: 1200px;
        }
        @media (min-width: 1800px) {
            width: 1600px;
        } */
    `
    const Div = styled.div`
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 100px;
            width: 100%;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            padding: 1rem;
    `
    const ButtonContainer=styled.div`
        height:100%;
        width:100%;
        display:flex;

    `
    const Button = styled.button`
        height: 50px;
        width: 150px;
        font-size: 1.2rem;
        text-transform:uppercase;
        position: fixed;
        background: #e3eeef57;
        border-radius:7px;
        border: solid 1px #919aaf;
        z-index: 900;
        @media (min-width: 1024px) {
            font-size: 1.4rem;
        }
        @media (min-width: 1400px) {
            font-size: 1.6rem;
        }
    `
    // const ButtonZakaz = styled.button`
    //     height: 50px;
    //     width: 150px;
    //     text-transform:uppercase;
    //     font-size: medium;
    //     position: fixed;
    //     background: rgba(243, 21, 4, 0.74);
    //     color:white;
    //     border-radius:7px;
    //     border: solid 1px #919aaf;
    //     z-index: 900;
    //     @media (min-width: 1024px) {
    //         font-size: 1.4rem;
    //     }
    //     @media (min-width: 1400px) {
    //         font-size: 1.6rem;
    //     }
    // `
    const ContentText= styled.div`
        display: grid;
        align-items: center;
        text-align: start;
        padding: 20px 40px;
        font-size: 1.2rem;
         @media (min-width: 1024px) {
            font-size: 1.4rem;
            width: 980px;
            margin-top: 6rem;
        }
        @media (min-width: 1400px) {
            width: 1200px;
        }
        @media (min-width: 1800px) {
            width: 1600px;
        }
        /*@media (min-width: 1400px) {
            font-size: 2rem;
        } */
    `
    
    const Discription=styled.div`
        display:grid;
        background-color: rgba(0,0,0,0.12);
        font-size:1.1rem;
        @media (min-width: 1024px) {
            font-size: 1.2rem;
        }
        /* @media (min-width: 1400px) {
            font-size: 1.8rem;
        } */
    `
    const Conditions=styled.div`
        display:grid;
        width: fit-content;
        justify-self: center;
        margin:0 20px;
    `
    const CostTerms=styled.div`
        display:grid;
        margin:0 20px;

        ul{
            width: fit-content;
            justify-self: center;
        }

    `
    const P = styled.p`
        display:grid;
        grid-template-columns:1fr 1fr;
        /* font-size: medium; */
        font-style: italic;
        font-weight: 600;
        text-align: end;
        li{
            text-align:start;
            padding-left:30px;
            list-style:none;
            font-weight: 300;
        }
    `
const Text = styled.p`
    white-space: pre-wrap;
    font-family: Courier New, monospace;
    font-size: 1.2rem;
    @media (min-width: 600px) {
            font-size: 1.4rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.6rem;
    }
`

export default withRouter(Tour);
