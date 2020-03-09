import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet } from "react-native";
import Rgpd from "./components/Rgpd";
import IndexPost from "./components/post/indexPost";
import EditPost from "./components/post/editPost";
import { Router, Scene } from 'react-native-router-flux'

 /* const Route = () => (
  <Router>
    <Stack key="root">
      <Scene key="IndexPost" component={indexPost} title="indexPost" />
      <Scene key="Rgpd" component={Rgpd} title="Rgpd" initial = {true}/>
    </Stack>
  </Router>
); */

/* class App extends React.Component {
  render() {
    return (  <Router>
      <Stack key="root">
        <Scene key="IndexPost" component={indexPost} title="indexPost" />
        <Scene key="Rgpd" component={Rgpd} title="Rgpd" initial = {true}/>
      </Stack>
    </Router>);
  }
} */

class App extends React.Component {
  render() {
    return <IndexPost />;
  }
}

registerRootComponent(App);
