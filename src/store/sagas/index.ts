import { all } from "redux-saga/effects";
import { saga as blogSaga } from "./blog";

export default function* rootSaga() {
  yield all([blogSaga()]);
}
