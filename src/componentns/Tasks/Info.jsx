import React from "react";
import NotFound from "componentns/NotFound";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import { formatTime, formatTimeTimer } from "addition/ViewTime";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import {tasksStyle} from  "style/tasks-style";

const Info = props => {
  const { classes } = props;
  const { id } = props.match.params;
  const task = props.tasks[id];

  if (!task) return <Route component={NotFound} />;

  const nameForTableHead = ["Task", "Time start", "Time end", "Time spend"];
  const dataForTableBody = [
    task.taskName,
    formatTime(task.taskStartTime),
    formatTime(task.taskStartTime + task.taskSpendTime),
    formatTimeTimer(task.taskSpendTime)
  ];
  return (
    <div>
      <Link to="/" className={classes.infoLink}>
        <Button>GO BACK</Button>
      </Link>
      <Table>
        <TableHead>
          <TableRow>
            {nameForTableHead.map((title, index) => (
              <TableCell align="center" key={index}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className={classes.tasksTable}>
          <TableRow>
            {dataForTableBody.map((data, index) => (
              <TableCell align="center" key={index}>
                {data}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

Info.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(state => ({ tasks: state.tasks }))(withStyles(tasksStyle)(Info));
