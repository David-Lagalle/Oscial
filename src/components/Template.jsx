import React from "react";
import { Text, View } from "react-native";
import Icon from "@mdi/react";
import {
  mdiHome,
  mdiMagnify,
  mdiAccountCircle,
  mdiCalendar,
  mdiCar,
  mdiBell,
  mdiForum
} from "@mdi/js";
import { Actions } from "react-native-router-flux";
import { PageEnum } from "../PageEnum";

let defaultColor = "black";
let selectedColor = "#eef46d";

export default class Template extends React.Component {
  state = {
    Profile: defaultColor,
    NewsFeed: defaultColor,
    Carpooling: defaultColor,
    Event: defaultColor,
    Notification: defaultColor,
    Messaging: defaultColor,
    oldComponent: null
  };

  toggleSelected = component => {
    if (this.state.oldComponent !== null) {
      this.setState({ [this.state.oldComponent]: defaultColor });
    }
    this.setState({ [component]: selectedColor, oldComponent: component });
  };

  render() {
    return (
      <View>
        <Text>
          <div
            style={{
              backgroundColor: "green",
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "5px"
            }}
          >
            <div>
              <p> logo</p>
            </div>
            <div>
              <Icon color="black" style={{ width: 40 }} path={mdiMagnify} />
              <Icon
                color={this.state.Profile}
                id="AccountIcon"
                backgroundcolor="white"
                style={{ width: 40 }}
                path={mdiAccountCircle}
                onClick={() => {
                  Actions.Profile();
                  this.toggleSelected(PageEnum.Profile);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderBottom: "2px solid #000000"
            }}
          >
            <Icon
              color={this.state.NewsFeed}
              style={{ width: 40 }}
              path={mdiHome}
              onClick={() => {
                Actions.NewsFeed();
                this.toggleSelected(PageEnum.NewsFeed);
              }}
            />
            <Icon
              color={this.state.Carpooling}
              style={{ width: 40 }}
              path={mdiCar}
              onClick={() => {
                Actions.Carpooling();
                this.toggleSelected(PageEnum.Carpooling);
              }}
            />
            <Icon
              color={this.state.Event}
              style={{ width: 40 }}
              path={mdiCalendar}
              onClick={() => {
                Actions.Event();
                this.toggleSelected(PageEnum.Event);
              }}
            />
            <Icon
              color={this.state.Notification}
              style={{ width: 40 }}
              path={mdiBell}
              onClick={() => {
                Actions.Notification();
                this.toggleSelected(PageEnum.Notification);
              }}
            />
            <Icon
              color={this.state.Messaging}
              style={{ width: 40 }}
              path={mdiForum}
              onClick={() => {
                Actions.Messaging();
                this.toggleSelected(PageEnum.Messaging);
              }}
            />
          </div>
        </Text>
      </View>
    );
  }
}
