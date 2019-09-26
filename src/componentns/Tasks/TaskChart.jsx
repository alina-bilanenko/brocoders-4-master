import React from 'react';
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { generateTasks } from 'actions/action';
import { dateTaskChart } from 'addition/DateTaskChart';
import { withStyles } from '@material-ui/styles';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { tasksStyle } from  "style/tasks-style";

const TaskChart = props => {
  const date = dateTaskChart(props.tasks);
  const { classes } = props; 
  return (
    <div>
      <ResponsiveContainer height={400}>
        <BarChart
          data={date}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="minutes" fill="#4b59c4" />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
      <div className={classes.generateBtn}>
        <Button onClick={props.generateTasks}>GENERATE</Button>
      </div>
    </div>
  );
};

TaskChart.propTypes = {
  tasks:PropTypes.array,
  classes: PropTypes.object.isRequired
}


export default connect(
  state => ({ tasks: state.tasks }),
  { generateTasks }
)(withStyles(tasksStyle)(TaskChart));
