import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from 'react';

class TestButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          onClick={this.props.handleClick}>
          open tabs
        </Button>
      </div>
    )
  }
}

export default TestButton;
