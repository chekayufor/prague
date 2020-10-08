import React from 'react';
import styled from 'styled-components';


const MainHeader = () => {
    return (
        <Banner>
            <Parallax>
            <Weather>
                <a href="https://clck.yandex.ru/redir/dtype=stred/pid=7/cid=1228/*https://yandex.ru/pogoda/10511" target="_blank" rel="noopener noreferrer"><img src="https://info.weather.yandex.net/10511/2_white.ru.png?domain=ru" border="0" alt="Яндекс.Погода"/><img width="1" height="1" src="https://clck.yandex.ru/click/dtype=stred/pid=7/cid=1227/*https://img.yandex.ru/i/pix.gif" alt="" border="0"/></a>
            </Weather>
            <Header>
                <H1>
                Путешествия — это флирт с жизнью
                </H1>
            </Header>
            <Text>{`Дорогие путешественники!
                        Если Вы ищите персонального, индивидуального гида в Праге, Вас интересуют экскурсии по Чехии и в соседние страны Европы, необходим трансфер, услуги переводчика, организация лечения, обучения и др., Вы на правильной странице!`}
            </Text>
            </Parallax>
        </Banner>
    )
}
const Banner = styled.div`
    top:0;
    left:0;
    width:100%;
    display: flex;
    display: -webkit-flex;
    height:fit-content;
    height:-webkit-fit-content;
    background-color: #ffffff;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
    @media (max-width: 321px) {
        height:400px;
    }
    @media (max-width: 420px) {
        height:440px;
    }
    @media (min-width: 1024px) {
        height: 1000px;
    }
    @media (min-width: 1480px) {
        min-height:100vh;
    }

`
const Parallax = styled.div`
    background-image: url('images/banner-s640.jpg');
    position: static;
    height: 100%;
    width:100%;
    background-attachment: fixed;
    background-position:  inherit;
    background-repeat: no-repeat; 
    background-size: contain; 
    -webkit-background-size: contain;
    @media (min-width: 600px) {
        background-size: cover;
        -webkit-background-size :cover;
        background-image: url('images/banner.jpeg');

    }
`
const Header = styled.div`
    pointer-events: none;
    display:flex;
    display:-webkit-flex;
    /* height: 54%; */
    width:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-content:center;
    margin-bottom:60px;
    height: fit-content;
    width:100%;
    @media (min-width: 425px) {
        margin-bottom:75px;
    } 
    @media (min-width: 600px) {
        margin-bottom:20px;
        padding-top: 20px;

    }
    @media (min-width: 1024px) {
        /* height: 500px; */
        width: 100%;
        /* padding-top: 400px; */
    }
    @media (min-width: 1480px) {
        height:auto;
    }
`
const Weather=styled.div`
        display:none;
    @media (min-width: 1024px) {
        display:flex;
         margin-top: 120px;
         padding-left: 10px;
    }
    img{
        border-radius: 8%;
    border-style: double;
    border: solid 5px lightskyblue;
    filter: drop-shadow(2px 4px 6px black);
    }
`
const H1=styled.h1`
    color:#ffffff;
    font-size:24px;
    text-align:center;
    padding: 200px 2rem 0 2rem;
    margin-top:0;
    font-weight:bold;
    @media (min-width: 1024px) {
        font-size:48px;
        padding:0 2rem 0 2rem;
        font-size:36px;
        border-radius: 10px;
        filter: drop-shadow(2px 4px 6px black);

    }
    @media (min-width: 1480px) {
        font-size:72px;
        margin-top:100px;
    }
`
const Text=styled.p`
    pointer-events: none;
    display:flex;
    width:100%;
    /* height: 50%; */
    margin:0;
    text-align:center;
    text-align: -webkit-center;
    padding:1rem 2rem 1rem 2rem;
    background: rgba(250, 250, 250, 0.7);
    width: fit-content; 
    @media (max-width: 321px) {
        padding:1rem 2rem 0 2rem;
    }
    @media (min-width: 600px) {
        height: auto;
        font-size:22px;
        background: none;
        filter: drop-shadow(2px 4px 6px black);
        padding:2rem 5rem 2rem 5rem;
        color:#ffffff;
    }
    @media (min-width: 1024px) {
        font-size:26px;
    }
    @media (min-width: 1480px) {
        font-size:48px;
    }
`

export default MainHeader;
