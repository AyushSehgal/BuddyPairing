import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Person from "./components/Person";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class App extends React.Component {
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
    this.students.set(
      this.total,
      <Person key={this.total} id={this.total} func={this.remStudent} />
    );
    this.setState({
      showdata: this.students,
    });
  }

  remStudent(id) {
    if (id == 1) {
      this.total = 0;
    }
    this.students.delete(id);
    this.setState({
      showdata: this.students,
    });
  }

  render() {
    return (
      <div id="mainContainer" className="App">
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
    );
  }
}

export default App;
