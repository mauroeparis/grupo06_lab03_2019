import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class Current extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const paperStyle = {
      textAlign: "center",
      color: "grey",
      padding: 8
    };

    const icon =
      this.props.icon ? (
        <img
          src={require("../../icons/" + this.props.icon + ".svg")}
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
        <Grid container item xs={12} style={{marginTop:"50px"}}>
          <Grid container item xs={3} spacing={3} />
          <Grid container item xs={6} spacing={3}>
            <Grid item xs={4}>
              <Paper style={{textAlign: 'center'}} >
                {icon}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={paperStyle} >
                {'Pressure: '} {this.props.pressure + " hpm"}
              </Paper>
              <Paper style={paperStyle} >
                {'Min Temp: '} {this.props.minTemp + " °C"}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={paperStyle} >
                {'Humidity: '} {this.props.humidity + " %"}
              </Paper>
              <Paper style={paperStyle} >
                {'Max Temp: '} {this.props.maxTemp + " °C"}
              </Paper>
            </Grid>
          </Grid>
          <Grid container item xs={3} spacing={3} />
          <Grid container spacing={1}>
            <Grid container item xs={3} spacing={3} />
            <Grid container item xs={6} spacing={3}>
              <Grid item xs={4}>
                <Paper style={paperStyle}>
                  {this.props.currTemp} {"°C"}
                </Paper>
                <Paper style={paperStyle} >
                  {this.props.description}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={paperStyle} >
                  {"Sunrise: "} {this.props.sunrise}
                </Paper>
                <Paper style={paperStyle} >
                  {"Wind: "} {this.props.wind + ' Km/h'}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={paperStyle}>
                  {"Sunset: "} {this.props.sunset}
                </Paper>
              </Grid>
            </Grid>
            <Grid container item xs={3} spacing={3} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Current;
