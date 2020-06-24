import React from 'react';
import styled from 'styled-components';


import GuestGallery from '../carousel/GuestGallery';
import Sociall from '../Sociall';
import About from './About';


const Footer = () => {
    return (
        <FooterContainer>
            <Sociall/>
            <GuestGallery/>
            <About/>
        </FooterContainer>
    )
}
const FooterContainer = styled.div`
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height:100%;
    /* min-width: 980px; */
    min-height:100vh;
    overflow: hidden;
    color:#FFFFFF;
    text-align:center;
    /* display:grid; */
    /* margin-top:80px; */
`

export default Footer;
