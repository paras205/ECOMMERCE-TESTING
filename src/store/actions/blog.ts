import { BlogType, Blog } from "src/types";

const {
  SHOW_ERROR,
  SHOW_LOADING,
  GET_ALL_BLOGS,
  GET_BLOGS_SUCCESS,
  HIDE_ERROR,
} = BlogType;

const showLoading = () => {
  return {
    type: SHOW_LOADING,
    payload: true,
  };
};

const getALlBlogs = () => ({
  type: GET_ALL_BLOGS,
});

const getAllBlogSuccess = (data: Blog) => ({
  type: GET_BLOGS_SUCCESS,
  payload: data,
});

const hideLoading = () => ({
  type: SHOW_LOADING,
  payload: false,
});

const showError = (err: string) => ({
  type: SHOW_ERROR,
  payload: err,
});

const hideError = () => ({
  type: HIDE_ERROR,
});

export {
  showLoading,
  getALlBlogs,
  getAllBlogSuccess,
  hideError,
  showError,
  hideLoading,
};
