import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import FormContainer from "./components/FormContainer";
import TestContainer from "./components/TestContainer";

import Container from "./components/Container";

function App() {
  return (
    <div>
      <header className="App-header">Buddy System Pairing</header>
      <Container />
    </div>
  );
}

export default App;
