import React from 'react'
import styled from 'styled-components';
import CarouselReactSlick from './CarouselReactSlick';

const GuestGallery = () => {
    let imgList=[
        {id:1,name:'name1',img:'/images/guests/IMG_20190111_124316.jpg'},
         {id:2,name:'name2',img:'/images/guests/IMG_20190111_124316.jpg'},
         {id:3,name:'name3',img:'/images/guests/IMG_20190423_121304.jpg'},
         {id:4,name:'name4',img:'/images/guests/IMG_20181206_160451.jpg'},
         {id:5,name:'name5',img:'/images/guests/IMG_20181215_105924.jpg'},
         {id:6,name:'name6',img:'/images/guests/IMG_20181215_125856.jpg'},
         {id:7,name:'name7',img:'/images/guests/IMG_20181020_110738.jpg'},
         {id:8,name:'name8',img:'/images/guests/IMG_20190406_095923.jpg'},
         {id:9,name:'name9',img:'/images/guests/IMG_20191206_104521.jpg'},
         {id:10,name:'name10',img:'/images/guests/IMG_20190928_104536.jpg'},
         {id:11,name:'name11',img:'/images/guests/IMG_20191103_105900.jpg'},
         {id:12,name:'name12',img:'/images/guests/IMG_20190620_135246.jpg'},
         {id:13,name:'name13',img:'/images/guests/IMG_20190707_100157.jpg'}
        ];


    return (
        <Container>
            <Div>
              <CarouselReactSlick  imgList={imgList}/>
            </Div>
        </Container>
    )
}

const Container = styled.div`
    max-width:100%;
    height:384px;
    align-items:center;
    left:0;
    right:0;
   
    @media(min-width: 1024px) {
        min-width:980px;
    }
`
const Div = styled.div`
    width:100%;
    height:100%;
    overflow: hidden;
    /* padding:1px; */
`

export default GuestGallery;
