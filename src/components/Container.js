import React, { Component } from "react";

import Student from "./Student";

class Container extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
  }

  getData(data) {
    console.log("in get data");
    console.log(data.name);
    console.log(data.grade);
  }
  render() {
    return (
      <div className="App">
        <Student callback={this.getData} />
      </div>
    );
  }
}

export default Container;
