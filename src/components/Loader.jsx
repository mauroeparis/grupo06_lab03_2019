import React from "react";
import { css } from "@emotion/core";
// // First way to import
// import { ClimbingBoxLoader } from 'react-spinners';
// Another way to import
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class BoxLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="sweet-loading">
        <ClimbingBoxLoader
          css={override}
          sizeUnit="em"
          size={1}
          color="#FF5722"
          loading={loading}
        />
      </div>
    );
  }
}

export default BoxLoader;
