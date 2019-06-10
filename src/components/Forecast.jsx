/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

import PropTypes from "prop-types";
import BoxLoader from "./Loader";

function DayCard(props) {
  const { dayData, setDayDetailState } = props;
  const icon = dayData[0].weather.icon ? (
    <img
      src={require(`../../icons/${dayData[0].weather.icon}.svg`)}
      width={120}
      height={120}
      mode="fit"
      alt=""
    />
  ) : (
    <div> </div>
  );

  const minTemp = Math.min(...dayData.map(elem => elem.main.temp_min));
  const maxTemp = Math.max(...dayData.map(elem => elem.main.temp_max));

  const shortWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayIndex = shortWeekDays[new Date(dayData[0].dt * 1000).getDay()];

  return (
    <Card>
      <CardActionArea onClick={() => setDayDetailState(dayData)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom align="center">
            {`${dayIndex} ${dayData[0].date}`}
          </Typography>
          {icon}
          <Typography variant="h5" component="h2" align="center">
            {dayData[0].weather.main}
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Min Temp:
            {minTemp}
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Max Temp:
            {maxTemp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

class Forecast extends React.Component {
  render() {
    const {
      setDayDetailState,
      forecastBuffer,
      dayOne,
      dayTwo,
      dayThree,
      dayFour,
      dayFive
    } = this.props;

    const cards = [
      <DayCard
        dayData={dayOne}
        setDayDetailState={setDayDetailState}
        key={1}
      />,
      <DayCard
        dayData={dayTwo}
        setDayDetailState={setDayDetailState}
        key={2}
      />,
      <DayCard
        dayData={dayThree}
        setDayDetailState={setDayDetailState}
        key={3}
      />,
      <DayCard
        dayData={dayFour}
        setDayDetailState={setDayDetailState}
        key={4}
      />,
      <DayCard
        dayData={dayFive}
        setDayDetailState={setDayDetailState}
        key={5}
      />
    ];

    return forecastBuffer ? (
      <div>
        <BoxLoader />
      </div>
    ) : (
      <div>
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
      </div>
    );
  }
}

DayCard.propTypes = {
  dayData: PropTypes.any.isRequired,
  setDayDetailState: PropTypes.func.isRequired
};

Forecast.propTypes = {
  setDayDetailState: PropTypes.func.isRequired,
  forecastBuffer: PropTypes.any,
  dayOne: PropTypes.array.isRequired,
  dayTwo: PropTypes.array.isRequired,
  dayThree: PropTypes.array.isRequired,
  dayFour: PropTypes.array.isRequired,
  dayFive: PropTypes.array.isRequired,
}

export default Forecast;
