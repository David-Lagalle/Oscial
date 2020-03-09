import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class FormPost extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

          <div class="my-5" >
            <h2 class="my-2" style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>Création de post</h2>
            <form class="p-5 my-5" style={{backgroundColor:'#ebfeed', border:'solid 1px lightgrey', borderRadius:'15px', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
              <h3 class="my-1" style={{fontSize:'1rem'}}>Création d'une actualité</h3>
              <label for="" class="px-2 my-3">Nature de l'actualité:</label>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="post" name="choix" value="postEx"/>
                <label class="custom-control-label" for="post">Post</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="event" name="choix" value="eventEx"/>
                <label class="custom-control-label" for="event">Evénement</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="offre" name="choix" value="offreEx"/>
                <label class="custom-control-label" for="offre">Offre</label>
              </div>
              <hr class="my-4"/>
              <div class="form-group my-3">
                <label for="">Titre:</label>
                <input type="titre" class="form-control" placeholder="Titre" id="titre"/>
              </div>
              <div class="form-group my-3">
                <label for="">Description:</label>
                <textarea class="form-control" placeholder="Description" id="desc"></textarea>
              </div>
              <button type="submit" class="btn btn-success btn-block">Poster</button>
            </form>
          </div>
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    //flex:1,
    //backgroundColor:'#ebfeed',
    //alignItems:'center',
  },
})
