import React from "react";
import NotFound from "componentns/NotFound";
import TaskTimer from "containers/TaskTimer";
import Info from "componentns/Tasks/Info";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

const RouterComponent = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={TaskTimer} />
        <Route exact path="/taskChart" component={TaskTimer} />
        <Route path="/task/:id" component={Info} />
        <Route component={NotFound} />
        <Redirect exact path="/" />
      </Switch>
    </ConnectedRouter>
  );
};
RouterComponent.propTypes = {
  history: PropTypes.object
};

export default connect(state => ({ router: state.router }))(RouterComponent);
