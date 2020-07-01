import React, { Component } from "react";
import ReactDOM from "react-dom";

class DataDisplay extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1 className="mt-4 mb-4">Groupings</h1>
        {this.props.data}
        {/* {ReactDOM.render(<p>{}</p>, document.getElementById("0!"))} */}
      </div>
    );
  }
}

export default DataDisplay;
