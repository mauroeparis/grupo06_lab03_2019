/* eslint-disable class-methods-use-this */
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Current from "./Current";

class DayDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayRemainingCards = this.displayRemainingCards.bind(this);
    this.formatDayData = this.formatDayData.bind(this);
  }

  formatDayData(day) {
    const data = [];
    day.forEach(function(hour) {
      data.push({
        pressure: hour.main.pressure,
        minTemp: hour.main.temp_min,
        humidity: hour.main.humidity,
        maxTemp: hour.main.temp_max,
        currTemp: hour.main.temp,
        description: hour.weather.main,
        wind: hour.wind.speed,
        icon: hour.weather.icon,
        rain: hour.rain,
        time: hour.time
      });
    });
    return data;
  }

  displayRemainingCards(day) {
    const formattedData = this.formatDayData(day);
    const cards = [];
    formattedData.forEach(function(hour, index) {
      cards.push(<Current {...hour} key={index} />);
    });
    return cards;
  }

  render() {
    const { day } = this.props;
    const remaniningCards = this.displayRemainingCards(day);

    return (
      <Card>
        <CardContent>{remaniningCards}</CardContent>
      </Card>
    );
  }
}

export default DayDetail;