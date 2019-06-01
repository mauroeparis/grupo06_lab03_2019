import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const axios = require('axios');
const API_KEY='5173f98ffa679c9f72e89391881592a0';
const BASE_URL='https://api.openweathermap.org/data/2.5/weather'


class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleBuffer()
    axios.get(
      BASE_URL+'?q='+this.props.cityName+'&appid='+API_KEY
    ).then(response => {
      console.log(response);
      this.props.handleBuffer()
    }).catch(response => {
      console.log(response);
      this.props.handleBuffer()
    })
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary"
          onClick={this.handleClick}>
          Search
        </Button>
      </div>
    );
  }
}

export default SearchButton;
