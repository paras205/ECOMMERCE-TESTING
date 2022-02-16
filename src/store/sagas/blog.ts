import { AxiosResponse, AxiosError } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  showError,
  showLoading,
  hideError,
  getAllBlogSuccess,
  hideLoading,
} from "../actions/blog";
import { service } from "../service/blog";
import { BlogType } from "src/types";

function* getBlogs() {
  try {
    yield put(showLoading());
    const response: AxiosResponse = yield call(service.getAllBlogs);
    yield put(getAllBlogSuccess(response?.data));
  } catch (err) {
    yield put(
      showError(`${(err as AxiosError<{ data: any }>)?.response?.data}`)
    );
  } finally {
    yield put(hideLoading());
    yield put(hideError());
  }
}

export function* saga() {
  yield takeLatest(BlogType.GET_ALL_BLOGS, getBlogs);
}
