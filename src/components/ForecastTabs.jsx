import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import Current from './Current'


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

function CenteredTabs(props) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  var weatherinfo = {
  description1 : 10,
  description2 : 30,
  pressure : 10,
  minTemp : 30,
  sunrise : 10,
  wind : 30,
  humidity : 30,
  maxTemp : 30,
  maxTemp : 30,
  sunset : 10,
};

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Current" />
        <Tab label="Forecast" />
        <Tab label="UVI" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <Current weatherinfo={weatherinfo}/>
        </TabContainer>
        <TabContainer dir={theme.direction}>
          // Forecast View
        </TabContainer>
        <TabContainer dir={theme.direction}>
          // UVI View
        </TabContainer>
      </SwipeableViews>
    </Paper>
  );
}

export default CenteredTabs;
