import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Current from "./Current"


class DayDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayRemainingCards = this.displayRemainingCards.bind(this);
    this.formatDayData = this.formatDayData.bind(this);
  }

  formatDayData(day) {
    var data = []
    day.forEach(function(hour) {
      data.push({
        "pressure": hour.main.pressure,
        "minTemp": hour.main.temp_min,
        "humidity": hour.main.humidity,
        "maxTemp": hour.main.temp_max,
        "currTemp": hour.main.temp,
        "description": hour.weather.main,
        "wind": hour.wind.speed,
        "icon": hour.weather.icon,
        "rain": hour.rain,
        "time": hour.time,
      });
    });
    return data
  }

  displayRemainingCards(day) {
    const formattedData = this.formatDayData(day);
    var cards = [];
    formattedData.forEach(function(hour, index) {
      cards.push(<Current {...hour} key={index} />)
    });
    return cards
  }

  render () {
    const remaniningCards = this.displayRemainingCards(this.props.day);

    return (
      <Card>
        <CardContent>
          {remaniningCards}
        </CardContent>
      </Card>
    );
  }
}

export default DayDetail;
