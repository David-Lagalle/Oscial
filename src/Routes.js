import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Profile from "./components/Profile";
import Event from "./components/Event";
import Rgpd from "./components/Rgpd";
import Carpooling from "./components/Carpooling";
import NewsFeed from "./components/NewsFeed";
import Messaging from "./components/Messaging";
import Notification from "./components/Notification";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="Profile" component={Profile} title="Profile" hideNavBar />
      <Scene key="Event" component={Event} title="Event" hideNavBar />
      <Scene key="Rgpd" component={Rgpd} title="Rgpd" hideNavBar />
      <Scene
        key="Covoiturage"
        component={Carpooling}
        title="Covoiturage"
        hideNavBar
      />
      <Scene key="NewsFeed" component={NewsFeed} title="NewsFeed" hideNavBar />
      <Scene
        key="Messaging"
        component={Messaging}
        title="Messaging"
        hideNavBar
      />
      <Scene
        key="Notification"
        component={Notification}
        title="Notification"
        hideNavBar
      />
    </Scene>
  </Router>
);
export default Routes;
