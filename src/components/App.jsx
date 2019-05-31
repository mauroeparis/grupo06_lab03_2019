import React from "react";

import BoxLoader from "./Loader"
import NavBar from "./NavBar"
import SearchButton from "./SearchButton"
import SearchBar from "./SearchBar"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchCity = this.searchCity.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {clicked: false};
  }

  searchCity() {
    this.setState({clicked: true});
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
          <SearchButton searchCity={this.searchCity}
           cityName={this.state.cityName} />
          <BoxLoader />
      </div>
    );
  }
}

export default App;
