import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

import Router from "./Router";
import Navigation from "./Components/Navigation";

import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <div>
          <Navigation />
          <Router />
        </div>
      </Container>
    );
  }
}

export default App;
