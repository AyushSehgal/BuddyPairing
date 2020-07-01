import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class TestContainer extends Component {
  constructor() {
    super();
    this.total = 1;
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent() {
    this.total += 1;
  }
  render() {
    return (
      <div className="App">
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={this.addStudent}
          value="Append"
        >
          Add
        </button>
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
        <button className="btn btn-success btn-lg btn-block mt-4">
          Submit
        </button>
      </div>
    );
  }
}

export default TestContainer;
