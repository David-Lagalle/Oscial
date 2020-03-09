import React from "react";
import { StyleSheet, Text, View, DatePickerIOS } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class EditPost extends React.Component {
  render() {
    return (
      <View  style={styles.container}>
        <Text>

          <h2>POST edit</h2>

          <br/>

          <div class="row">
            <div>
              <TextInput style={styles.inputStyle}
                placeholder="Titre du post"
                name="post_title"
                ></TextInput>
            </div>
            <div>
              <label>Date de cr&eacute;ation : </label>
              <br/>
              <input type="date" name="post_date"/>
            </div>
            <div>
              <textarea placeholder="Description du post" name="post_desc"></textarea>
            </div>
            <div>
              <label>Exporter une image : </label>
              <br/>
              <input name="post_img" type="file"/>
            </div>
            <div>
              <button type="submit">Sauvegarder</button>
            </div>
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
  },
  inputStyle:{
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
})
