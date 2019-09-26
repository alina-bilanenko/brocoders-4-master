import React from "react";
import TaskLog from "componentns/Tasks/TaskLog";
import TaskChart from "componentns/Tasks/TaskChart";
import PropTypes from "prop-types";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Route, withRouter, Switch, Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { tasksStyle } from "style/tasks-style";
import { connect } from "react-redux";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }
    // console.log(props.router.location.pathname)
    /*this.state = {
      activeTab: props.router.location.pathname === "/taskChart" ? 1 : 0
    };
  }

  handleChange = (event, activeTab) => {
    this.setState({
      activeTab: activeTab
    });
  };
*/

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Tabs
            value={0}
            aria-label="simple tabs example"
            variant="fullWidth"
            className={classes.tasksTab}
            // onChange={this.handleChange}
          >
          <Tab label="TASKS LOG" />
          <Tab label="TASKS CHART"/>
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path="/" component={TaskLog} />
          <Route exact path="/taskChart" component={TaskChart} />
        </Switch>
      </div>
    );
  }
}

Tasks.propTypes = { classes: PropTypes.object.isRequired };

export default connect(state => ({ router: state.router }))(
  withStyles(tasksStyle)(Tasks)
);
