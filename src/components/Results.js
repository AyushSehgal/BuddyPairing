import React, { Component } from "react";

class Results extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-4 mb-4">Groupings</h1>
        {this.props.data.fullName}
        {this.props.data.grade}
      </div>
    );
  }
}

export default Results;
