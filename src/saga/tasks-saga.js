import { all, takeLatest, select, put } from "redux-saga/effects";
import { setItem, removeItem, clearStorage } from "localStorage/localStorage";
import {
  ADD_TASKS,
  DELETE_TASKS,
  TASK_LOCALSTORAGE,
  GENERATE_TASKS,
  ADD_TO_STORE
} from "constants/tasks-constants";
import { actionCreator } from "actions/action";
import { generate } from "addition/GenerateTask";

export function* addTaskLocalStorage() {
  const tasks = yield select(state => state.tasks);
  yield setItem(TASK_LOCALSTORAGE, JSON.stringify(tasks));
}
export function* deleteTaskLocalStorage() {
  const tasks = yield select(state => state.tasks);
  yield removeItem(TASK_LOCALSTORAGE);
  yield setItem(TASK_LOCALSTORAGE, JSON.stringify(tasks));
}
export function* generateTasksSaga() {
  yield clearStorage();
  yield setItem(TASK_LOCALSTORAGE, JSON.stringify(generate()));
  yield put(actionCreator(ADD_TO_STORE, generate()));
}
export function* watchTask() {
  yield all([
    takeLatest(ADD_TASKS, addTaskLocalStorage),
    takeLatest(DELETE_TASKS, deleteTaskLocalStorage),
    takeLatest(GENERATE_TASKS, generateTasksSaga)
  ]);
}
