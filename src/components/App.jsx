import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import BoxLoader from "./Loader";
import NavBar from "./NavBar";
import ForecastTabs from "./ForecastTabs";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.openTabs = this.openTabs.bind(this);
    this.handleBuffer = this.handleBuffer.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setWeatherStatus = this.setWeatherStatus.bind(this);
    this.state = {
      show_buffer: false,
      tabs: false
    };
  }

  setWeatherStatus(data) {
    this.setState(data);
  }

  openTabs() {
    this.setState({ tabs: true });
  }

  handleBuffer() {
    this.setState({ show_buffer: !this.state.show_buffer });
  }

  handleInput(cityName) {
    this.setState({ cityName });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Grid container item xs={12} alignItems="center">
          <Grid container item xs={4} />
          <Grid container item xs={4}>
            <Grid item xs={10} style={{ marginTop:"1px" }}>
              <SearchBar saveInput={this.handleInput} />
            </Grid>
            <Grid item xs={2}>
              <Box mt={2} ml={1}>
                <SearchButton
                  handleBuffer={this.handleBuffer}
                  cityName={this.state.cityName}
                  openTabs={this.openTabs}
                  setWeatherStatus={this.setWeatherStatus}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {this.state.tabs ? (
          <ForecastTabs
            minTemp={this.state.minTemp}
            maxTemp={this.state.maxTemp}
            humidity={this.state.humidity}
            currTemp={this.state.currTemp}
            pressure={this.state.pressure}
            wind={this.state.wind}
            icon={this.state.icon}
            description={this.state.description}
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            cityName={this.state.cityName}
          />
        ) : (
          <div>{this.state.show_buffer && <BoxLoader />}</div>
        )}
      </div>
    );
  }
}

export default App;
