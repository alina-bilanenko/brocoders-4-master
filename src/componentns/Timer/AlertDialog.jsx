import React from 'react';
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import {alertDialogStyle} from 'style/timer-style';

const AlertDialog = props => {
  const { classes } = props;
  return (
    <Dialog
      open={props.isTaskName}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className={classes.alertDialog}>
        {'Empty task name'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You are trying close your task without name, enter the title and try
          again!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.updateIsTaskName(false);
          }}
          autoFocus
          className={classes.alertBtn}
        >
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  isTaskName:PropTypes.bool,
  updateIsTaskName:PropTypes.func,
  classes: PropTypes.object.isRequired
}

export default withStyles(alertDialogStyle)(AlertDialog);
