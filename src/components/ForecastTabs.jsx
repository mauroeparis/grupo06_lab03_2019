import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Typography from "@material-ui/core/Typography";

import Current from "./Current";
import Forecast from "./Forecast";
import MultipleCard from "./ForecastDetail";

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class ForecastTabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.state = {
      value: 0
    };
  }

  setValue(newValue) {
    this.setState({ value: newValue });
  }

  handleChange(event, newValue) {
    this.setValue(newValue);
  }

  handleChangeIndex(index) {
    this.setValue(index);
  }

  render() {
    return (
      <Paper>
        <Tabs
          style={{ marginTop: "40px" }}
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Current" />
          <Tab label="Forecast" />
          <Tab label="UVI" disabled />
        </Tabs>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer>
            <Current
              minTemp={this.props.minTemp}
              maxTemp={this.props.maxTemp}
              humidity={this.props.humidity}
              currTemp={this.props.currTemp}
              pressure={this.props.pressure}
              wind={this.props.wind}
              icon={this.props.icon}
              description={this.props.description}
              sunrise={this.props.sunrise}
              sunset={this.props.sunset}
            />
          </TabContainer>
          <TabContainer>
            {this.state.value == 1 ? (
              <Forecast cityName={this.props.cityName} />
            ) : (
              <div>{}</div>
            )}
            <div>
              <MultipleCard />
            </div>
          </TabContainer>
          <TabContainer>[UVI View]</TabContainer>
        </SwipeableViews>
      </Paper>
    );
  }
}

export default ForecastTabs;
