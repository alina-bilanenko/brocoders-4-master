import { getItem } from "localStorage/localStorage";
import { TASK_LOCALSTORAGE } from "constants/tasks-constants";
import { ACTIVE_TIMER,CHANGE_TASK_NAME}  from "constants/timer-constants";

export const initialState = () => {
  let store = {};
  const localTasks = getItem(TASK_LOCALSTORAGE);
  const localTimer = getItem(ACTIVE_TIMER);
  const localTaskName = getItem(CHANGE_TASK_NAME);
  if (localTasks) store.tasks = JSON.parse(localTasks);
  if (localTimer) store.timer = JSON.parse(localTimer);
  if (localTimer && localTaskName){
    store.timer.nameTask = JSON.parse(localTaskName).name;
  }
  return store;
};
