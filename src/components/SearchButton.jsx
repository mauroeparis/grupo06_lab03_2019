/* eslint-disable class-methods-use-this */
import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { dateFormat, timeFormat } from "../utils";

const axios = require("axios");

const remove = require("lodash.remove");

const API_KEY = "5173f98ffa679c9f72e89391881592a0";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const BASE_FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.formatNextDaysData = this.formatNextDaysData.bind(this);
  }

  getUsefulData(response) {
    const sunrise = new Date(parseInt(response.data.sys.sunrise) * 1000);
    const sunset = new Date(parseInt(response.data.sys.sunset) * 1000);
    const data = {};
    data.minTemp = response.data.main.temp_min;
    data.maxTemp = response.data.main.temp_max;
    data.humidity = response.data.main.humidity;
    data.currTemp = response.data.main.temp;
    data.pressure = response.data.main.pressure;
    data.wind = response.data.wind.speed;
    data.icon = response.data.weather[0].icon;
    data.description = response.data.weather[0].main;
    data.sunrise = timeFormat(sunrise);
    data.sunset = timeFormat(sunset);
    return data;
  }

  formatNextDaysData(dayList) {
    dayList.forEach(day => {
      day.weather = day.weather[0];
      if (day.rain) {
        day.rain = day.rain["3h"];
      }
      const dateObj = new Date(parseInt(day.dt) * 1000);
      day.date = dateFormat(dateObj);
      day.time = timeFormat(dateObj);
      delete day.main.sea_level;
      delete day.main.grnd_level;
      delete day.weather.id;
      delete day.clouds;
      delete day.wind.deg;
      delete day.sys;
      delete day.dt_txt;
    });

    return {
      dayOne: remove(dayList, elem => {
        return elem.date === dayList[0].date;
      }),
      dayTwo: remove(dayList, elem => {
        return elem.date === dayList[0].date;
      }),
      dayThree: remove(dayList, elem => {
        return elem.date === dayList[0].date;
      }),
      dayFour: remove(dayList, elem => {
        return elem.date === dayList[0].date;
      }),
      dayFive: remove(dayList, elem => {
        return elem.date === dayList[0].date;
      })
    };
  }

  handleClick() {
    const {
      handleCurrentBuffer,
      cityName,
      setWeatherState,
      setForecastState,
      openTabs
    } = this.props;

    handleCurrentBuffer();
    axios
      .get(`${BASE_WEATHER_URL}?q=${cityName}&units=metric&appid=${API_KEY}`)
      .then(weatherResponse => {
        setWeatherState(this.getUsefulData(weatherResponse));
        axios
          .get(
            `${BASE_FORECAST_URL}?q=${cityName}&units=metric&appid=${API_KEY}`
          )
          .then(forecastResponse => {
            setForecastState(
              this.formatNextDaysData(forecastResponse.data.list)
            );

            handleCurrentBuffer();
            openTabs();
          })
          .catch(response => {
            alert(response);
          });
      })
      .catch(response => {
        alert(response);
        handleCurrentBuffer();
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

SearchButton.propTypes = {
  handleCurrentBuffer: PropTypes.func.isRequired,
  cityName: PropTypes.string,
  setWeatherState: PropTypes.func.isRequired,
  setForecastState: PropTypes.func.isRequired,
  openTabs: PropTypes.func.isRequired
};

export default SearchButton;
