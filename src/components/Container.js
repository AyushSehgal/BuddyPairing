import React, { Component } from "react";

import Student from "./Student";
import Display from "./Display";

class Container extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
    this.state = {
      students: [],
    };
  }

  getData(data) {
    this.setState({ students: this.state.students.concat(data) });
  }
  render() {
    return (
      <div className="App">
        <Student callback={this.getData} />
        <h1>Students</h1>
        {this.state.students.map((value, index) => (
          <div key={index}>
            <div className="card" style={{ width: "18rem", margin: "auto" }}>
              <h6 className="card-title">{value.name}</h6>
              <p className="card-text">{value.grade}</p>
              <button className="btn btn-secondary btn-md">Edit</button>
            </div>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default Container;
