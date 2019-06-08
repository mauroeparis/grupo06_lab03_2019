import React from "react";
import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { saveInput } = this.props;
    saveInput(e.target.value);
  }

  render() {
    return (
      <TextField
        id="filled-search"
        label="Enter your location"
        type="search"
        margin="normal"
        variant="filled"
        fullWidth
        onChange={this.handleChange}
      />
    );
  }
}

SearchBar.propTypes = {
  saveInput: PropTypes.func.isRequired
};

export default SearchBar;
