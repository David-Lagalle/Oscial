import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet } from "react-native";
import Rgpd from "./components/Rgpd";
import Login from "./components/Login";

class App extends React.Component {
  render() {
    return <Login />;
  }
}

registerRootComponent(App);
