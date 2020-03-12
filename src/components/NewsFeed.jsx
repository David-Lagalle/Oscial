import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "@mdi/react";
import { mdiNewspaper, mdiBriefcase, mdiCalendarCheck } from "@mdi/js";

export default class NewsFeed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <h1
            className="my-3"
            style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
          >
            Fil d'actualité
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
              <Icon color="black" style={{ width: 20 }} path={mdiNewspaper} />{" "}
              Actualité
            </h2>
            <p className="mx-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <img className="m-3" src="../image/actu_img.jpg" alt="Image" />
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
              Formation
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
    justifyContent: "center"
  }
});
