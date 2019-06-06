import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class SimpleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const icon =
    this.props.icon ? (
      <img src={require(
        '../../icons/' + this.props.icon + '.svg'
      )} width={150} height={150} mode='fit' />
    ) : (
      <div> </div>
    );

    const paperStyle = {
      textAlign: 'center',
      color :'grey',
      padding : 8
    };

    return (
      <Card>
        <CardContent>
              <Grid container item xs={12} style={{marginTop:'50px'}}>
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
                      {'Pressure: '} {this.props.pressure + ' hpm'}
                    </Paper>
                    <Paper style={paperStyle} >
                      {'Min Temp: '} {this.props.minTemp + ' °C'}
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper style={paperStyle} >
                      {'Humidity: '} {this.props.humidity + ' %'}
                    </Paper>
                    <Paper style={paperStyle} >
                      {'Max Temp: '} {this.props.maxTemp + ' °C'}
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
                      {"Wind: "} {this.props.wind + ' Km/h'}
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
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}


class MultipleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log("hola");

    return (
      <Card>
        <CardContent>
          <Typography align="center">
            {"Forecast Detail for: " + "TODO: this day " + "TODO:this date"}
          </Typography>
          {displayRemainingCards(this.props.day)}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

// Falta arreglar parametros de entrada
function displayRemainingCards(props) {
  // TODO : REMOVE // Constant setted for testing
  const dayClicked = 1;

  // Calculate
  var date = new Date().getHours()
  const forecastCardsLeft = Math.trunc((24 - date) / 3 );
  const propsArray = [];
  for (var i = 0 ; i < forecastCardsLeft ; i++) {
    propsArray.push(i);
  }
  return (
    <div>
      {propsArray.map(i => {
        return <div><SimpleCard i/></div>
    })}
    </div>
  )
}

export default MultipleCard;
