import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import BoxLoader from "./Loader";

const axios = require("axios");

const API_KEY = "5173f98ffa679c9f72e89391881592a0";

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

function DayCard(props) {
  const icon = props.dayData[0].weather.icon ? (
    <img
      src={require(`../../icons/${props.dayData[0].weather.icon}.svg`)}
      width={120}
      height={120}
      mode="fit"
      alt=""
    />
  ) : (
    <div> </div>
  );
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography color="textSecondary" gutterBottom align="center">
            {props.dayData[0].dt}
          </Typography>
          {icon}
          <Typography variant="h5" component="h2" align="center">
            {props.dayData[3].weather.main}
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Min Temp:
            {props.dayData[0].main.temp_min}
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Max Temp:
            {props.dayData[7].main.temp_max}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buff: true
    };
  }

  componentDidMount() {
    axios
      .get(`${BASE_URL}?q=${this.props.cityName}&units=metric&appid=${API_KEY}`)
      .then(response => {
        this.formatForecastData(response.data.list);
        this.setState({ buff: false });
      })
      .catch(() => {
        this.setState({ buff: false });
      });
  }

  formatForecastData(dayList) {
    dayList.forEach(function(day) {
      day.weather = day.weather[0];
      const dateObj = new Date(day.dt);
      day.dt = `${dateObj.getDate()}/${dateObj.getMonth()}${1}`;
      delete day.main.sea_level;
      delete day.main.grnd_level;
      delete day.weather.id;
      delete day.clouds;
      delete day.wind.deg;
      delete day.sys;
      delete day.dt_txt;
    });
    this.setState({
      dayOne: dayList.slice(0, 8),
      dayTwo: dayList.slice(8, 16),
      dayThree: dayList.slice(16, 24),
      dayFour: dayList.slice(24, 32),
      dayFive: dayList.slice(32, 40)
    });
  }

  render() {
    const cards = [
      <DayCard dayData={this.state.dayOne} key={1} />,
      <DayCard dayData={this.state.dayTwo} key={2} />,
      <DayCard dayData={this.state.dayThree} key={3} />,
      <DayCard dayData={this.state.dayFour} key={4} />,
      <DayCard dayData={this.state.dayFive} key={5} />
    ];

    cards.forEach(function(card, index) {
      <Grid item xs={2} key={index}>
        card
      </Grid>;
    });

    return this.state.buff ? (
      <div>
        <BoxLoader />
      </div>
    ) : (
      <Grid container>
        <Grid item xs={1} />
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          container
        >
          {cards}
        </Grid>
      </Grid>
    );
  }
}

export default Forecast;
