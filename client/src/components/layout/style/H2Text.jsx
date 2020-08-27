import styled from 'styled-components'

const H2=styled.h2`
    font-size: 24px;
    padding: 20px 0 10px 0;
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: center center;
    background-attachment: fixed;
    background-image: url(https://cdn.wallpapersafari.com/10/58/GbkjFv.jpg); */
    @media(min-width: 768px) {
        font-size: 36px;
    }
    @media(min-width: 1024px) {
        font-size: 42px;
    }
    @media(min-width: 1470px) {
        font-size: 48px;
    }
`

export default H2;
