import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import update from "immutability-helper";

export default class Person extends Component {
  constructor() {
    super();
    this.newName = "";
    this.state = {
      fullName: "",
      grade: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  sendData() {
    this.props.callback(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    var newState = {};

    if (name === "fullName") {
      this.newName = name + this.props.id;
      newState = update(this.state, {
        [this.newName]: { $set: value },
      });
      this.setState(newState);
    } else if (name === "grade") {
      this.newGrade = name + this.props.id;
      newState = update(this.state, {
        [this.newGrade]: { $set: value },
      });
      this.setState(newState);
    }

    this.sendData();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="m-1"
          // value={this.state.fullName}
          onChange={this.handleChange}
        />
        <select name="grade" className="m-1" onChange={this.handleChange}>
          <option value="">-- Please Choose a Grade Level --</option>
          <option value="freshman">Freshman</option>
          <option value="sophomore">Sophomore</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
          <option value="grad">Graduate</option>
        </select>
        <button
          className="btn btn-sm btn-danger m-1"
          onClick={() => {
            this.props.func(this.props.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
