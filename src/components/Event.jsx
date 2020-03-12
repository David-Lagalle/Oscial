import React from "react";
import { Text, View } from "react-native";

export default class Event extends React.Component {
  render() {
    return (
      <View>
        <Text>
          <div
            style={{
              border: "1px solid #000000",
              borderLeft: "10px",
              borderRight: "10px"
            }}
          >
            <h1>Concert place de la mairie</h1>
            <h2>Vendredi 22 avril 2020</h2>
          </div>
        </Text>
      </View>
    );
  }
}
