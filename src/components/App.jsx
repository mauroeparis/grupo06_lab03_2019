import React from "react";

import BoxLoader from "./Loader"
import NavBar from "./NavBar"
import SearchButton from "./SearchButton"
import SearchBar from "./SearchBar"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleBuffer = this.handleBuffer.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {show_buffer: false};
  }

  handleBuffer() {
    this.setState({show_buffer: !this.state.show_buffer});
  }

  handleInput(cityName) {
    this.setState({cityName: cityName});
  }

  render() {
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
        {this.state.show_buffer &&
          <BoxLoader />
        }
      </div>
    );
  }
}

export default App;
