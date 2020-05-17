import React, { useContext, useRef, useEffect } from 'react';
import TourContext from '../../context/tour/tourContext';

const TourFilter = () => {
  const tourContext = useContext(TourContext);
  const text = useRef('');

  const { filterTours, clearFilter, filtered } = tourContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterTours(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Tours...'
        onChange={onChange}
      />
    </form>
  );
};

export default TourFilter;