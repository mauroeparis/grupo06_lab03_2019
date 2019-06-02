import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import BoxLoader from "./Loader"


const axios = require('axios');
const API_KEY='5173f98ffa679c9f72e89391881592a0';
const BASE_URL='https://api.openweathermap.org/data/2.5/forecast'


class Forecast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buff: true
    }
  }

  componentDidMount() {
    axios.get(
      BASE_URL+'?q='+this.props.cityName+'&appid='+API_KEY
    ).then(response => {
      this.formatData(response.data);
      this.setState({buff:false})
    }).catch(response => {
      console.log(response);
      this.setState({buff:false})
    })
  }

  formatForecastData(data) {
    console.log(data);
  }

  render() {
    const card = (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography  color="textSecondary" gutterBottom>
              Date
            </Typography>
            <img src='http://openweathermap.org/img/w/10d.png' />
            <Typography variant="h5" component="h2">
              description
            </Typography>
            <Typography variant="body2" component="p">
              Min Temp
            </Typography>
            <Typography variant="body2" component="p">
              Max Temp
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );

    const cards = [];

    for (var i=0;i<5;i++) {
      cards.push(
        <Grid item xs={2} key={i}>
          {card}
        </Grid>
      );
    }

    return (
      this.state.buff ? (
        <div>
          <BoxLoader />
        </div>
       ) : (
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid direction="row" justify="space-between" alignItems="center" container>
            {cards}
          </Grid>
        </Grid>
      )
    );
  }
}

export default Forecast;
