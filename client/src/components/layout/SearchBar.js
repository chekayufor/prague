import React, { useContext, useRef, useEffect } from 'react';
import TourContext from '../../context/tour/tourContext';
import styled from 'styled-components';


const SearchBar = () => {
    const tourContext = useContext(TourContext);
  const text = useRef('');

  const { filterTours, clearFilter, filtered } = tourContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    e.preventDefault();
    if (text.current.value !== '') {
      filterTours(e.target.value);
    } else {
      clearFilter();
    }
  };
    return (
                    <ContainerInput >
                        <input
                            id="search"
                            type="search"
                            placeholder="     поиск экскурсии..."
                            style={{borderBottom:'1px ,solid #ffffff', borderRadius: '5px', backgroundColor: '#ffffff',margin:'0',height:'100%' }}
                            ref={text}
                            onChange={onChange}
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
