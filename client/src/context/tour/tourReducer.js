import {
    GET_TOURS,
    ADD_TOUR,
    DELETE_TOUR,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_TOUR,
    FILTER_TOURS,
    CLEAR_FILTER,
    TOUR_ERROR,
    CLEAR_TOURS,
    SET_TOUR
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_TOURS:
        return {
          ...state,
          tours: action.payload,
          loading: false
        };
      case ADD_TOUR:
        return {
          ...state,
          tours: [action.payload, ...state.tours],
          loading: false
        };
      case UPDATE_TOUR:
        return {
          ...state,
          tours: state.tours.map(tour =>
            tour._id === action.payload._id ? action.payload : tour
          ),
          loading: false
        };
      case DELETE_TOUR:
        return {
          ...state,
          tours: state.tours.filter(
            tour => tour._id !== action.payload
          ),
          loading: false
        };
      case CLEAR_TOURS:
        return {
          ...state,
          tours: null,
          filtered: null,
          error: null,
          current: null
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case SET_TOUR:
        return {
          ...state,
          tour: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case FILTER_TOURS:
        return {
          ...state,
          filtered: state.tours.filter(tour => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return tour.name.match(regex) || tour.section.match(regex) || tour.text.match(regex);
          })
        };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null
        };
      case TOUR_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };