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
    this.setDayDetailState= this.setDayDetailState.bind(this);
    this.state = {
      forecastTab: false,
      selectedTab: 0,
    };
  }

  setSelectedTab(newValue){
    this.setState({selectedTab: newValue})
  }

  handleTabChange(event, newValue) {
    this.setSelectedTab(newValue);
  }

  handleTabChangeIndex(index) {
    this.setSelectedTab(index);
  }

  setDayDetailState(day) {
   this.setState({dayDetail:day});
  }

  render() {
    return (
      <Paper>
        <Tabs style={{marginTop:'40px'}}
          value={this.state.selectedTab}
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
          index={this.state.selectedTab}
          onChangeIndex={this.handleTabChangeIndex}
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
          <TabContainer >
          <Forecast
            forecastBuffer={this.props.forecastBuffer}
            cityName={this.props.cityName}
            setDayDetailState={this.setDayDetailState}
            dayOne={this.props.dayOne}
            dayTwo={this.props.dayTwo}
            dayThree={this.props.dayThree}
            dayFour={this.props.dayFour}
            dayFive={this.props.dayFive}
          />
            <div>
              {this.state.dayDetail ? (
                <DayDetail day={this.state.dayDetail} />
               ) : (
                <div></div>
              )}
            </div>
          </TabContainer>
          <TabContainer>[UVI View]</TabContainer>
        </SwipeableViews>
      </Paper>
    );
  }
}

export default MainTabs;
