import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Students</h1>
        {this.props.studentName}
        {this.props.studentGrade}
      </div>
    );
  }
}

export default Display;
