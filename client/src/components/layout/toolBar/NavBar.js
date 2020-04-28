import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import ToolBar from './ToolBar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';


const NavBar = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
      }
    
      const backdropClickHandler = () => {
        setSideDrawerOpen(false);
      }
    
    return (
        <NavBarContainer >
            {(sideDrawerOpen) && <Backdrop backdropClickHandler={backdropClickHandler}/>}
            <SideDrawer show={sideDrawerOpen} backdropClickHandler={backdropClickHandler}/>
            <ToolBar drawerToggleClickHandler={drawerToggleClickHandler}/>
        </NavBarContainer>
    )
};

const NavBarContainer = styled.div`
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height:100%;
    /* min-width: 980px; */
    /* position: fixed; */
    display: flex;
    flex-direction: column;
`


export default NavBar;