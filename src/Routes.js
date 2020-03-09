import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Profile from "./components/Profile";
import Rgpd from "./components/Rgpd";
import Home from "./components/Home";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="Home" component={Home} title="Home" hideNavBar />
      <Scene key="Profile" component={Profile} title="Profile" hideNavBar />
      <Scene key="Rgpd" component={Rgpd} title="Rgpd" />
    </Scene>
  </Router>
);
export default Routes;
