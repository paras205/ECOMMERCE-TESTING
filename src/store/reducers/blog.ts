import { BlogState, TAction } from "src/types";
import { BlogType } from "src/types";

const { SHOW_ERROR, SHOW_LOADING, GET_BLOGS_SUCCESS, HIDE_ERROR } = BlogType;

const initialState: BlogState = {
  loading: false,
  data: [],
  error: null,
};

const blogReducer = (state = initialState, action: TAction): BlogState => {
  switch (action.type) {
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case SHOW_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default blogReducer;
