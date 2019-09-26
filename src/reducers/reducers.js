import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { timerReducer } from './timer-reducers';
import { taskReducer } from './tasks-reducers';

export default combineReducers({
  timer: timerReducer,
  tasks: taskReducer
});

export const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  timer: timerReducer,
  tasks: taskReducer
})
