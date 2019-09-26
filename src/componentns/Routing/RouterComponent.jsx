import React from 'react';
import NotFound from './NotFound';
import TaskTimer from 'componentns/Task-Timer/TaskTimer';
import Info from 'componentns/Tasks/Info';
import { connect } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';

const RouterComponent = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path={['/', '/taskChart']} component={TaskTimer} />
        <Route path="/task/:id" component={Info} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};
export default connect(state => ({ tasks: state.tasks }))(RouterComponent);
