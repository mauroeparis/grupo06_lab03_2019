import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import BoxLoader from "./Loader"


function DayCard(props) {
  const icon =
    props.dayData[0].weather.icon ? (
      <img src={require(
        '../../icons/' + props.dayData[0].weather.icon + '.svg'
      )} width={120} height={120} mode='fit' />
    ) : (
      <div> </div>
    );
  return (
    <Card>
      <CardActionArea onClick={() => props.setDayDetailState(props.dayData)}>
        <CardContent>
          <Typography  color="textSecondary" gutterBottom align="center">
            {props.dayData[0].date}
          </Typography>
          {icon}
          <Typography variant="h5" component="h2" align="center">
            {props.dayData[3].weather.main}
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Min Temp: {props.dayData[0].main.temp_min}
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Max Temp: {props.dayData[7].main.temp_max}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

class Forecast extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const cards = [
      <DayCard dayData={this.props.dayOne} setDayDetailState={this.props.setDayDetailState} key={1}/>,
      <DayCard dayData={this.props.dayTwo} setDayDetailState={this.props.setDayDetailState} key={2}/>,
      <DayCard dayData={this.props.dayThree} setDayDetailState={this.props.setDayDetailState} key={3}/>,
      <DayCard dayData={this.props.dayFour} setDayDetailState={this.props.setDayDetailState} key={4}/>,
      <DayCard dayData={this.props.dayFive} setDayDetailState={this.props.setDayDetailState} key={5}/>,
    ];

    cards.forEach(function(card, index) {
      <Grid item xs={2} key={index}>
        card
      </Grid>
    });

    return (
      this.props.forecastBuffer ? (
        <div>
          <BoxLoader />
        </div>
       ) : (
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid direction="row" justify="space-between" alignItems="center" container>
            {cards}
          </Grid>
        </Grid>
      )
    );
  }
}

export default Forecast;
