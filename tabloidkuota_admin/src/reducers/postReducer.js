import {
  CATEGORIES_FETCH,
  POSTS_FETCH,
  POST_FETCH_DETAIL,
} from "../actions/actionType";

const intialState = {
  posts: [],
  detailPost: null,
  categories: [],
};

const postReducer = (state = intialState, action) => {
  switch (action.type) {
    case POSTS_FETCH:
      return {
        ...state,
        posts: action.payload,
      };

    case POST_FETCH_DETAIL:
      return {
        ...state,
        detailPost: action.payload,
      };

    case CATEGORIES_FETCH:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
