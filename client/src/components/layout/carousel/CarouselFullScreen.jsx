import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CarouselFullScreen = ({imgList}) => {

  const [index, setIndex] = useState(0);

  const slideWidth = 30; 

    useEffect(()=> {
      move();
    }, [index]);

    console.log({index});

    const move =() => {
      let next = (index + 1) % imgList.length;
      setTimeout(() =>  setIndex(next) , 3000);
    }

    // const arrRender = () => {
    //   if(imgList.length) {
    //     let newImage = imgList.shift();
    //     imgList.push(newImage);
    //   }
    //   console.log({imgList})
    //   return imgList;
    // }
    
  return (
    <Box>
      <Mask >
        <SlideContainer
          x={index * slideWidth}
        >
          {imgList.map(({ id, img, name, linkCode }, i) => (
            <Slide key={name}>
              <A target="_blank" href={linkCode}>
                {img !== null && <Image src={img} />}
              </A>
            </Slide>
          ))}
        </SlideContainer>
      </Mask>
    </Box>
  );
};

export default CarouselFullScreen;

const Box = styled.div`
  /* display: none; */
  width: 100%;
  height: 100%;
  justify-content: start;
  align-content: center;
  position: relative;
  @media (min-width: 1200px) {
    display: grid;
    grid-area: 2/2/3/3;
  }
`;
const Mask = styled.div`
  width: 100%;
  overflow: hidden;
`;
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  transition: transform 3s linear;
   transform: translateX(${({ x }) => -(x)}rem);
`;
const Slide = styled.div`
  width: 30rem;
  height: 100%;
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  transition: transform 3s linear;
  transform: translateX(${({ x }) => -(x)}rem);
`;
const A = styled.a`
  display: grid;
  align-content: center;
  justify-items: center;
  position: relative;
  color: white;
  grid-template-rows: 1fr;
  grid-template-columns: 100%;
  cursor: pointer;
`
const Image = styled.img`
  width: 30rem;
  height:30rem;
  object-fit: cover;
  object-position: center;
`;
