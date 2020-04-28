import React from 'react';
import styled from 'styled-components'


const About = () => {
    return (
        <AboutContainer id ='about'>
            <h4>Обо мне</h4>
            <ImgContainer/>
            <p> Меня зовут Дмитрий.
            <br/><br/> Я — гид в Праге, путешественник и просто влюбленный в Прагу человек!
            За последние несколько лет я объездил всю Чехию вдоль и поперек. С радостью делюсь накопленным опытом и знаниями с такими же заядлыми путешественниками.Буду рад предложить Вам нестандартные маршруты по самым укромным уголкам Праги и Чехии в дружеской атмосфере, легко, интересно и весело!
            <br/><br/> Работаю я в команде профессионалов и мы всегда готовы помочь Вам сделать Ваше путешествие насыщенным и незабываемым! Мы познакомим Вас с богатейшей историей и культурой, старинной архитектурой, великолепными крепостями и замками. Вы насладитесь живописнейшими видами, вкуснейшим пивом и национальной чешской кухней.
            <br/><br/> Всегда к Вашим услугам, <br/> Дмитрий Новак.
            </p>
        </AboutContainer>
    )
}
const AboutContainer = styled.div`
    background-color: #6e6e6e;
    display:grid;
    width:100%;
    height:fit-content;
    justify-content:center;
    padding: 0 2rem 0 2rem ;
    align-items:center;
    h4{
        text-align:center;
        padding:25px 0 1rem 0;
        font-size:1.6rem;
        text-transform:uppercase;
        @media(min-width: 600px) {
            font-size:28px;
        }
        @media(max-width: 321 px) {
            font-size:28px;
        }
    }
    p{
        text-align:center;
        font-size:16px;
        font-family: sans-serif;
        @media(min-width: 600px) {
            font-size:18px;
        }
        @media(min-width: 1040px) {
            font-size:22px;
        }
    }

`
const ImgContainer= styled.div`
    background-image:url('images/aboutMe.jpeg');
    height: 260px; 
    width:100%;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
    @media(min-width: 600px) {
        height: 360px;
        width: 480px;
        justify-self: center;
    }
`
export default About
