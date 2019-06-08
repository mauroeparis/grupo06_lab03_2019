import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import BoxLoader from "./Loader";

const axios = require("axios");
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "5173f98ffa679c9f72e89391881592a0";

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

  const minTemp = Math.min(...(props.dayData.map((elem) => elem.main.temp_min)));
  const maxTemp = Math.max(...(props.dayData.map((elem) => elem.main.temp_max)));

  return (
    <Card>
      <CardActionArea onClick={() => props.setDayDetailState(props.dayData)}>
        <CardContent>
          <Typography  color="textSecondary" gutterBottom align="center">
            {props.dayData[0].date}
          </Typography>
          {icon}
          <Typography variant="h5" component="h2" align="center">
            {props.dayData[0].weather.main}
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Min Temp: {minTemp}
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Max Temp: {maxTemp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

class Forecast extends React.Component {
  constructor(props) {
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
      </Grid>;
    });

    return (
      this.props.forecastBuffer ? (
        <div>
          <BoxLoader />
        </div>
      ) : (
        <div>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid direction="row" justify="space-between" alignItems="center" container>
              {cards}
            </Grid>
          </Grid>
        </div>
      )
    );
  }
}

export default Forecast;
