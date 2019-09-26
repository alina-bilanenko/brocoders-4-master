import { all } from "redux-saga/effects";
import { watchTask } from "./tasks-saga";
import { watchTimer } from "./timer-saga";

export function* mainSaga() {
  yield all([watchTask(),watchTimer()]);
}
