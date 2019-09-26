import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import { actionCreator } from "actions/action";
import { formatTime, formatTimeTimer } from "addition/ViewTime";
import { Link } from "react-router-dom";
import { DELETE_TASKS } from "constants/tasks-constants";
import { tasksStyle } from "style/tasks-style";
import { withStyles } from "@material-ui/styles";

const TaskLog = props => {
  const { tasks } = props;
  const { classes } = props; 
  const nameForHead = [
    "№",
    "Task",
    "Time start",
    "Time end",
    "Time spend",
    "Info",
    "Delete"
  ];
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow className={classes.tableHead}>
            {nameForHead.map((name, index) => (
              <TableCell align="center" key={index}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className={classes.tasksTable}>
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{task.taskName}</TableCell>
              <TableCell align="center">
                {formatTime(task.taskStartTime)}
              </TableCell>
              <TableCell align="center">
                {formatTime(task.taskStartTime + task.taskSpendTime)}
              </TableCell>
              <TableCell align="center">
                {formatTimeTimer(task.taskSpendTime)}
              </TableCell>
              <TableCell align="center" className={classes.infoLink}>
                <Link to={`/task/${index}`}>
                  <Button>INFO</Button>
                </Link>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => props.actionCreator(DELETE_TASKS, index)}
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

TaskLog.propTypes = {
  tasks: PropTypes.array,
  actionCreator: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default connect(
  state => ({ tasks: state.tasks }),
  { actionCreator }
)(withStyles(tasksStyle)(TaskLog));
