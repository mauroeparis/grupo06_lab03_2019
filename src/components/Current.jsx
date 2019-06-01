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
          style={{ backgroundColor: '#cfe8fc', height: '20vh' }} />
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

function FormRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          {FixedContainer()}
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          {'Pressure'} {weatherinfo["preasure"]}
        </Paper>
        <Paper className={classes.paper}>
          {'Min Temp'} {weatherinfo["minTemp"]}
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          {'Humidity'} {weatherinfo["humidity"]}
        </Paper>
        <Paper className={classes.paper}>
          {'Max Temp'} {weatherinfo["maxTemp"]}
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

var weatherinfo = {
  description1 : 10,
  description2 : 30,
  preasure : 10,
  minTemp : 30,
  sunrise : 10,
  wind : 30,
  humidity : 30,
  maxTemp : 30,
  maxTemp : 30,
  sunset : 10,
};

function Current(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            <FormRow classes={classes} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper} >
              {"Description 1:"} {weatherinfo["description1"]}
            </Paper>
            <Paper className={classes.paper}>
              {"Description 2: "} {weatherinfo["description2"]}
          </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              {"Sunrise"} {weatherinfo["sunrise"]}
            </Paper>
            <Paper className={classes.paper}>
              {"Wind"} {weatherinfo["wind"]}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              {"Sunset"} {weatherinfo["sunset"]}
            </Paper>
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
