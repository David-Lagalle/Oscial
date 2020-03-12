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
    mdiPound
  } from "@mdi/js";
import { Actions } from "react-native-router-flux";

export default class Notification extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

          <h1 class="my-3" style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>Notification</h1>

          <div class="my-5  d-flex flex-column flex-nowrap" style={{backgroundColor:'#ebfeed', border:'solid 1px lightgrey', borderRadius:'15px', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
            <h2 class="m-3" style={{fontSize:'1rem'}}><Icon color="black" style={{ width: 20 }} path={mdiCar} /> Covoiturage<span class="mx-3" style={{alignItems: 'flex-end'}}>19:03</span></h2>
            <p class="mx-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div class="my-5 d-flex flex-column flex-nowrap" style={{backgroundColor:'#ebfeed', border:'solid 1px lightgrey', borderRadius:'15px', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
            <h2 class="m-3" style={{fontSize:'1rem'}}><Icon color="black" style={{ width: 20 }} path={mdiPound} /> Nom Prénom vous à mentionné<span class="mx-3" style={{alignItems: 'flex-end'}}>19:03</span></h2>
            <p class="mx-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div class="my-5 d-flex flex-column flex-nowrap" style={{backgroundColor:'#ebfeed', border:'solid 1px lightgrey', borderRadius:'15px', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
            <h2 class="m-3" style={{fontSize:'1rem'}}><Icon color="black" style={{ width: 20 }} path={mdiBriefcase} /> Titre du cour<span class="mx-3" style={{alignItems: 'flex-end'}}>19:03</span></h2>
            <p class="mx-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div class="my-5 d-flex flex-column flex-nowrap" style={{backgroundColor:'#ebfeed', border:'solid 1px lightgrey', borderRadius:'15px', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
            <h2 class="m-3" style={{fontSize:'1rem'}}><Icon color="black" style={{ width: 20 }} path={mdiCalendarCheck} /> Evènement<span class="mx-3" style={{alignItems: 'flex-end'}}>19:03</span></h2>
            <p class="mx-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
