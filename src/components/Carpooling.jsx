import React from "react";
import { Text, View } from "react-native";
import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";
import "./Carpooling.css";

export default class Carpooling extends React.Component {
  render() {
    return (
      <View>
        <Text>
          <h1>Covoiturage</h1>
          <form
            className=" border border-secondary"
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              width: "80%",
              marginTop: "10%",
              padding: "30px"
            }}
          >
            <div className="form-row">
              <div className="col">
                <label htmlFor="departurePlace">Lieu de départ</label>
                <input
                  type="text"
                  className="form-control"
                  id="departurePlace"
                />
              </div>
              <Icon color="black" style={{ width: 40 }} path={mdiMapMarker} />
            </div>
            <p>Date et heure de départ</p>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="dateTimeDeparture"
                  placeholder="jj/mm/aa"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput3"
                  placeholder="hh:mm"
                />
              </div>
              <div className="col"></div>
            </div>
            <p>Lieu d'arrivée</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput4"
              />
            </div>
            <p>Date et heure d'arrivée</p>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput5"
                  placeholder="jj/mm/aa"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput6"
                  placeholder="hh:mm"
                />
              </div>
              <div className="col"></div>
            </div>
            <button type="submit" className="btn btn-success">
              Rechercher
            </button>
          </form>
        </Text>
      </View>
    );
  }
}
