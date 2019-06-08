import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import BoxLoader from "./Loader";
import NavBar from "./NavBar";
import MainTabs from "./MainTabs";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.openTabs = this.openTabs.bind(this);
    this.handleCurrentBuffer = this.handleCurrentBuffer.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setWeatherState = this.setWeatherState.bind(this);
    this.setForecastState = this.setForecastState.bind(this);
    this.state = {
      showCurrentBuffer: false,
      showForecastBuffer: false,
      tabs: false
    };
  }

  setWeatherStatus(data) {
    this.setState(data);
  }

  setForecastState(data) {
    this.setState(data);
  }

  setWeatherState(data) {
    this.setState(data);
  }

  handleInput(cityName) {
    this.setState({ cityName });
  }

  handleCurrentBuffer() {
    this.setState({ showCurrentBuffer: !this.state.showCurrentBuffer });
  }

  openTabs() {
    this.setState({ tabs: true });
  }

  render() {
    const {
      minTemp,
      maxTemp,
      humidity,
      currTemp,
      pressure,
      wind,
      icon,
      description,
      sunrise,
      sunset,
      cityName,
      showForecastBuffer,
      dayOne,
      dayTwo,
      dayThree,
      dayFour,
      dayFive,
      tabs,
      showCurrentBuffer
    } = this.state;

    return (
      <div>
        <NavBar />
        <Grid container item xs={12} alignItems="center">
          <Grid container item xs={4} />
          <Grid container item xs={4}>
            <Grid item xs={10} style={{ marginTop: "1px" }}>
              <SearchBar saveInput={this.handleInput} />
            </Grid>
            <Grid item xs={2}>
              <Box mt={2} ml={1}>
                <SearchButton
                  handleCurrentBuffer={this.handleCurrentBuffer}
                  cityName={cityName}
                  openTabs={this.openTabs}
                  setWeatherState={this.setWeatherState}
                  setForecastState={this.setWeatherState}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {tabs ? (
          <MainTabs
            minTemp={minTemp}
            maxTemp={maxTemp}
            humidity={humidity}
            currTemp={currTemp}
            pressure={pressure}
            wind={wind}
            icon={icon}
            description={description}
            sunrise={sunrise}
            sunset={sunset}
            cityName={cityName}
            forecastBuffer={showForecastBuffer}
            dayOne={dayOne}
            dayTwo={dayTwo}
            dayThree={dayThree}
            dayFour={dayFour}
            dayFive={dayFive}
          />
        ) : (
          <div>{showCurrentBuffer && <BoxLoader />}</div>
        )}
      </div>
    );
  }
}

export default App;
