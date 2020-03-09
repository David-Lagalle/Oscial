import React from "react";
import { registerRootComponent } from "expo";
import Template from "./components/Template";
import Routes from "./Routes";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Template />
        <Routes />
      </>
    );
  }
}

registerRootComponent(App);
