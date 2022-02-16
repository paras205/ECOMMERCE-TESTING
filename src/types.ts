export enum BlogType {
  SHOW_LOADING = "SHOW_LOADING",
  GET_ALL_BLOGS = "GET_ALL_BLOGS",
  GET_BLOGS_SUCCESS = "GET_BLOGS_SUCCESS",
  SHOW_ERROR = "SHOW_ERROR",
  HIDE_ERROR = "HIDE_ERROR",
}

export interface Blog {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface BlogState {
  loading: boolean;
  data: Blog[];
  error: null | string;
}

interface GetBlogData {
  type: BlogType.GET_ALL_BLOGS;
}

interface GetBlogDataSuccess {
  type: BlogType.GET_BLOGS_SUCCESS;
  payload: Blog[];
}

interface GetBlogError {
  type: BlogType.SHOW_ERROR;
  payload: string;
}
interface ShowLoading {
  type: BlogType.SHOW_LOADING;
  payload: boolean;
}
interface HideError {
  type: BlogType.HIDE_ERROR;
}

export type TAction =
  | GetBlogData
  | GetBlogDataSuccess
  | GetBlogError
  | ShowLoading
  | HideError;
