import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class TotalDisplay extends React.Component {
  render() {
    const participants = this.props.sum;
    return (
      <div>
        <h5 className="m-4">
          {participants > 0 ? "Total Participants: " + participants : ""}
        </h5>
        <div>{this.props.data}</div>
      </div>
    );
  }
}

export default TotalDisplay;
