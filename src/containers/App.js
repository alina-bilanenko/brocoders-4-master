import React from 'react';
import RouterComponent from 'componentns/Routing/RouterComponent';
import createSagaMiddleware from 'redux-saga';
import combineReducers from 'reducers/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { mainSaga } from 'saga/main-saga';
import { localReducer } from 'reducers/local-reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers,
  localReducer(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mainSaga);

const App = () => {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
};

export default App;
