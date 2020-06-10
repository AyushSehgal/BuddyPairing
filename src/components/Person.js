import React, { Component } from "react";
import App from "../App";
import "bootstrap/dist/css/bootstrap.css";

export default class Person extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Full Name" className="m-1" />
        <select className="m-1">
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
    );
  }
}
