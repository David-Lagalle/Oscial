import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "@mdi/react";
import {
  mdiHome,
  mdiMagnify,
  mdiAccountCircle,
  mdiCalendar,
  mdiCar,
  mdiBell,
  mdiForum,
  mdiArmFlex
} from "@mdi/js";
import { Actions } from "react-native-router-flux";

export default class Template extends React.Component {
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
                color="black"
                style={{ width: 40 }}
                path={mdiAccountCircle}
                onClick={() => Actions.Profile()
                }
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
            <Icon color="black" style={{ width: 40 }} path={mdiHome} />
            <Icon color="black" style={{ width: 40 }} path={mdiCalendar} />
            <Icon color="black" style={{ width: 40 }} 
             path={mdiCar}
             onClick={() => Actions.Covoiturage()}/>
            <Icon color="black" style={{ width: 40 }} path={mdiCalendar} onClick={() => Actions.Event()} />
            <Icon color="black" style={{ width: 40 }} path={mdiBell} />
            <Icon color="black" style={{ width: 40 }} path={mdiForum} />
          </div>
        </Text>
      </View>
    );
  }
}
