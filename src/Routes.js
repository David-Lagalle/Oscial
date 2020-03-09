import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Profile from "./components/Profile";
import Rgpd from "./components/Rgpd";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="Profile" component={Profile} title="Profile" hideNavBar />
      <Scene key="Rgpd" component={Rgpd} title="Rgpd" hideNavBar />
    </Scene>
  </Router>
);
export default Routes;
