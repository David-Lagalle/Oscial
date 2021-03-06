import React from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Navigation extends React.Component {
  render() {
    return (
      <View>
        <Text>
          <button onClick={() => Actions.Profile()}>Profile</button>
          <button onClick={() => Actions.Event()}>Event</button>
          <button onClick={() => Actions.Rgpd()}>Rgpd</button>
          <button onClick={() => Actions.Carpooling()}>Covoiturage</button>
          <button onClick={() => Actions.Messaging()}>Messagerie</button>
        </Text>
      </View>
    );
  }
}
