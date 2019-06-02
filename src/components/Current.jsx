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

    const paperStyle = {
      textAlign: 'center',
      color :'grey',
      padding : 8
    };

    console.log(this.props);
    const icon =
      this.props.icon ? (
        <img src={require(
          '../../icons/' + this.props.icon + '.svg'
        )} width={150} height={150} mode='fit' />
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
              <Paper style={{textAlign: 'center'}} >
                {icon}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={paperStyle} >
                {'Pressure: '} {this.props.pressure}
              </Paper>
              <Paper style={paperStyle} >
                {'Min Temp: '} {this.props.minTemp}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={paperStyle} >
                {'Humidity: '} {this.props.humidity}
              </Paper>
              <Paper style={paperStyle} >
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
              <Paper style={paperStyle}>
                {this.props.currTemp} {"°C"}
              </Paper>
              <Paper style={paperStyle} >
                {this.props.description}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={paperStyle} >
                {"Sunrise: "} {this.props.sunrise}
              </Paper>
              <Paper style={paperStyle} >
                {"Wind: "} {this.props.wind}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={paperStyle} >
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
