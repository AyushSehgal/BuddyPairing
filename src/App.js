import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import InputForm from "./screens/InputForm";

function App() {
  return (
    <div>
      <header className="App-header">Buddy System Pairing</header>
      <InputForm />
    </div>
  );
}

export default App;
