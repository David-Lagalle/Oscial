import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class DeletePost extends React.Component {
  render() {
    return (
      <View>
        <Text>

          <h2>POST delete</h2>
          
          <br/>

          <div class="row">
            <h3>Titre du post</h3>
            <span>Date de cr&eacute;ation</span>
            <p>Description</p>
            <img alt="image"/>
          </div>

        </Text>
      </View>
    );
  }
}
