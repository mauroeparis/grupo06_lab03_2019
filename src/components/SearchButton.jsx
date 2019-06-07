import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const axios = require('axios');
const API_KEY='5173f98ffa679c9f72e89391881592a0';
const BASE_WEATHER_URL='https://api.openweathermap.org/data/2.5/weather'
const BASE_FORECAST_URL='https://api.openweathermap.org/data/2.5/forecast';



class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.nextDaysForecast = this.nextDaysForecast.bind(this);
    this.formatNextDaysData = this.formatNextDaysData.bind(this);
  }

  nextDaysForecast() {

  }

  formatNextDaysData(dayList) {
    dayList.forEach(function(day) {
      day.weather = day.weather[0]
      const dateObj = new Date(parseInt(day.dt)*1000);
      day.date = dateObj.getDate() + "/" + dateObj.getMonth() + 1;
      day.time = ("0" + dateObj.getHours()).slice(-2) + ":" + ("0" + dateObj.getMinutes()).slice(-2);
      delete day.main.sea_level
      delete day.main.grnd_level
      delete day.weather.id
      delete day.clouds
      delete day.wind.deg
      delete day.sys
      delete day.dt_txt
    });
    return {
      dayOne: dayList.slice(0, 8),
      dayTwo: dayList.slice(8, 16),
      dayThree: dayList.slice(16, 24),
      dayFour: dayList.slice(24, 32),
      dayFive: dayList.slice(32, 40),
    };
  }

  handleClick() {
    this.props.handleCurrentBuffer();
    axios.get(
      BASE_WEATHER_URL+'?q='+this.props.cityName+'&units=metric&appid='+API_KEY
    ).then(weatherResponse => {
        this.props.setWeatherState(
          this.getUsefulData(weatherResponse)
        );
      axios.get(
        BASE_FORECAST_URL+'?q='+this.props.cityName+'&units=metric&appid='+API_KEY
      ).then(forecastResponse => {
        this.props.setForecastState(
          this.formatNextDaysData(forecastResponse.data.list)
        );

        this.props.handleCurrentBuffer();
        this.props.openTabs();
      }).catch(response => {
        console.log(response);
      })
    }).catch(response => {
      console.log(response);
      this.props.handleCurrentBuffer();
    })
  }

  getUsefulData(response) {
    const sunrise = new Date(parseInt(response.data.sys.sunrise)*1000);
    const sunset = new Date(parseInt(response.data.sys.sunset)*1000);
    var data = {};
    data.minTemp = response.data.main.temp_min;
    data.maxTemp = response.data.main.temp_max;
    data.humidity = response.data.main.humidity;
    data.currTemp = response.data.main.temp;
    data.pressure = response.data.main.pressure;
    data.wind = response.data.wind.speed;
    data.icon = response.data.weather[0].icon;
    data.description = response.data.weather[0].main;
    data.sunrise = ("0" + sunrise.getHours()).slice(-2) + ":" + ("0" + sunrise.getMinutes()).slice(-2);
    data.sunset = ("0" + sunset.getHours()).slice(-2) + ":" + ("0" + sunset.getMinutes()).slice(-2);
    return data;
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary"
          onClick={this.handleClick}>
          Check weather
        </Button>
      </div>
    );
  }
}

export default SearchButton;
