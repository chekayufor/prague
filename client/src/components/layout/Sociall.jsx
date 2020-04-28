import React from 'react'
import styled from 'styled-components'


const Sociall = () => {
    return (
        <SociallContainer>
            <ul>
                <li><a href="https://www.facebook.com/prahaguide/?ref=bookmarks" target="_blank" rel="facebook"><img src='/images/icons/icons8-facebook-50.png'/></a></li>
                <li><a href="https://www.instagram.com/guide_praha_dmitry/
                " target="_blank" rel="instagram"><img src='/images/icons/icons8-instagram-50.png'/></a></li>
                <li><a href="https://vk.com/id469089698" target="_blank" rel="vk"><img src='/images/icons/icons8-vk-circled-50.png'/></a></li>
                <li><a href="mailto:dmitriy.prague@gmail.com?subject= Запрос с сайта о путешествиях по Праге&amp;body= Будем рады ответить на любой Ваш вопрос 🙂&amp" target="_blank" rel="email"><img src='/images/icons/icons8-send-50.png'/></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=420777892007" target="_blank" rel="email"><img src='/images/icons/icons8-whatsapp-50.png'/></a></li>
            </ul>
        </SociallContainer>
    )
}

const SociallContainer = styled.div`
    display:grid;
    width:100%;
    background-color:#6e6e6e;
    margin-top:20px;
    ul{
        display:grid;
        grid-template-columns:repeat(5,1fr);
        grid-template-rows:100%;
        align-items:center;
        justify-items:center;
        /* @media(min-width: 600px) {
            justify-self:center;
        }*/
        li{
            transition: all 0.5s  ease 0.2s;
            &:hover, &:active{
                transform:scale(1.3);
                filter: drop-shadow(2px 4px 6px black);
            }
        }  

    }
`
export default Sociall;
