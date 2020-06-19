import React from 'react'
import styled from 'styled-components';
import CarouselReactSlick from './CarouselReactSlick';
// import * as images from '/images/guests';

const GuestGallery = () => {
    function importAll(r) {
        return r.keys().map(r);
    }
    
    const img = importAll(require.context('../../../../public/images/guests', false, /\.(png|jpe?g|svg)$/));
    // console.log('img ', img)
    return (
        <Container>
            <Div>
              <CarouselReactSlick  imgList={[...img]}/>
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
