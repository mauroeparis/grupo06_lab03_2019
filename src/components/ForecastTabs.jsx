import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import BoxLoader from "./Loader"
import Current from './Current'
import Forecast from './Forecast'


function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class ForecastTabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.state = {
      forecastTab: false,
      value: 0,
    };
  }

  setValue(newValue){
    this.setState({value: newValue})
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
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Current" />
          <Tab label="Forecast"/>
          <Tab label="UVI" disabled />
        </Tabs>
        <SwipeableViews

          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer >
            // Current
          </TabContainer>
          <TabContainer >
            {this.state.forecastTab ? (
              <ForecastTabs
                {...propsNeeded}
              />
             ) : (
              <div>
                <BoxLoader />
              </div>
            )}
            <BoxLoader />
            <Forecast />
          </TabContainer>
          <TabContainer >
            // UVI View
          </TabContainer>
        </SwipeableViews>
      </Paper>
    );
  }
}

export default ForecastTabs;