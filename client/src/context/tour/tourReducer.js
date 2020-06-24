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
    SET_TOUR,
    GET_PICTURE,
    ADD_PICTURE,
    PICTURE_ERROR,
    DELETE_PICTURE,
    SET_PICTURES
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
        case ADD_PICTURE:
        return {
          ...state,
          pictures: [action.payload, ...state.pictures],
          loading: false
        };
        case GET_PICTURE:
        return {
          ...state,
          pictures: action.payload,
          loading: false
        };
        case SET_PICTURES:
        return {
          ...state,
          pictures: action.payload
        };
      case DELETE_PICTURE:
        return {
          ...state,
          pictures: state.pictures.filter(
            (i, itemIndex) => itemIndex !== action.payload 
            // i => i.filename !== action.payload
          ),
          loading: false
        };
      case CLEAR_TOURS:
        return {
          ...state,
          tours: null,
          filtered: null,
          error: null,
          current: null,
          pictures:[]
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
          current: null,
          pictures:[]
        };
      case FILTER_TOURS:
        return {
          ...state,
          filtered: state.tours.filter(tour => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return tour.name.match(regex) || tour.type.match(regex);
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
      case PICTURE_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };