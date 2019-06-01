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
    this.handleBuffer = this.handleBuffer.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      show_buffer: false,
      tabs: false,
    };
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
          openTabs={this.openTabs}
        />
        {this.state.tabs ? (
            <ForecastTabs
              {...propsNeeded}
            />
         ) : (
           <div>
        {this.state.show_buffer &&
          <BoxLoader />
        }
        </div>
    )}
    </div>
    );
  }
}

export default App;
