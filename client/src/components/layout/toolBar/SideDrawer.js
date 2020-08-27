import React, {useContext, Fragment} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../SearchBar';

import AuthContext from '../../../context/auth/authContext';


const SideDrawer = (props) => {
  const authContext = useContext(AuthContext);
  const {  isAuthenticated, logout, token } = authContext;

  const onLogOut=()=>{
      logout();
  }
  const authLinks=(
    <Fragment>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/privet'>Админка</Link></li>
            <a  onClick={onLogOut} href='#!'>
            <i className="small material-icons exit_to_app">exit_to_app</i>
            </a>
    </Fragment>
  )

  const gestLinks = (
    <Fragment>
      <li><Link to='/'>Главная</Link></li>
      <li><Link to='/pragueTour' >Экскурсии по Праге</Link></li>
      <li><Link to='/czechTour'>Экскурсии по Чехии</Link></li>
      <li><Link to='/europeTour'>Экскурсии по Европе</Link></li>
      <li><Link to='/transfer'>Услуги</Link></li>
      <li><a href='/#about'>Обо мне</a></li>
    </Fragment>
  )
    return (
      <SideDrawerContainer show={props.show}>
        <div>
          <h4>Путешествуем с Дмитрием</h4>
          <ImgContainer/>
          <p> {`Меня зовут Дмитрий.
                Я — гид в Праге, путешественник и просто влюбленный в Прагу человек!
                Буду рад предложить Вам нестандартные маршруты по самым укромным уголкам Праги и Чехии в дружеской атмосфере, легко, интересно и весело!`}
          </p>
        </div>
        <div style={{flexDirection:'row'}}>
          <SearchBar/>
          <button style={{border:'none', background:'none', width:'30px'}} 
                  onClick={(e) => {
                    e.preventDefault();
                    props.backdropClickHandler();
                  }}
          ><span role="img">🔎</span></button>
        </div>
        <ul onClick={props.backdropClickHandler}>
          {
          (!isAuthenticated && !token)?(gestLinks):(authLinks)
          }
        </ul>
      </SideDrawerContainer>
    )
  }
  

  const SideDrawerContainer=styled.div`
    height: 100%;
    background-color:white;
    box-shadow: 1px 0 7px rgba(0, 0, 0, 0.5 );
    position:fixed;
    top:0;
    left:0;
    width:70%;
    min-width: 300px;
    z-index:1000;
    transform: translateX(${props => props.show? '0': '-100%' });
    transition: transform 0.3s ease-out;
    h4{
      text-align:center;
      padding:0 0 1rem 0;
      font-size:22px;
      color:#0f1c63;
      @media(min-width: 1024px) {
        font-size:28px;
        padding:2rem 0 1rem 0;
      }
      @media(max-width: 321 px) {
        font-size:28px;
        padding:2rem 0 1rem 0;
      }
    }
    div{
      display:flex;
      flex-direction:column;
      justify-content:center;
      padding: 0 2rem 0 2rem ;
      p{
        text-align:center;
        font-size:14px;
        font-family: sans-serif;
      }
    }
    ul{
      /* height:100%; */
      list-style:none;
      display:flex;
      flex-direction:column;
      justify-content:center;
      padding-left:3rem;
      /* padding-top: 1rem; */
    }
    li{
      margin: 0.2rem 0;
    }
    a{
      color:#0f1c63;
      text-decoration:none;
      font-size:18px;
      font-family: inherit;
        &:hover, &:active{
            color:#79d9fd;
        }
    }
    @media(min-width: 1024px) {
      display:none;
    }
  `
  const ImgContainer= styled.div`
    background-image:url('images/aboutMe.jpg');
    /* background-color: #cccccc;  */
    height: 150px; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: contain; 
    @media(min-width: 1024px) {
      height: 200px; 
    }
  `
// const SearchContainer=styled.div`
//   display:grid;
//   grid-template-columns:4fr 1fr;
// `
  export default SideDrawer