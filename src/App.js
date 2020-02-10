import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet } from "react-native";
import Rgpd from "./components/Rgpd";

class App extends React.Component {
  render() {
    return <Rgpd />;
  }
}

registerRootComponent(App);
