import React, { useContext, useEffect, Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import youtube from '../../utils/youtube';
import {Key} from '../../utils/Key';

import TourContext from '../../context/tour/tourContext';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import M from 'materialize-css/dist/js/materialize.min.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Spinner from '../layout/Spinner';
import MainHeader from '../layout/MainHeader';
import ZakazButton from '../layout/button/ZakazButton';
import ModalZakaz from '../layout/button/ModalZakaz'
import Footer from '../layout/footer/Footer';
import H2 from '../layout/style/H2Text';
import CarouselYouTube from '../layout/carousel/CarouselFullScreen'
import axios from 'axios';

const MainContainer = (props) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [searchTerm, setSearchTerm] = useState('#guidedmitry');
    const tourContext = useContext(TourContext);
    const { tours, filtered, getTours, loading } = tourContext;

    useEffect(() => {
        M.AutoInit();
        getTours();
        // handleSubmit(searchTerm);
        getVideos();
        // eslint-disable-next-line
      }, []);
      const getVideos = async ()=>{
          const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCMmsWAmdBLUdAEHuDmypuRQ&maxResults=50&order=date&key=${Key}`);
          console.log(res.data.items);

        setVideos(res.data.items);
        setSelectedVideo(res.data.items[0]);
      }

    const random=(list)=> {
        return list[Math.floor((Math.random()*list.length))];
    }

    return (
        
        <Container >
         
          {tours !== null && !loading ? 
            ( 
                <TransitionGroup>
                    {filtered !== null
                        ? (
                            <Fragment>
                                <Ul>
                                {filtered.map(({_id, name, section,text, img, cost,start,duration,included,unincluded,necessary,location,language,type,date}) =>(
                                    <CSSTransition>
                                    <Li key={_id}>
                                        <Link  to={`/tours/${_id}`}>
                                         <H3>{name}</H3>
                                        </Link>
                                        <ImageContainerFilter>
                                        {(img && img.length)?(
                                            <Img src={random(img).path.replace(/^\.\.\/client\/public/, '')}/>
                                        ):(<Img src='/images/welcome.jpeg'/>)
                                        }
                                        </ImageContainerFilter>
                                        <Div>
                                            <Text>{text.slice(0, 100)}
                                            <Link  to={`/tours/${_id}`}
                                            style={{alignItems: 'center',
                                                display: 'flex', fontWeight:'bold',    justifyContent: 'center'}}>
                                                <Span>...</Span>
                                            </Link> 
                                            </Text>  
                                        </Div>
                                    </Li>
                                </CSSTransition>
                            ))}
                            </Ul>
                        </Fragment>
                        ):
                    ( <Fragment>
                        <MainHeader/>
                        <ZakazButton/>
                        <ModalZakaz/>
                        <ContentContainer>
                            <Section>
                                <Link to={{
                                    pathname:'/pragueTour',
                                     tours:{tours}
                                }}><H2>Экскурсии по Праге</H2></Link>
                                <ImageContainer><Img src="/images/pragueTram.jpg" alt="prague"/></ImageContainer>
                            </Section>
                            <Section>
                                <Link to='/czechTour' ><H2>Экскурсии по Чехии</H2></Link>
                                <ImageContainer><Img src="/images/czech-krumlov.jpg" alt="czech"/></ImageContainer>
                            </Section>
                            <Section>
                                <Link to='/europeTour'><H2>Экскурсии по Европе</H2></Link>
                                <ImageContainer><Img src="/images/belvedere-1601372.jpg" alt="europe"/></ImageContainer>
                            </Section>
                            <Section>
                                <Link to='/transfer'><H2>Услуги</H2></Link>
                                <ImageContainer><Img src="/images/mercedes-maybach-s-class.jpg" alt="transfer"/></ImageContainer>
                            </Section>
                        </ContentContainer>
                    </Fragment>
                    )}
                </TransitionGroup>
                         ) : (
                <Spinner />
              )}
              <CarouselYouTube videos={videos}/>
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
    align-content: baseline;
    justify-content: center;
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
    const ImageContainerFilter=styled.div`
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
    const H3=styled.h3`
    color:#6e778c;
    font-size: 1.5rem;
    text-align:center;
    margin: 150px 40px 20px 40px;
    padding: 0 2rem 0 2rem;
    /* margin-top:0; */
    font-weight:bold;
    @media (min-width: 1024px) {
        font-size:48px;
        padding:0 2rem 0 2rem;
        border-radius: 10px;
        filter: drop-shadow(1px 1px 1px black);
    }
    @media (min-width: 1480px) {
        font-size:62px;
    }
    `
    const Text=styled.p`
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
export default MainContainer

