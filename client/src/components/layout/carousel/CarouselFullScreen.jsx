import React, { useState, Fragment } from "react";
import styled from "styled-components";
import YouTubeVideo from '../youtube/YouTubeVideo';
import H2 from '../style/H2Text';


const CarouselFullScreen = ({videos}) => {

  const [index, setIndex] = useState(0);
  // console.log({videos})
  let slideWidth;
  if (window.matchMedia("(max-width: 600px)").matches) {
    /* The viewport is less than, or equal to, 600 pixels wide */
     slideWidth = 22; 
  } else {
    /* The viewport is greater than 700 pixels wide */
    slideWidth = 30; 
  }
  

    console.log({index});
    console.log(videos.length);

    const moveRight =() => {
      let next = (index + 1) % videos.length;
      setTimeout(() =>  setIndex(next) , 100);
    }
    const moveLeft =() => {
      let next = (index - 1) % videos.length;
      setTimeout(() =>  setIndex(next) , 100);
    }

    
  return (
    <Fragment>
    {(videos.length!==0)?
    (<Fragment>
    <a href="https://www.youtube.com/channel/UCMmsWAmdBLUdAEHuDmypuRQ" target="_blank" rel="noopener noreferrer" style={{paddingBottom:'20px'}}>
      <H2>Путевые Заметки или Виртуальные Экскурсии</H2>
    </a>
    <Box>
    {(index <=0)? 
      <Button style={{marginRight: '3px'}}>&laquo;</Button>
      :
      <Button onClick={moveLeft} style={{marginRight: '3px'}}>&laquo;</Button>
    }
      <Mask >
        <SlideContainer
          x={index * slideWidth}
        >
        {
          videos.slice(0, 15).map(video=>(
              <Slide key={video.id.videoId}>
                  <YouTubeVideo video={video}/>
              </Slide>
          ))
      }
        </SlideContainer>
        </Mask>
       {(index >= 14)?
        <Button style={{marginLeft: '3px'}}>&raquo;</Button>
        :
        <Button onClick={moveRight} style={{marginLeft: '3px'}}>&raquo;</Button>
      }
    </Box>
    </Fragment>):(<Fragment/>)
    }
    </Fragment>
    );
};

export default CarouselFullScreen;

const Box = styled.div`
  /* display: none; */
  width: 100%;
  height: 260px;
  display: grid;
  display: -webkit-grid;
  grid-template-columns: 1fr 10fr 1fr; 
  justify-items: center;
  align-items: center;
  -webkit-align-items:center;
  position: relative;
  padding: 20px 5px;
  @media (min-width: 600px) {
    height: 400px;
  }
`;
const Mask = styled.div`
  max-width: 22rem;
  height:100%;
  overflow: hidden;
  border: double 3px white;
    -webkit-box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
    box-shadow: 0px 0px 20px -8px rgba(0,0,0,1);
    overflow: hidden;
    padding: 2px;
    @media (min-width: 600px) {
      max-width: calc(100% - 30px);
  }
`;
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  transition: transform 3s linear;
  -webkit-transition: transform 3s linear;
  transform: translateX(${({ x }) => -(x)}rem);
  -webkit-transform: translateX(${({ x }) => -(x)}rem);

`;
const Slide = styled.div`
  width: 22rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  transition: transform 3s linear;
  -webkit-transition: transform 3s linear;
  transform: translateX(${({ x }) => -(x)}rem);
  -webkit-transform: translateX(${({ x }) => -(x)}rem);
  @media (min-width: 600px) {
    width: 30rem;
  }
`;
const Button = styled.button`
    z-index:100;
    height: 2.2rem;
    width: 2.2rem; 
    border-radius: 50%;
    border: none;
    background: none;
    margin-left: 3px;
    display: flex;
    display:-webkit-flex;
    justify-content: center;
    font-size: 40px;
    align-items: center;
    -webkit-align-items: center;
    text-align: center;
    padding-bottom: 8%;
    color: #455f8e;
    &&::focus{
      background-color:none;
      background:none;
    }
    @media (min-width: 600px) {
      width: 3rem;
      font-size: 50px;
    }
    @media (min-width: 1480px) {
      width: 5rem;
      height: 3rem;
      font-size: 60px;
    }
    @media (min-width: 2400px) {
      font-size: 80px;
    }
`
