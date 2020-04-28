import React, { useEffect, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import styled from 'styled-components';
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
import Tours from './components/Tours';
import Tour from './components/Tour';
import Bottom from './components/layout/footer/Bottom';
import TourState from './context/tour/TourState'
const App = () => {

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  },[]);
  

  return (
    <TourState>
      <Router>
        <Fragment>
          <NavBar/>
          <Switch>
            <Route exact path='/'><MainContainer/></Route>
            <Route path='/pragueTour'><PragueTour/></Route>
            <Route path='/czechTour'><CzechTour/></Route>
            <Route path='/europeTour'><EuropeTour/></Route> 
            <Route path='/transfer'><Transfer/></Route>
            <Route path={`/tours/:tourId`} render={(props)=> (
              <Tour {...props} />)}/>
            
          </Switch>
          <Bottom/>
        </Fragment>
      </Router>
    </TourState>
  );
}

export default App;
