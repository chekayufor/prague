import React, { Fragment, useContext, useEffect } from 'react';
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AuthTour from './AuthTour';
import Spinner from '../layout/Spinner';
import TourContext from '../../context/tour/tourContext';

const AuthTours = () => {
  const tourContext = useContext(TourContext);

  const { tours, filtered, getTours, loading } = tourContext;

  useEffect(() => {
    getTours();
    // eslint-disable-next-line
  }, []);

  if (tours !== null && tours.length === 0 && !loading) {
    return <h4>Please add a tour</h4>;
  }

  return (
    <Container>
      {tours !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(tour => (
                <CSSTransition
                  key={tour._id}
                  timeout={500}
                  classNames='item'
                >
                  <AuthTour tour={tour} />
                </CSSTransition>
              ))
            : tours.map(tour => (
                <CSSTransition
                  key={tour._id}
                  timeout={500}
                  classNames='item'
                >
                  <AuthTour tour={tour} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};
const Container=styled.div`
 overflow: scroll;
    max-height:1800px;
`
export default AuthTours;