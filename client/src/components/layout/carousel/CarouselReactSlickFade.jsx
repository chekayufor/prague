import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components'

const CarouselReactSlickFade = ({pic}) => {

    const settings={
        dots: true,
        fade:true,
        speed:500,
        arrows:true,
        cssEase: 'linear',
        infinity: true,
        autoplay:true,
        autoplaySpeed:3000,
        responsive:[
            {
                breakpoint:480,
                settings:{
                    arrows:false
                }
            }
        ]
    };
    return (
        <SlideContainer>
            <Slider className='fade' {...settings}>
            {pic && pic.map((i , index)=>(
                <Slide data-index={index} key={index}>
                    <Image src={i.path.replace(/^\.\.\/client\/public/, '')} alt={i.filename} />
                </Slide>           
            ))} 
            </Slider>
        </SlideContainer>
    )
}
const SlideContainer = styled.div`
    width: 400px;
    height: 300px;
    /* background-color:blueviolet; */
    margin-bottom:20px;
    @media(min-width: 600px) {
        width: 560px;
        height: 400px;
    }
    @media (min-width: 1024px) {
        width: 760px;
        height: 560px;
    }
    @media (min-width: 1400px) {
            width: 1000px;
            height:700px
    }
    /* @media (min-width: 1800px) {
        width: 1600px;
        height:840px;
    } */
`;
const Slide = styled.div`
  height: 100%;
  width:100%;
  display: flex;
  border: double 3px white;

`;
const Image = styled.img`
  width: 100%;
  height: 295px;
  margin:auto;
  object-fit: cover;
  object-position: center;
  @media(min-width: 600px) {
        height: 395px;
    }
    @media (min-width: 1024px) {
        height: 455px;
    }
    @media (min-width: 1400px) {
            height:695px
    }
    /* @media (min-width: 1800px) {
        height:835px;
    } */
`;

export default CarouselReactSlickFade;
