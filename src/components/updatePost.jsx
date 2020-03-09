import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class UpdatePost extends React.Component {
  render() {
    return (
      <View>
        <Text>

          <h2>POST update</h2>
          
          <br/>

          <div class="row">
          <TextInput
            onChangeText={text => onChangeText(text)}
            value={titre_du_post}
          />
            <span>Date de cr&eacute;ation</span>
          <TextInput
            onChangeText={text => onChangeText(text)}
            value={description_du_post}
          />
            {/* <img alt="image"/> */}
          </div>

        </Text>
      </View>
    );
  }
}
