import React from "react";
import { registerRootComponent } from "expo";
import Home from "./components/Home";
import Routes from "./Routes";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Home />
        <Routes />
      </>
    );
  }
}

registerRootComponent(App);
