import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import SearchButton from "./SearchButton"


class SearchBar extends React.Component {
  constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.saveInput(e.target.value);
  }

  render(){
    return (
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        margin="normal"
        variant="filled"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
