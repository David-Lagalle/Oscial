import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "@mdi/react";
import { mdiCar, mdiBriefcase, mdiCalendarCheck, mdiPound } from "@mdi/js";

export default class Notification extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <h1
            className="my-3"
            style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
          >
            Notification
          </h1>

          <div
            className="my-2 d-flex flex-column flex-nowrap"
            style={{
              backgroundColor: "#ebfeed",
              border: "solid 1px lightgrey",
              borderRadius: "15px",
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <h2 className="m-3" style={{ fontSize: "1rem" }}>
              <Icon color="black" style={{ width: 20 }} path={mdiCar} />{" "}
              Covoiturage
              <span className="mx-3" style={{ alignItems: "flex-end" }}>
                19:03
              </span>
            </h2>
            <p className="mx-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div
            className="my-2 d-flex flex-column flex-nowrap"
            style={{
              backgroundColor: "#ebfeed",
              border: "solid 1px lightgrey",
              borderRadius: "15px",
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <h2 className="m-3" style={{ fontSize: "1rem" }}>
              <Icon color="black" style={{ width: 20 }} path={mdiPound} /> Nom
              Prénom vous à mentionné
              <span className="mx-3" style={{ alignItems: "flex-end" }}>
                19:03
              </span>
            </h2>
            <p className="mx-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div
            className="my-2 d-flex flex-column flex-nowrap"
            style={{
              backgroundColor: "#ebfeed",
              border: "solid 1px lightgrey",
              borderRadius: "15px",
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <h2 className="m-3" style={{ fontSize: "1rem" }}>
              <Icon color="black" style={{ width: 20 }} path={mdiBriefcase} />{" "}
              Titre du cour
              <span className="mx-3" style={{ alignItems: "flex-end" }}>
                19:03
              </span>
            </h2>
            <p className="mx-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div
            className="my-2 d-flex flex-column flex-nowrap"
            style={{
              backgroundColor: "#ebfeed",
              border: "solid 1px lightgrey",
              borderRadius: "15px",
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <h2 className="m-3" style={{ fontSize: "1rem" }}>
              <Icon
                color="black"
                style={{ width: 20 }}
                path={mdiCalendarCheck}
              />{" "}
              Evènement
              <span className="mx-3" style={{ alignItems: "flex-end" }}>
                19:03
              </span>
            </h2>
            <p className="mx-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
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
    justifyContent: "center"
  }
});
