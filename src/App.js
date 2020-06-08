import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Person from "./components/Person";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class App extends React.Component {
  constructor() {
    super();

    this.students = [];
    this.total = 0;

    this.state = {
      showdata: this.students,
    };

    this.addStudent = this.addStudent.bind(this);
    this.remStudent = this.remStudent.bind(this);
  }

  addStudent() {
    this.total += 1;
    this.students.push(
      <Person key={this.total} id={this.total} func={this.remStudent} />
    );
    this.setState({
      showdata: this.students,
    });
  }

  remStudent(id) {
    console.log(id);
    this.students.splice(id - 1, 1);
    this.setState({
      showdata: this.students,
    });
  }

  render() {
    return (
      <div id="mainContainer">
        <button
          className="btn-primary"
          onClick={this.addStudent}
          value="Append"
        >
          Add
        </button>
        <div id="display-data-Container">{this.students}</div>
      </div>
    );
  }
}

export default App;
