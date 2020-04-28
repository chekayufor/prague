import React, { useRef } from 'react';
import styled from 'styled-components';


const SearchBar = () => {
    const text = useRef('');

    //   const onChange = e => {
    //     searchLogs(text.current.value);
    //   };

    return (
                    <ContainerInput >
                        <input
                            id="search"
                            type="search"
                            placeholder="🔎 поиск экскурсии..."
                            style={{borderBottom:'1px ,solid #ffffff', borderRadius: '5px', backgroundColor: '#ffffff',margin:'0',height:'100%' }}
                            ref={text}
                            onChange={e => console.log(e.target.value)}
                        />
                    </ContainerInput>
    );
};

const ContainerInput = styled.div`
    height:30px;
    width:100%;
    display:none;
    @media(min-width: 1024px) {
        display:flex;
    }
`

export default SearchBar;
