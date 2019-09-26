import React from "react";
import AlertDialog from "componentns/Timer/AlertDialog";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TextField, Button, Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { formatTimeTimer } from "addition/ViewTime";
import {
  ADD_TASKS
} from "constants/tasks-constants";
import {
  ACTIVE_TIMER,
  INACTIVE_TIMER,
  CHANGE_TASK_NAME,
  START_TIMER,
  STOP_TIMER,
  UPDATE_TIMER,
  START_ACTIVE_TIMER
} from "constants/timer-constants";
import { actionCreator } from "actions/action";
import {
  getStatusTimer,
  getStartTimer,
  getCurrentTime,
  getNameTask
} from "reducers/selectors";
import { timerStyles } from "style/timer-style";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.setTimer = null;
    this.state = {
      isTaskName: false
    };
    if (this.props.statusTimer === ACTIVE_TIMER) {
      console.log(this.props)
      this.props.actionCreator(START_ACTIVE_TIMER, {
        currentTime: Date.now() - this.props.startTimer
      });
      this.tickOfTimer();
    }
  }

  tickOfTimer = () => {
    this.setTimer = setInterval(() => {
      this.props.actionCreator(UPDATE_TIMER, {
        currentTime: Date.now() - this.props.startTimer
      });
    }, 1000);
  };

  onStartTimer = () => {
    if (this.props.statusTimer === INACTIVE_TIMER) {
      this.props.actionCreator(START_TIMER, { startTimer: Date.now() });
    }
    this.tickOfTimer();
  };

  onStopTimer = () => {
    if (!this.props.nameTask)
      return this.setState({ isTaskName: !this.state.isTaskName });

    this.props.actionCreator(ADD_TASKS, {
      taskId: Date.now(),
      taskName: this.props.nameTask,
      taskStartTime: this.props.startTimer,
      taskSpendTime: this.props.currentTime
    });
    this.props.actionCreator(STOP_TIMER);
    clearInterval(this.setTimer);
  };

  updateIsTaskName = value => {
    this.setState({ isTaskName: value });
  };

  takeTaskName = e => {
    this.props.actionCreator(CHANGE_TASK_NAME, {
      nameTask: e.target.value
    });
  };
 
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.timer}>
        <TextField
          className={classes.timerTextField}
          placeholder="Name of your task"
          onChange={e => this.takeTaskName(e)}
          value={this.props.nameTask}
        />
        <Avatar className={classes.timerAvatar}>
          {formatTimeTimer(this.props.currentTime)}
        </Avatar>
        <Button
          onClick={
            this.props.statusTimer === INACTIVE_TIMER
              ? this.onStartTimer
              : this.onStopTimer
          }
          className={classes.timerBtn}
        >
          {this.props.statusTimer === INACTIVE_TIMER ? "START" : "STOP"}
        </Button>
        <AlertDialog
          isTaskName={this.state.isTaskName}
          updateIsTaskName={this.updateIsTaskName}
        />
      </div>
    );
  }
}

Timer.propTypes = {
  statusTimer: PropTypes.string,
  currentTime: PropTypes.number,
  nameTask: PropTypes.string,
  startTimer: PropTypes.number,
  actionCreator: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default connect(
  state => {
    return {
      statusTimer: getStatusTimer(state),
      startTimer: getStartTimer(state),
      currentTime: getCurrentTime(state),
      nameTask: getNameTask(state)
    };
  },
  { actionCreator }
)(withStyles(timerStyles)(Timer));
