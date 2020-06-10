import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import InputForm from "./screens/InputForm";
import Grouped from "./screens/Grouped";

function App() {
  return (
    <div>
      <InputForm />
    </div>
  );
}

export default App;
