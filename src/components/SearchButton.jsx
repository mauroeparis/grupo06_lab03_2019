import React from "react";
import Button from "@material-ui/core/Button";

const axios = require("axios");

const API_KEY = "5173f98ffa679c9f72e89391881592a0";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getUsefulData(response) {
    const data = {};
    data.minTemp = response.data.main.temp_min;
    data.maxTemp = response.data.main.temp_max;
    data.humidity = response.data.main.humidity;
    data.currTemp = response.data.main.temp;
    data.pressure = response.data.main.pressure;
    data.wind = response.data.wind.speed;
    data.icon = response.data.weather[0].icon;
    data.description = response.data.weather[0].main;
    data.sunrise = response.data.sys.sunrise;
    data.sunset = response.data.sys.sunset;
    return data;
  }

  handleClick() {
    this.props.handleBuffer();
    axios.get(
      BASE_URL+'?q='+this.props.cityName+'&units=metric&appid='+API_KEY
    ).then(response => {
      this.props.handleBuffer();
      this.props.openTabs();
      this.props.setWeatherStatus(this.getUsefulData(response));
    }).catch(response => {
      this.props.handleBuffer();
    });
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Check weather
        </Button>
      </div>
    );
  }
}

export default SearchButton;
