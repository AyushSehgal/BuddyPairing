import React, { Component } from "react";

function TotalDisplay(props) {
  const participants = props.sum;
  return (
    <div>
      <h3>Total Participants: {participants}</h3>
      {/* {participants % 2 == 1 ? (
        <p>Odd Participants, we will need one group of 3</p>
      ) : (
        <p></p>
      )} */}
    </div>
  );
}

export default TotalDisplay;
