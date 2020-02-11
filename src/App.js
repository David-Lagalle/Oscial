import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet } from "react-native";
import Rgpd from "./components/Rgpd";
import Profile from "./components/Profile";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return <Profile />;
  }
}

registerRootComponent(App);
