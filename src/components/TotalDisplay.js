import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function TotalDisplay(props) {
  const participants = props.sum;
  return (
    <div>
      <h5 className="m-4">
        {participants > 0 ? "Total Participants: " + participants : ""}
      </h5>
      <div>{props.data}</div>
    </div>
  );
}

export default TotalDisplay;
