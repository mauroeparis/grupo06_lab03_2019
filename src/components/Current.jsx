import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Imports from FixedContainer
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Current extends React.Component  {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const icon =
      this.props.icon ? (
        <img src={require('../../icons/' + this.props.icon + '.svg')} />
      ) : (
        <div> </div>
      );
    return (
      <div>
        <Grid container item xs={12}>
          <Grid container item xs={3} spacing={3}>
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <Grid item xs={4}>
              <Paper>
                {icon}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                {'Pressure: '} {this.props.pressure}
              </Paper>
              <Paper>
                {'Min Temp: '} {this.props.minTemp}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                {'Humidity: '} {this.props.humidity}
              </Paper>
              <Paper>
                {'Max Temp: '} {this.props.maxTemp}
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
              <Paper>
                {this.props.currTemp} {"°C"}
              </Paper>
              <Paper>
                {"Description: "} {this.props.description}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                {"Sunrise: "} {this.props.sunrise}
              </Paper>
              <Paper>
                {"Wind: "} {this.props.wind}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                {"Sunset: "} {this.props.sunset}
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
}


export default Current;
