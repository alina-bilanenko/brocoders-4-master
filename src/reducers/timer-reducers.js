import {
  START_TIMER,
  STOP_TIMER,
  UPDATE_TIMER,
  ACTIVE_TIMER,
  INACTIVE_TIMER,
  START_ACTIVE_TIMER,
  CHANGE_TASK_NAME
} from 'constants/timer-constants';

const initialState = {
  statusTimer: INACTIVE_TIMER,
  startTimer: 0,
  currentTime: 0,
  nameTask: ''
};
export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        statusTimer: ACTIVE_TIMER,
        startTimer: action.payload.startTimer
      };
    case UPDATE_TIMER:
      return {
        ...state,
        currentTime: action.payload.currentTime
      };
    case CHANGE_TASK_NAME:
      return {
        ...state,
        nameTask: action.payload.nameTask
      };
    case START_ACTIVE_TIMER:
      return {
        ...state,
        statusTimer: ACTIVE_TIMER,
        currentTime: action.payload.currentTime
      };
    case STOP_TIMER:
      return initialState;
    default:
      return state;
  }
};
