import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Imports from FixedContainer
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


// --------------------------------------------------------------------------
// WeatherIcon
// --------------------------------------------------------------------------

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
        <Typography component="div"
          style={{ backgroundColor: '#cfe8fc', height: '12vh' }} />
      </Container>
    </React.Fragment>
  );
}


// --------------------------------------------------------------------------
// Current - Nested Grid
// --------------------------------------------------------------------------


const gridStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
});

function Current(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container item xs={12}>
        <Grid container item xs={3} spacing={3}>
        </Grid>
        <Grid container item xs={6} spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              {FixedContainer()}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} >
              {'Pressure'} {props.weatherinfo["pressure"]}
            </Paper>
            <Paper className={classes.paper}>
              {'Min Temp'} {props.weatherinfo["minTemp"]}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              {'Humidity'} {props.weatherinfo["humidity"]}
            </Paper>
            <Paper className={classes.paper}>
              {'Max Temp'} {props.weatherinfo["maxTemp"]}
            </Paper>
          </Grid>
        </Grid>
          <Grid container item xs={3} spacing={3}>
          </Grid>
      <Grid container spacing={1}>
        <Grid container item xs={3} spacing={3}>
        </Grid>
        <Grid container item xs={6} spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper} >
              {"Description 1:"} {props.weatherinfo["description1"]}
            </Paper>
            <Paper className={classes.paper}>
              {"Description 2: "} {props.weatherinfo["description2"]}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              {"Sunrise"} {props.weatherinfo["sunrise"]}
            </Paper>
            <Paper className={classes.paper}>
              {"Wind"} {props.weatherinfo["wind"]}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              {"Sunset"} {props.weatherinfo["sunset"]}
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={3} spacing={3}>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

Current.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(gridStyles)(Current);
