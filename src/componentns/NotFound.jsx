import React from "react";
import PropTypes from "prop-types";
import { Button, Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { notFoundStyle } from "style/not-found";

const NotFound = (props,{ location }) => {
  const { classes } = props;
  return (
    <div>
      <Paper>
        <Typography variant="h5" component="h3" align="center">
          Page not found
        </Typography>
        <Typography component="p" align="center">
          The requested page <code>{}</code> does not exist. If
          you entered a web address please check it was correct.
        </Typography>
        <Link to="/" className={classes.infoLink}>
          <Button className={classes.notFoundBtn}>GO BACK</Button>
        </Link>
      </Paper>
    </div>
  );
};

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(notFoundStyle)(NotFound);
