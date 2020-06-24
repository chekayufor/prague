import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TourContext from '../../context/tour/tourContext';
import styled from 'styled-components';

import Spinner from '../layout/Spinner';


const Tours = (props) => {
    const tourContext = useContext(TourContext);
    const { loading, filtered } = tourContext;
    console.log({ props })

    // let { url } = useRouteMatch(); //'react-router-dom'

    const random = (list) => {
        const index = Math.floor((Math.random() * list.length));
        return list[index];
    }
    
    return (
        <Ul style={{ padding: '0' }}>
            {props.tours !== null && !loading ? (
                (filtered !== null) ? (
                    filtered.map(({ _id, name, section, text, img, cost, start, duration, included, unincluded, necessary, location, language, type, date }) => (
                        <Li key={_id} style={{ padding: '0' }}>
                            <H5 >{name}</H5>
                            <ImageContainer>
                                {(img && img.length) ? (
                                    <Img src={random(img).path.replace(/^\.\.\/client\/public/, '')} />
                                ) : (<Img src='/images/welcome.jpeg' />)
                                }
                            </ImageContainer>
                            <Div>
                                <Text>{text.slice(0, 160)}
                                    <Link to={`/tours/${_id}`}
                                        style={{
                                            alignItems: 'center',
                                            display: 'flex', fontWeight: 'bold', justifyContent: 'center'
                                        }}>
                                        <Span>...</Span>
                                    </Link>
                                </Text>
                            </Div>
                        </Li>
                    ))) : (
                        props.tours && props.tours.sort(function(a, b){return 0.5 - Math.random()}).map(({ _id, name, section, text, img, cost, start, duration, included, unincluded, necessary, location, language, type, date }) => (
                            <Li key={_id} style={{ padding: '0' }} >
                                <H5 >{name}</H5>
                                <ImageContainer>
                                    {(img && img.length) ? (
                                        <Img src={random(img).path.replace(/^\.\.\/client\/public/, '')} />
                                    ) : (<Img src='/images/welcome.jpeg' />)
                                    }
                                </ImageContainer>
                                <Div>
                                    <Text>{text.slice(0, 160)}
                                        <Link to={`/tours/${_id}`}
                                            style={{
                                                alignItems: 'center',
                                                display: 'flex', fontWeight: 'bold', justifyContent: 'center'
                                            }}>
                                            <Span>...</Span>
                                        </Link>
                                    </Text>
                                </Div>
                            </Li>
                        )))
            ) : (
                    <Spinner />
                )
            }
        </Ul>
    )
}
const Ul = styled.ul`
       display:grid;
       padding: 0;
        margin:0;
        @media (min-width: 1024px) {
            grid-template-columns:1fr 1fr;
        }
        @media(min-width: 1470px) {
            grid-template-columns:1fr 1fr 1fr;
        }
    `
const Li = styled.li`
        display:grid;
        justify-content:center;
        justify-items: center;
        @media (min-width: 1024px) {
            grid-template-rows: 0.5fr 1.5fr 0.8fr;
        }
    `
const Div = styled.div`
        display:grid;
        padding: 20px 40px;
    `
const H5 = styled.h5`
        color:#919aaf;
        font-size:1.3;
        text-align:center;
        padding: 0 2rem;
        margin-bottom:1.5rem;
        font-weight:bold;
        @media (min-width: 600px) {
            font-size:36px;
            font-size:2rem;
            border-radius: 10px;
            filter: drop-shadow(1px 1px 1px black);
        }
        @media (min-width: 1480px) {
            font-size:2.4rem;
        }
    `
const Text = styled.p`
        font-family: Courier New, monospace;
        font-size:1.4rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        @media (min-width: 600px) {
        font-size: 1.6rem;
        }
    `
const Span = styled.span`
        display: flex;
        text-align:center;
        align-items:center;
        font-weight:bold;
        font-size: x-large;
        justify-content: center;

    `
const ImageContainer = styled.div`
        height: 320px;
        width:80%;
        cursor: pointer;
        border: double 3px white;
        -webkit-box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
        -moz-box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
        box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
        overflow: hidden;
        padding:2px;
        margin:0 3px 0 3px;
        @media(min-width: 600px) {
            width:80%;
            height:420px;
        }
    `
const Img = styled.img`
        width:100%;
        height:100%;
        object-fit: cover;
    `
export default Tours
