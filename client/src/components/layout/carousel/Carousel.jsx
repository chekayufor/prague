import React, {useEffect, useState} from 'react';
import Slide from './Slide'

const Carousel = ({imgList}) => {

    const s = {
        container: "fullW fullH rel overflowH",
        onScreen: "left0",
        offScreenRight: "left100vw",
        offScreenLeft: "leftM100vw",
        transition: "transition1l"
    };

    const[slide1, setSlide1]= useState({
                                id: 0,
                                position: s.onScreen,
                                transition: true
                                });
    const[slide2, setSlide2]= useState({
                                id: 1,
                                position: s.offScreenRight,
                                transition: true
                                });
    const[currentId, setCurrentId]=useState(0);
    let carouselInterval;

    useEffect(()=> {
        startCarousel();
        return () => {
            clearInterval(carouselInterval);
        }
    }, [])

    const startCarousel = () => {
        carouselInterval = setInterval(() => {
            transitionSlides();
        }, 4000);
    };
   const transitionSlides = () => {
        let currentId;
        if (slide1["position"] === s.onScreen) {
            slide1["position"] = s.offScreenLeft;
            slide2["position"] = s.onScreen;
            currentId = slide2.id;
        } else {
            slide1["position"] = s.onScreen;
            slide2["position"] = s.offScreenLeft;
            currentId = slide1.id;
        }
        setSlideState(slide1, slide2, currentId);
        setTimeout(() => {
            resetSlideOffScreen();
        }, 1000);
    };
    const setSlideState = (slide1, slide2, currentId) => {
            setSlide1(slide1);
            setSlide2(slide2);
            setCurrentId(currentId);
    };
    const resetSlideOffScreen = () => {
        if (slide1["position"] === s.offScreenLeft) {
            slide1["transition"] = false;
            slide1["position"] = s.offScreenRight;
            slide1["id"] = slide2.id + 1 === imgList.length ? 0 : slide2.id + 1;
        } else {
            slide2["transition"] = false;
            slide2["position"] = s.offScreenRight;
            slide2["id"] = slide1.id + 1 === imgList.length ? 0 : slide1.id + 1;
        }
        setSlideState(slide1, slide2, currentId);
        resetSlideTransitions(slide1, slide2, currentId);
    };
    const resetSlideTransitions = (slide1, slide2, currentId) => {
        setTimeout(() => {
            slide1["transition"] = true;
            slide2["transition"] = true;
            setSlideState(slide1, slide2, currentId);
        }, 500);
    };
    return (
        <div className={s.container}>
            <Slide
                image={imgList[slide1.id]}
                position={slide1.position}
                transition={slide1.transition ? s.transition : ""}
            />
            <Slide
                image={imgList[slide2.id]}
                position={slide2.position}
                transition={slide2.transition ? s.transition : ""}
            />
        </div>
    )
}

export default Carousel;
