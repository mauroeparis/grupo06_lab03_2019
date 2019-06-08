import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";

import Current from "./Current";
import Forecast from "./Forecast";
import DayDetail from "./DayDetail";

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

class MainTabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTabChangeIndex = this.handleTabChangeIndex.bind(this);
    this.setDayDetailState = this.setDayDetailState.bind(this);
    this.state = {
      forecastTab: false,
      selectedTab: 0
    };
  }

  setSelectedTab(newValue){
    this.setState({ selectedTab: newValue });
  }

  setDayDetailState(day) {
    this.setState({ dayDetail: day });
  }

  handleTabChangeIndex(index) {
    this.setSelectedTab(index);
  }

  handleTabChange(event, newValue) {
    this.setSelectedTab(newValue);
  }

  render() {
    const { selectedTab, dayDetail } = this.state;
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
      dayOne,
      dayTwo,
      dayThree,
      dayFour,
      dayFive,
      cityName,
      forecastBuffer
    } = this.props;

    return (
      <Paper>
        <Tabs
          style={{ marginTop: "40px" }}
          value={selectedTab}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Current" />
          <Tab label="Forecast" />
          <Tab label="UVI" disabled />
        </Tabs>
        <SwipeableViews
          index={selectedTab}
          onChangeIndex={this.handleTabChangeIndex}
        >
          <TabContainer>
            <Current
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
            />
          </TabContainer>
          <TabContainer>
            <Forecast
              forecastBuffer={forecastBuffer}
              cityName={cityName}
              setDayDetailState={this.setDayDetailState}
              dayOne={dayOne}
              dayTwo={dayTwo}
              dayThree={dayThree}
              dayFour={dayFour}
              dayFive={dayFive}
            />
            <div>{dayDetail ? <DayDetail day={dayDetail} /> : <div />}</div>
          </TabContainer>
          <TabContainer>[UVI View]</TabContainer>
        </SwipeableViews>
      </Paper>
    );
  }
}

MainTabs.propTypes = {
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  currTemp: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
  dayOne: PropTypes.array.isRequired,
  dayTwo: PropTypes.array.isRequired,
  dayThree: PropTypes.array.isRequired,
  dayFour: PropTypes.array.isRequired,
  dayFive: PropTypes.array.isRequired,
  cityName: PropTypes.string.isRequired,
  forecastBuffer: PropTypes.node,
};

export default MainTabs;
