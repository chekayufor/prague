import React from 'react'
import styled from "styled-components";

const YouTubeVideo = ({video}) => {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
            <VideoContainer>
                <Iframe  title='video player' src={videoSrc} allowFullScreen frameBorder="0"/>
            </VideoContainer>
    )
}

const Iframe = styled.iframe`
    /* height:260px; */
    height:-webkit-fill-available;
    width:24rem;
    @media (min-width: 600px) {
        /* height:400px; */
        width:30rem;
  }
    
`
const VideoContainer = styled.div`
    display:grid;
    height: 100%;
    width: 100%;
    align-content: center;
    /* padding:2%; */
`

export default YouTubeVideo
