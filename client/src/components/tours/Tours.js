import React, {Fragment, useContext} from 'react';
// import {Link, useRouteMatch} from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {Link} from 'react-router-dom';
import TourContext from '../../context/tour/tourContext';
import styled from 'styled-components';
// import Tour from './Tour';
import Spinner from '../layout/Spinner';


const Tours = (props) => {
    const tourContext=useContext(TourContext);
    const {loading, filtered, tours} = tourContext;
console.log({props})
    
    // let { url } = useRouteMatch();
    return (
        <Fragment>
        <Ul>
            {props.tours !== null && !loading ? (
                   (filtered !== null ) ? (
                        filtered.map(({_id, name, section,text, img, cost,start,duration,included,unincluded,necessary,location,language,type,date}) =>(
                            <Li key={_id}>
                                <H3>{name}</H3>
                                <ImageContainer>
                                <Img src={img}/>
                                </ImageContainer>
                                <Div>
                                    <Text>{text.slice(0, 100)}
                                    <Link  to = {{
                                        pathname:`/tours/${_id}`,
                                        tourProps:{
                                            _id, name, section,text, img, cost,start,duration,included,unincluded,necessary,location,language,type,date
                                        }
                                    }} style={{alignItems: 'center',
                                        display: 'flex', fontWeight:'bold',    justifyContent: 'center'}}>
                                        <Span>...</Span>
                                    </Link> 
                                    </Text>  
                                </Div>
                            </Li>
                        ))):(
                        props.tours.map(({_id, name, section,text, img, cost,start,duration,included,unincluded,necessary,location,language,type,date}) =>(
                            <Li key={_id}>
                                <H3>{name}</H3>
                                <ImageContainer>
                                <Img src={img}/>
                                </ImageContainer>
                                <Div>
                                    <Text>{text.slice(0, 100)}
                                    <Link  to = {{
                                        pathname:`/tours/${_id}`,
                                        tourProps:{
                                            _id, name, section,text, img, cost,start,duration,included,unincluded,necessary,location,language,type,date
                                        }
                                    }} style={{alignItems: 'center',
                                        display: 'flex', fontWeight:'bold',    justifyContent: 'center'}}>
                                        <Span>...</Span>
                                    </Link> 
                                    </Text>  
                                </Div>
                        </Li>
                    )))
                                ):(
                    <Spinner/>
                )
            }
        </Ul> 
           
        </Fragment>
    )
}
const Ul=styled.ul`
       display:grid;
    @media (min-width: 1024px) {
        grid-template-columns:1fr 1fr;
    }
    @media(min-width: 1224px) {
        grid-template-columns:1fr 1fr 1fr;
    }
    `
    const Li=styled.li`
        display:grid;
        justify-content:center;
        justify-items: center;
        @media (min-width: 1024px) {
            grid-template-rows: 0.5fr 1.5fr 0.8fr;
        }
    `
    const Div= styled.div`
        display:grid;
        padding: 20px 40px;
    `
    const H3=styled.h3`
        font-size: 1.8rem;
        line-height: 110%;
        margin: 40px;
        height: 70px;
        @media (min-width: 600px) {
        font-size: 2rem;
        }
    `
    const Text=styled.p`
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
    const ImageContainer=styled.div`
    height: 260px;
    width:90%;
    cursor: pointer;
    border: double 3px white;
    -webkit-box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
    box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
    overflow: hidden;
    padding:2px;
    margin:0 3px 0 3px;
    @media(min-width: 600px) {
        height: 280px;
    }
    @media (min-width: 1024px) {
        height: 400px;
    }
    `
const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`
export default Tours

            // <Route path={`${url}/tours/:tourId`} render={
            //         props => {
            //         const tour = tours.find(tour => tour.id.toString() === props.match.params.tourId)
            //         if(!tour){
            //             return 'Not Found';
            //         }
            //         return <Tour {...props} {...tour}/>
            //     }
            // }/>
            // <Link to = {`${url}/tours/${id}`}style={{alignItems: 'center',
            //             display: 'flex', fontWeight:'bold'}}>
            //             <Span>...</Span>
            //         </Link>