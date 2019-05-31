import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh' }} />
      </Container>
    </React.Fragment>
  );
}

function Current(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {FixedContainer()}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            xs=6
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            xs=6
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Current.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Current);
