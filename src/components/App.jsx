import React from "react";

import BoxLoader from "./Loader"
import NavBar from "./NavBar"
import TestButton from "./TestButton"
import ForecastTabs from "./ForecastTabs"
import SearchButton from "./SearchButton"
import SearchBar from "./SearchBar"


class App extends React.Component {
  constructor(props) {
    super(props);

    this.openTabs = this.openTabs.bind(this);
    this.state = {tabs: false};

    this.handleBuffer = this.handleBuffer.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {show_buffer: false};
}
  openTabs() {
    this.setState({tabs: true});
  }
  handleBuffer() {
    this.setState({show_buffer: !this.state.show_buffer});
  }

  handleInput(cityName) {
    this.setState({cityName: cityName});
  }

  render() {
    var propsNeeded = {};
    return (
      <div>
        <NavBar />
        <SearchBar
          saveInput={this.handleInput}
        />
        <SearchButton
          handleBuffer={this.handleBuffer}
          cityName={this.state.cityName}
        />
        {this.state.tabs ? (
            <ForecastTabs
              {...propsNeeded}
            />
          ) : (
            <div>
              <TestButton handleClick={this.openTabs} />
              <BoxLoader />
            </div>
          )
        }
        {this.state.show_buffer &&
          <BoxLoader />
        }
      </div>
    );
  }
}

export default App;
