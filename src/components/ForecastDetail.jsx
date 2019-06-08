/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class SimpleCard extends React.Component {
  render() {
    const { icon } = this.props ? (
      <img
        src={require(`../../icons/${this.props.icon}.svg`)}
        alt="Forecast detail icon"
        width={150}
        height={150}
        mode="fit"
      />
    ) : (
      <div> </div>
    );

    const paperStyle = {
      textAlign: "center",
      color: "grey",
      padding: 8
    };

    const {
      pressure,
      minTemp,
      maxTemp,
      humidity,
      description,
      currTemp,
      sunrise,
      wind,
      sunset
    } = this.props;
    return (
      <Card>
        <CardContent>
          <Grid container item xs={12} style={{ marginTop: "50px" }}>
            <Grid container item xs={3} spacing={3} />
            <Grid container item xs={6} spacing={3}>
              <Grid item xs={4}>
                <Paper style={{ textAlign: "center" }}>{icon}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={paperStyle}>{`Pressure: ${pressure} hpm`}</Paper>
                <Paper style={paperStyle}>{`Min Temp: ${minTemp} °C`}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={paperStyle}>{`Humidity: ${humidity} %`}</Paper>
                <Paper style={paperStyle}>{`Max Temp: ${maxTemp} °C`}</Paper>
              </Grid>
            </Grid>
            <Grid container item xs={3} spacing={3} />
            <Grid container spacing={1}>
              <Grid container item xs={3} spacing={3} />
              <Grid container item xs={6} spacing={3}>
                <Grid item xs={4}>
                  <Paper style={paperStyle}>{`${currTemp} °C`}</Paper>
                  <Paper style={paperStyle}>{description}</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper style={paperStyle}>{`Sunrise: ${sunrise}`}</Paper>
                  <Paper style={paperStyle}>{`Wind: ${wind} Km/h`}</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper style={paperStyle}>{`Sunset: ${sunset}`}</Paper>
                </Grid>
              </Grid>
              <Grid container item xs={3} spacing={3} />
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
  render() {
    return (
      <Card>
        <CardContent>
          <Typography align="center">
            {"Forecast Detail for: "}
            {"TODO: this day "}
            {"TODO:this date"}
          </Typography>
          <SimpleCard />
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default MultipleCard;
