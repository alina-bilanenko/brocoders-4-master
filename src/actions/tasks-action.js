import { GENERATE_TASKS } from 'constants/tasks-constants';

export const actionCreateTask = (newAction, actionPayload) => ({
  type: newAction,
  payload: actionPayload
});

export const generateTasks = () => ({
  type: GENERATE_TASKS
});
