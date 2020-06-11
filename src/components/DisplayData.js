import React from "react";

function DisplayData(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.grd}</h1>
    </div>
  );
}

export default DisplayData;
