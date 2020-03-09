import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class IndexPost extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>

          <h2>POST index</h2>
          
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

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ebfeed',
    alignItems:'center',
    //justifyContent:'center',
  }
})
