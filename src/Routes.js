import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Profile from "./components/Profile";
import Rgpd from "./components/Rgpd";
import Covoiturage from "./components/Covoiturage";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="Profile" component={Profile} title="Profile" hideNavBar />
      <Scene key="Rgpd" component={Rgpd} title="Rgpd" hideNavBar />
      <Scene key="Covoiturage" component={Covoiturage} title="Covoiturage" hideNaveBar/>
    </Scene>
  </Router>
);
export default Routes;
