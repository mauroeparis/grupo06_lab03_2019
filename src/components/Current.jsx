import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// eslint-disable-next-line react/prefer-stateless-function
class Current extends React.Component {
  render() {
    const {
      icon,
      time,
      pressure,
      minTemp,
      humidity,
      maxTemp,
      rain,
      currTemp,
      description,
      sunrise,
      wind,
      sunset
    } = this.props;

    const paperStyle = {
      textAlign: "center",
      color: "grey",
      padding: 8
    };

    const displayIcon = icon ? (
      <img
        src={require(`../../icons/${icon}.svg`)}
        alt=""
        width={150}
        height={150}
        mode="fit"
      />
    ) : (
      <div> </div>
    );
    return (
      <div>
        <Grid container item xs={12} style={{ marginTop: "50px" }}>
          <Grid container item xs={3} spacing={3} />
          <Grid container item xs={6} spacing={3}>
            <Grid item xs={4}>
              <Paper style={{ textAlign: "center" }}>
                {time && <div>{time}</div>}
                {displayIcon}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={paperStyle}>{`Pressure: ${pressure} hpm`}</Paper>
              <Paper style={paperStyle}>{`Min Temp: ${minTemp} °C`}</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={paperStyle}>{`Humidity: ${humidity} %`}</Paper>
              <Paper style={paperStyle}>{`Max Temp: ${maxTemp} °C`}</Paper>
              {rain && <Paper style={paperStyle}>{`Rain: ${rain} mm`}</Paper>}
            </Grid>
          </Grid>
          <Grid container item xs={3} spacing={3} />
          <Grid container spacing={1}>
            <Grid container item xs={3} spacing={3} />
            <Grid container item xs={3} spacing={3} />
            <Grid container spacing={1}>
              <Grid container item xs={3} spacing={3} />
              <Grid container item xs={6} spacing={3}>
                <Grid item xs={4}>
                  <Paper style={paperStyle}>{`${currTemp} °C`}</Paper>
                  <Paper style={paperStyle}>{description}</Paper>
                </Grid>
                <Grid item xs={4}>
                  {sunrise && (
                    <Paper style={paperStyle}>{`Sunrise: ${sunrise}`}</Paper>
                  )}
                  <Paper style={paperStyle}>{`Wind: ${wind} Km/h`}</Paper>
                </Grid>
                <Grid item xs={4}>
                  {sunset && (
                    <Paper style={paperStyle}>{`Sunset: ${sunset}`}</Paper>
                  )}
                </Grid>
              </Grid>
              <Grid container item xs={3} spacing={3} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Current;
