import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Person extends Component {
  constructor() {
    super();
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
    this.setState({
      [name]: value,
    });
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
          value={this.state.fullName}
          onChange={this.handleChange}
        />
        <select
          name="grade"
          value={this.state.grade}
          className="m-1"
          onChange={this.handleChange}
        >
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
        <button onClick={this.sendData}>TEST</button>
      </div>
    );
  }
}
