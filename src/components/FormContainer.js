import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Person from "../components/Person";
import TotalDisplay from "./TotalDisplay";
import DisplayData from "./DisplayData";

class FormContainer extends Component {
  constructor() {
    super();

    this.addStudent = this.addStudent.bind(this);
    this.remStudent = this.remStudent.bind(this);
    this.getData = this.getData.bind(this);

    this.students = new Map();
    for (let i = 0; i < 4; i++) {
      console.log(i);
      this.students.set(
        i,
        <Person key={i} id={i} func={this.remStudent} callback={this.getData} />
      );
    }
    console.log(this.students);
    this.total = 4;

    this.state = {
      showdata: this.students,
      fullName: "",
      grade: "",
    };
  }

  getData = (childState) => {
    const fullName = childState.fullName;
    const grade = childState.grade;

    this.setState((prevState) => {
      return {
        showdata: prevState.showdata,
        fullName: fullName,
        grade: grade,
      };
    });
  };

  addStudent() {
    this.total += 1;
    console.log("I am in addStudent:");
    console.log(this.total);
    this.students.set(
      this.total,
      <Person
        key={this.total}
        id={this.total}
        func={this.remStudent}
        callback={this.getData}
      />
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
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={this.addStudent}
          value="Append"
        >
          Add
        </button>

        <TotalDisplay
          sum={this.total}
          data={Array.from(this.students.values())}
        />

        <button className="btn btn-success btn-lg btn-block mt-4">
          Submit
        </button>

        <div>{}</div>

        {/* <DisplayData name={this.fullName} grd={this.grade} /> */}
      </div>
    );
  }
}

export default FormContainer;
