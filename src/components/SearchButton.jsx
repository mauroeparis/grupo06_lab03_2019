import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.cityName);
    this.props.searchCity();
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
