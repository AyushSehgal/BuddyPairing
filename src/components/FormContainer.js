import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

import Person from "../components/Person";
import TotalDisplay from "./TotalDisplay";

class FormContainer extends Component {
  constructor() {
    super();

    this.students = new Map();
    this.total = 0;

    this.state = {
      showdata: this.students,
    };

    this.addStudent = this.addStudent.bind(this);
    this.remStudent = this.remStudent.bind(this);
  }

  addStudent() {
    this.total += 1;
    console.log("I am in addStudent:");
    console.log(this.total);
    this.students.set(
      this.total,
      <Person key={this.total} id={this.total} func={this.remStudent} />
    );
    this.setState({
      showdata: this.students,
    });
  }

  remStudent(id) {
    this.total -= 1;
    console.log("I am in remStudent:");
    console.log(this.total);
    this.students.delete(id);
    this.setState({
      showdata: this.students,
    });
  }

  render() {
    return (
      <div id="mainContainer" className="App">
        <div className="col">
          <TotalDisplay sum={this.total} />
        </div>
        <div className="col">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={this.addStudent}
            value="Append"
          >
            Add
          </button>
          <div id="display-data-Container">
            {Array.from(this.students.values())}
          </div>
        </div>
      </div>
    );
  }
}

export default FormContainer;
