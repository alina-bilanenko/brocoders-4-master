import {
  ADD_TASKS,
  DELETE_TASKS,
  GENERATE_TASKS,
  ADD_TO_STORE,
  UPDATE_SYNC_DATA
} from 'constants/tasks-constants';

const initialState = [];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASKS:
      return [...state, action.payload];
    case DELETE_TASKS:
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    case GENERATE_TASKS:
      return initialState;
    case ADD_TO_STORE:
      return action.payload;
    case UPDATE_SYNC_DATA:
      return action.payload;
    default:
      return state;
  }
};
