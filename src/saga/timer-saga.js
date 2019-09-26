import { all, takeLatest, select } from "redux-saga/effects";
import { setItem, removeItem } from "localStorage/localStorage";
import { getNameTask } from "reducers/selectors";
import {
  START_TIMER,
  STOP_TIMER,
  ACTIVE_TIMER,
  CHANGE_TASK_NAME
} from "constants/timer-constants";

export function* activeTimerLocalStorage() {
  const takeStart = yield select(state => state.timer);
  yield setItem(ACTIVE_TIMER, JSON.stringify(takeStart));
}

export function* setTaskNameToLocalStorage() {
  const takeName = yield select(state => getNameTask(state));
  yield setItem(CHANGE_TASK_NAME, JSON.stringify({ name: takeName }));
}

export function* inactiveTimeLocalStorage() {
  yield removeItem(ACTIVE_TIMER);
  yield removeItem(CHANGE_TASK_NAME);
}

export function* watchTimer() {
  yield all([
    takeLatest(START_TIMER, activeTimerLocalStorage),
    takeLatest(STOP_TIMER, inactiveTimeLocalStorage),
    takeLatest(CHANGE_TASK_NAME, setTaskNameToLocalStorage)
  ]);
}
