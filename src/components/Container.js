import React, { Component } from "react";

import Student from "./Student";
import Display from "./Display";

class Container extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
    this.info = []; // will store all the data from student components
    this.state = {
      students: [],
    };
  }

  getData(data) {
    this.info.push(data);
    this.setState((prevState) => ({ students: prevState.students.push(data) }));
  }
  render() {
    return (
      <div className="App">
        <Student callback={this.getData} />
        <h1>Students</h1>
        {/* {console.log(this.state.students)} */}
      </div>
    );
  }
}

export default Container;
