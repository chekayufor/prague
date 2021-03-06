import React from 'react';
import Slider from 'react-slick'
import styled from 'styled-components'

const CarouselReactSlick = ({imgList}) => {
    // console.log({imgList})
    const settings={
        dots:false,
        infinity: true,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        // cssEase: 'linear',
        responsive:[
            {
                breakpoint:600,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <SlideContainer>
            <Slider {...settings}>
            {imgList && imgList.sort(function(a, b){return 0.5 - Math.random()}).map((img, index)=>(
                <Slide data-index={index} key={index}>
                    <A target="_blank">
                        <Image src={img} />
                    </A>
                </Slide>           
            ))} 
            </Slider>
        </SlideContainer>
    )
}
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
const Slide = styled.div`
  /* width: 30rem; */
  height: 100%;
  min-height: 265px;
  display: flex;
  justify-content: space-between;
    border: double 3px white;
    @media(min-width: 1024px) {
        min-height: 300px;    }
`;
const Image = styled.img`
  width: 100%;
  height:260px;
  margin:auto;
  object-fit: cover;
  object-position: center;
  @media(min-width: 1024px) {
        height:378px;
    }
`;
const A = styled.a`
  cursor: pointer;
`

export default CarouselReactSlick
