import React from 'react';
import { Button, makeStyles, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'style/NotFound.scss';

const NotFound = ({ location }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(5, 4)
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" align="center">
          Page not found
        </Typography>
        <Typography component="p" align="center">
          The requested page <code>{location.pathname}</code> does not exist. If
          you entered a web address please check it was correct.
        </Typography>
        <Link to="/" className="info-link">
          <Button id="not-found-btn">GO BACK</Button>
        </Link>
      </Paper>
    </div>
  );
};

export default NotFound;
