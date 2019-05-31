import React from "react";

import BoxLoader from "./Loader"
import NavBar from "./NavBar"
import TestButton from "./TestButton"
import ForecastTabs from "./ForecastTabs"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.openTabs = this.openTabs.bind(this);
    this.state = {tabs: false};
  }

  openTabs() {
    this.setState({tabs: true});
  }

  render() {
    var propsNeeded = {};

    return (
        <div>
          <NavBar />
          {
            this.state.tabs ? (
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
        </div>
    );
  }
}

export default App;
