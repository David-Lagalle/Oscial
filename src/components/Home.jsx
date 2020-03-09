import React from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>
          <button onClick={() => Actions.Home()}>Home</button>
          <button onClick={() => Actions.Profile()}>Profile</button>
          <button onClick={() => Actions.Rgpd()}>Rgpd</button>
        </Text>
      </View>
    );
  }
}
