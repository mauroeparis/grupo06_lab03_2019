import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import BoxLoader from "./Loader"
import NavBar from "./NavBar"
import MainTabs from "./MainTabs"
import SearchButton from "./SearchButton"
import SearchBar from "./SearchBar"


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
      tabs: false,
    };
  }

  openTabs() {
    this.setState({tabs: true});
  }

  handleCurrentBuffer() {
    this.setState({showCurrentBuffer: !this.state.showCurrentBuffer});
  }

  handleInput(cityName) {
    this.setState({cityName: cityName});
  }

  setWeatherState(data) {
    this.setState(data);
  }

  setForecastState(data) {
    this.setState(data);
  }

  render() {
    return (
      <div>
        <NavBar />
            <Grid container item xs={12} alignItems="center">
              <Grid container item xs={4}>
              </Grid>
              <Grid container item xs={4}>
                <Grid item xs={10} style={{marginTop:'1px'}}>
                  <SearchBar
                    saveInput={this.handleInput}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Box mt={2} ml={1}>
                    <SearchButton
                      handleCurrentBuffer={this.handleCurrentBuffer}
                      cityName={this.state.cityName}
                      openTabs={this.openTabs}
                      setWeatherState={this.setWeatherState}
                      setForecastState={this.setWeatherState}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
        {this.state.tabs ? (
            <MainTabs
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
              forecastBuffer={this.state.showForecastBuffer}
              dayOne={this.state.dayOne}
              dayTwo={this.state.dayTwo}
              dayThree={this.state.dayThree}
              dayFour={this.state.dayFour}
              dayFive={this.state.dayFive}
            />
         ) : (
           <div>
        {this.state.showCurrentBuffer &&
          <BoxLoader />
        }
        </div>
    )}
    </div>
    );
  }
}

export default App;
