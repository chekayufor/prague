import React, { useReducer } from 'react';
import axios from 'axios';
import TourContext from './tourContext';
import tourReducer from './tourReducer';
import {
  GET_TOURS,
  ADD_TOUR,
  DELETE_TOUR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TOUR,
  FILTER_TOURS,
  CLEAR_TOURS,
  CLEAR_FILTER,
  TOUR_ERROR,
  SET_TOUR,
  PICTURE_ERROR,
  ADD_PICTURE,
  DELETE_PICTURE,
  GET_PICTURE

} from '../types';

const TourState = props => {
  const initialState = {
    tours: null,
    pictures:null,
    picture:null,
    current: null,
    tour: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(tourReducer, initialState);

  // Get Tours
  const getTours = async () => {
    try {
      const res = await axios.get('/api/excursion');

      dispatch({
        type: GET_TOURS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TOUR_ERROR,
        payload: err.response.msg
        // payload: 'err.response.msg'
      });
    }
  };

  // Add Tour
  const addTour = async tour => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/excursion', tour, config);

      dispatch({
        type: ADD_TOUR,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TOUR_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Tour
  const deleteTour = async id => {
    try {
      await axios.delete(`/api/excursion/${id}`);

      dispatch({
        type: DELETE_TOUR,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: TOUR_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Tour
  const updateTour = async tour => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      debugger;
      const res = await axios.put(
        `/api/excursion/${tour._id}`,
        tour,
        config
      );

      dispatch({
        type: UPDATE_TOUR,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TOUR_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Tours
  const clearTours = () => {
    dispatch({ type: CLEAR_TOURS });
  };
  const setTour = tour => {
    dispatch({ type: SET_TOUR, payload: tour });
  };

  // Set Current Tour
  const setCurrent = tour => {
    dispatch({ type: SET_CURRENT, payload: tour });
  };

  // Clear Current Tour
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Tours
  const filterTours = text => {
    dispatch({ type: FILTER_TOURS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

   // Get Pictures
   const getPictures = async () => {
    try {
      const res = await axios.get('/upload');

      dispatch({
        type: GET_PICTURE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PICTURE_ERROR,
        payload: err.response.msg
        // payload: 'err.response.msg'
      });
    }
  };

  // Add Pictures
  const addPicture = async picture => {
    const formData = new FormData();
    formData.append('myImage', picture)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    try {
      const res = await axios.post('/upload', formData, config);
      dispatch({
        type: ADD_PICTURE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PICTURE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Pictures
  const deletePicture = async id => {
    try {
      await axios.delete(`/upload/${id}`);

      dispatch({
        type: DELETE_PICTURE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: PICTURE_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <TourContext.Provider
      value={{
        tours: state.tours,
        pictures: state.pictures,
        picture: state.picture,
        current: state.current,
        tour: state.tour,
        filtered: state.filtered,
        error: state.error,
        addTour,
        deleteTour,
        setCurrent,
        clearCurrent,
        updateTour,
        filterTours,
        clearFilter,
        getTours,
        clearTours,
        setTour,
        getPictures,
        addPicture,
        deletePicture
      }}
    >
      {props.children}
    </TourContext.Provider>
  );
};

export default TourState;