import React, {useContext, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import styled from 'styled-components'
import DrawerToggleButton from './DrawerToggleButton';
import Logo2 from '../style/Logo2';
import SearchBar from '../SearchBar';

import AuthContext from '../../../context/auth/authContext';


const Toolbar = (props) => {

    const authContext = useContext(AuthContext);
    const {  isAuthenticated, logout, token } = authContext;

    const onLogOut=()=>{
        logout();
    }

    const authLinks=(
        <Fragment>
            <ul>
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/privet'>Админка</NavLink></li>
                <a  onClick={onLogOut} href='#!'>
                <i className="small material-icons exit_to_app">exit_to_app</i>
                </a>
            </ul>
        </Fragment>
    )
    const gestLinks = (
        <Fragment>
            <ul >
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/pragueTour' activeStyle={{
                    fontWeight: "bold", color: "#79d9fd"}} >Прага</NavLink></li>
                <li><NavLink to='/czechTour' activeStyle={{
                    fontWeight: "bold",
                    color: "#79d9fd"
                }}>Чехия</NavLink></li>
                <li><NavLink to='/europeTour' activeStyle={{
                    fontWeight: "bold",
                    color: "#79d9fd"
                }}>Европа</NavLink></li>
                <li><NavLink to='/transfer' activeStyle={{
                    fontWeight: "bold",
                    color: "#79d9fd"
                }}>Услуги</NavLink></li>
                <li><HashLink to='/#contacts' smooth>Контакты</HashLink></li>
             </ul>
        </Fragment>
    )
    return (
        <Bar className="toolbar">
            <BarNavigation >
            <Div><DrawerToggleButton click = {props.drawerToggleClickHandler}/></Div>
            <BarLogo>
                <Logo2/>
            </BarLogo>
            <Spacer />
            <div style={{width:'200px'}}>
                <SearchBar/>
            </div>
            <Spacer/>
            <Weather>
                <a href="https://clck.yandex.ru/redir/dtype=stred/pid=7/cid=1228/*https://yandex.ru/pogoda/10511" target="_blank" rel="noopener noreferrer" ><WeatherImg src="https://info.weather.yandex.net/10511/2_white.ru.png?domain=ru" border="0" alt="Яндекс.Погода"/><img width="1" height="1" src="https://clck.yandex.ru/click/dtype=stred/pid=7/cid=1227/*https://img.yandex.ru/i/pix.gif" alt="" border="0"/></a>
            </Weather>
            <Spacer />
            <BarItems>{
                (!isAuthenticated && !token)?(gestLinks):(authLinks)
                }
               
            </BarItems>
            </BarNavigation>
        </Bar>
    )
}

const Bar = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    background-color:rgba(0,0,0,0.5);
    z-index:800;
    @media(min-width: 1024px) {
        height:100px;
  }
`

const BarNavigation = styled.div`
    display:flex;
    height:100%;
    align-items:center;
    padding: 0 1rem;
`
const BarLogo = styled.div`
    margin-left: 3rem;

 a {
    color:rgba(0,0,0,1);
    text-decoration:none;
    font-family:American Typewriter, serif;
     font-size:1.2rem;
 }
 @media(min-width: 1024px) {
    margin-left:0;
    font-size:24px;
  }
`
const BarItems = styled.div`
    ul{
        list-style:none;
        margin:0;
        padding:0;
        display:flex;
    }
    li{
        padding: 0 0.5rem;
    }
    a{
        color:#fafafa;
        /* color:rgba(0,0,0,1); */
        text-decoration:none;
        font-family:American Typewriter, serif;
        /* filter: brightness(600%); */
        /* text-transform:uppercase; */
        filter: drop-shadow(2px 4px 6px black);
        font-size:1.1rem;
        &:hover, &:active {
            color:#79d9fd;
        }
        @media(min-width: 1024px) {
            font-size:18px;
        }
        @media (min-width: 1480px) {
            font-size:22px;
        }
    }
    @media(max-width: 1023px) {
    display:none;
  }
`
const Spacer = styled.div`
    flex:1;
`
const Weather=styled.div`
    display:none;
    padding-left: 10px;
    @media (min-width: 1024px) {
      display:none;
    }
`
const WeatherImg=styled.img`
      width:130px;
      border-radius: 8%;
      border-style: double;
`
const Div = styled.div`
@media(min-width: 1024px) {
   display:none;
  }
`
export default Toolbar;