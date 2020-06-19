import React, {useEffect} from 'react';
import styled from "styled-components";

import YouTubeVideo from './YouTubeVideo';


const YouTube = ({videos,onVideoSelect }) => {
    useEffect(() => {
        onVideoSelect()
        // eslint-disable-next-line
      }, []);
console.log({videos})
    return (
        <div style={{height:'300px'}}>
        <Ul>{
            videos.filter(v => v.snippet.channelId === "UCMmsWAmdBLUdAEHuDmypuRQ").map(video=>(
                <li key={video.id.videoId}>
                    <YouTubeVideo video={video}/>
                </li>
            ))
        }</Ul>
        </div>
    )
}
const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100%;   
`
export default YouTube
