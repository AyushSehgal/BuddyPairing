import React, { Component } from "react";
import App from "../App";

export default class Person extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Full Name" />
        <select>
          <option value="freshman">Freshman</option>
          <option value="sophomore">Sophomore</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
          <option value="grad">Graduate</option>
        </select>
        <button
          className="btn-primary"
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
