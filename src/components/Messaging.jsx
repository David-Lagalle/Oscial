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
    mdiArmFlex,
    mdiNewspaper,
    mdiBriefcase,
    mdiCalendarCheck,
    mdiMessage
  } from "@mdi/js";
import { Actions } from "react-native-router-flux";

export default class NewsFeed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

          <h1 class="my-3" style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>Messages</h1>
          <div class="row my-3" style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>
            <Icon color="black" style={{ width: 30 }} path={mdiMessage} />
            <h2 style={{fontSize:'1rem'}}> Démarrer une nouvelle conversation</h2>
          </div>
          <div class="d-flex flex-column p-3" style={{backgroundColor:'#e6e6e6', border:'solid 1px grey'}}>
            <div class="d-flex flex-row align-items-center my-2">
              <Icon color="black" style={{ width: 30 }} path={mdiAccountCircle} />
              <h2 style={{fontSize:'0.8rem'}}> Nom Prénom <span class="mx-3" style={{position: 'absolute', right: 0}}>19:03</span></h2>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div class="d-flex flex-column p-3" style={{backgroundColor:'#af9392', border:'solid 1px grey'}}>
            <div class="d-flex flex-row align-items-center my-2">
              <Icon color="black" style={{ width: 30 }} path={mdiAccountCircle} />
              <h2 style={{fontSize:'0.8rem'}}> Nom Prénom <span class="mx-3" style={{position: 'absolute', right: 0}}>19:03</span></h2>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div class="d-flex flex-column p-3" style={{backgroundColor:'#e6e6e6', border:'solid 1px grey'}}>
            <div class="d-flex flex-row align-items-center my-2">
              <Icon color="black" style={{ width: 30 }} path={mdiAccountCircle} />
              <h2 style={{fontSize:'0.8rem'}}> Nom Prénom <span class="mx-3" style={{position: 'absolute', right: 0}}>19:03</span></h2>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div class="d-flex flex-column p-3" style={{backgroundColor:'#af9392', border:'solid 1px grey'}}>
            <div class="d-flex flex-row align-items-center my-2">
              <Icon color="black" style={{ width: 30 }} path={mdiAccountCircle} />
              <h2 style={{fontSize:'0.8rem'}}> Nom Prénom <span class="mx-3" style={{position: 'absolute', right: 0}}>19:03</span></h2>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
    justifyContent:'center',
  },
})
