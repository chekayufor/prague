import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components'

const CarouselReactSlickFade = () => {
    let imgList=[
        {id:1,name:'name1',img:'/images/guests/IMG_20180927_112002.jpg',linkCode:''},
         {id:4,name:'name4',img:'/images/guests/IMG_20181007_104724.jpg', linkCode:''},
         {id:5,name:'name5',img:'/images/guests/IMG_20181011_155422.jpg', linkCode:''},
         {id:6,name:'name6',img:'/images/guests/IMG_20181012_102258.jpg', linkCode:''},
         {id:7,name:'name7',img:'/images/guests/IMG_20181020_110738.jpg', linkCode:''},
         {id:10,name:'name10',img:'/images/guests/IMG_20190418_104119.jpg', linkCode:''},
         {id:11,name:'name11',img:'/images/guests/IMG_20190418_145335.jpg', linkCode:''}
        ];
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
            {imgList.map(({ id, img, name, linkCode },index)=>(
                <Slide data-index={index} key={id}>
                    <Image src={img} alt={name} />
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
        height: 300px;
    }
    @media (min-width: 1024px) {
        width: 760px;
        height: 460px;
    }
    @media (min-width: 1400px) {
            width: 1000px;
            height:500px
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
        height: 295px;
    }
    @media (min-width: 1024px) {
        height: 455px;
    }
    @media (min-width: 1400px) {
            height:545px
    }
    /* @media (min-width: 1800px) {
        height:835px;
    } */
`;

export default CarouselReactSlickFade;
