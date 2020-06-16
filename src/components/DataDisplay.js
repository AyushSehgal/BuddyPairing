import React, { Component } from "react";

class DataDisplay extends Component {
  constructor() {
    super();
    this.state = {
      data: this.props.info,
    };
  }
  render() {
    return (
      <div>
        {/* <h1 className="mt-4 mb-4">Groupings</h1> */}
        {this.state.data}
      </div>
    );
  }
}

export default DataDisplay;
