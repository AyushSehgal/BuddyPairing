import React, { Component } from "react";
import "./node_modules/bootstrap/dist/css/bootstrap.css";
import "../style.css";

class Student extends Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      grade: "",
    };
  }

  handleAdd() {
    console.log(this.state.name);
    console.log(this.state.grade);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="m-1"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <select
            name="grade"
            className="m-1"
            onChange={this.handleChange}
            value={this.state.grade}
          >
            <option value="">-- Please Choose a Grade Level --</option>
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="grad">Graduate</option>
          </select>
          <button
            className="btn btn-primary btn-sm m-1"
            onClick={this.handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Student;
