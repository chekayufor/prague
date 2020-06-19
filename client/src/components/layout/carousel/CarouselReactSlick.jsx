import React from 'react';
import Slider from 'react-slick'
import styled from 'styled-components'

const CarouselReactSlick = ({imgList}) => {
    console.log({imgList})
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
            {imgList && imgList.map((img, index)=>(
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
  min-height: 300px;
  display: flex;
  justify-content: space-between;
    border: double 3px white;
`;
const Image = styled.img`
  width: 100%;
  height:378px;
  margin:auto;
  object-fit: cover;
  object-position: center;
`;
const A = styled.a`
  cursor: pointer;
`

export default CarouselReactSlick
