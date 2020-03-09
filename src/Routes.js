import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Profile from "./components/Profile";
import Event from "./components/Event"
import Rgpd from "./components/Rgpd";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="Profile" component={Profile} title="Profile" hideNavBar />
      <Scene key="Event" component={Event} title="Event" hideNavBar />
      <Scene key="Rgpd" component={Rgpd} title="Rgpd" hideNavBar />
    </Scene>
  </Router>
);
export default Routes;
