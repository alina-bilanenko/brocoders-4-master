import { getItem } from 'localStorage/localStorage';
import { TASK_LOCALSTORAGE } from 'constants/tasks-constants';

export const localReducer = () => {
  let store = {};
  const localTasks = getItem(TASK_LOCALSTORAGE);
  if (localTasks) store.tasks = JSON.parse(localTasks);

  return store;
};
