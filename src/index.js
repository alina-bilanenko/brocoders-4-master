import React from "react";
import ReactDom from "react-dom";
import RouterComponent from "containers/RouterComponent";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { mainSaga } from "saga/main-saga";
import { initialState } from "reducers/initial-state";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { createRootReducer } from "reducers/reducers";
import { homepage } from '../package.json'

const sagaMiddleware = createSagaMiddleware();
const historyStage = {};

if (process.env.NODE_ENV === 'production') {
  historyStage.basename = '/'
}
const history = createBrowserHistory(historyStage);

function configureStore() {
  const store = createStore(
    createRootReducer(history),
    initialState(),
    compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );
  return store;
}
const store = configureStore();

sagaMiddleware.run(mainSaga);

  ReactDom.render(
    <Provider store={store}>
      <RouterComponent history={history} />
    </Provider>,
    document.getElementById("root")
  );

