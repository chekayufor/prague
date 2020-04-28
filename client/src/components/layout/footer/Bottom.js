import React from 'react'
import styled from 'styled-components';

const Bottom = () => {
    return (
        <BottomContainer  id='contacts'>
            <Sociall>
                <ul>
                    <li><a href="https://www.facebook.com/prahaguide/?ref=bookmarks" target="_blank" rel="facebook"><img src='/images/icons/facebook.png'/></a></li>
                    <li><a href="https://www.instagram.com/guide_praha_dmitry/
                    " target="_blank" rel="instagram"><img src='/images/icons/instagram.png'/></a></li>
                    <li><a href="https://vk.com/id469089698" target="_blank" rel="vk"><img src='/images/icons/vk.png'/></a></li>
                    <li><a href="mailto:dmitriy.prague@gmail.com?subject= Запрос с сайта о путешествиях по Праге&amp;body= Будем рады ответить на любой Ваш вопрос 🙂&amp" target="_blank" rel="email"><i className="material-icons " style={{color:'#ffffff', fontSize: '28px'}}>email</i></a></li>
                </ul>
            </Sociall>
            <Contacts>
                <Call><i className="material-icons" style={{color: '#FFFFFF'}}>call</i><a href='tel:+420777892007'> +420777892007</a></Call>
                <Email><i className="material-icons" style={{color: '#FFFFFF'}}>email</i><a href="mailto:dmitriy.prague@gmail.com?subject= Запрос с сайта о путешествиях по Праге&amp;body= Будем рады ответить на любой Ваш вопрос 🙂&amp">
                 dmitriy.prague@gmail.com
                </a>
                </Email>
                <Auth><a href='https://elena-dubinsky.netlify.com/' target="_blank" rel="auth">@made by Elena Dubinsky</a></Auth>
            </Contacts>
        </BottomContainer>
    )
}

const BottomContainer=styled.div`
    display:grid;
    height: fit-content;
    grid-template-rows: 1fr 2fr;
    background-color: #6e6e6e;
`
const Sociall = styled.div`
    display: grid;
    
    ul{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        grid-template-rows:100%;
        align-items:center;
        justify-items:center;
        @media(min-width: 600px) {
            justify-self:center;
        }
        li{
            border-radius:25%;
            transition: all 0.3s ease 0.1s;
            &:hover, &:active{
                /* background:#8dd6da; */
                filter: drop-shadow(2px 2px 2px #35e3ec);

                transform:scale(1.3);
            }
            @media(min-width: 600px) {
            margin-right:35px;
            } 
        }
        a{
            cursor: pointer;
        }
    }
`

const Contacts = styled.div`
        border-top: solid 2px aliceblue;
        width: 80%;
        padding: 20px;
        margin: 0 auto;
        display:grid;
        grid-template-rows:repeat(3, 1fr);
        @media(min-width: 600px) {
            grid-template-rows:repeat(2, 1fr);
            grid-template-columns:repeat(2, 1fr);
        }
        a{
            color:#8dd6da;
            padding-left:10px;
            cursor: pointer;
        } 
`

const Call = styled.div`
    display:flex;
    justify-content:center;
    a{
        font-size:1.2rem;
    }
    @media(min-width: 600px) {
        justify-content:start;
        flex-direction:row; 
        grid-area: 1/1/2/2; 
        justify-content:center;
    }
`
const Email = styled.div`
    display:flex;
    justify-content:center;
    a{
        font-size:1.2rem;
    }
    @media(min-width: 600px) {
        justify-content:start;
        flex-direction:row;
        grid-area: 1/2/2/3;
        justify-content:center;    
    }`
const Auth = styled.div`
    display:flex;
    justify-content:center;
    align-self: flex-end;
    a{
        color:#000000;
    }
    @media(min-width: 600px) {
        justify-content:start;
        flex-direction:row; 
        grid-area: 2/1/3/3;
        justify-content:center;
 
    }
`
export default Bottom;
