import React, { useEffect, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import NavBar from './components/layout/toolBar/NavBar';
import MainContainer from './components/pages/MainContainer';
import EuropeTour from './components/pages/EuropeTour';
import PragueTour from './components/pages/PragueTour';
import CzechTour from './components/pages/СzechTour';
import Transfer from './components/pages/Transfer';
import Tour from './components/tours/Tour';
import Auth from './components/pages/Auth';
import Bottom from './components/layout/footer/Bottom';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import Register from './components/auth/Register';
import PrivetRoute from './components/routing/PrivetRoute';

import TourState from './context/tour/TourState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
const App = () => {
  
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  },[]);
  

  return (
    <AuthState>
    <TourState>
    <AlertState>
      <Router>
        <Fragment>
          <NavBar/>
          <Alerts/>
          <Switch>
            <Route exact path='/' component = {MainContainer}/>
            <Route path='/pragueTour' render={(props =>(
              <PragueTour {...props}/>))}/>
            <Route path='/czechTour' component = {CzechTour}/>
            <Route path='/europeTour' component = {EuropeTour}/> 
            <Route path='/transfer' component = {Transfer}/>
            <Route path='/register' component = {Register}/>
            <Route path='/:tours/:tourId' render={(props)=> (
              <Tour {...props} />)}/>
              
              <Route exact path='/login' component={Login} />
              <PrivetRoute path='/privet' component={Auth}/>
          </Switch>
          <Bottom/>
        </Fragment>
      </Router>
      </AlertState>
    </TourState>
    </AuthState>
  );
}

export default App;
