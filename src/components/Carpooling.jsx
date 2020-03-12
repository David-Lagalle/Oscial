import React from "react";
import { Text, View } from "react-native";

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
            <div className="form-group ">
              <label htmlFor="formGroupExampleInput">Lieu de départ</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <p>Date et heure de départ</p>
            <div className="form-group row">
              <input
                type="text"
                className="form-control col"
                id="formGroupExampleInput2"
                placeholder="jj/mm/aa"
              />
              <div className="col">
                <img
                  src="../image/iconlocalisation.png"
                  alt="icone localisation"
                />
              </div>
              <input
                type="text"
                className="form-control col"
                id="formGroupExampleInput3"
                placeholder="hh:mm"
              />
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
            <div className="form-group row">
              <input
                type="text"
                className="form-control col"
                id="formGroupExampleInput5"
                placeholder="jj/mm/aa"
              />
              <div className="col"></div>
              <input
                type="text"
                className="form-control col"
                id="formGroupExampleInput6"
                placeholder="hh:mm"
              />
              <div className="col"></div>
            </div>
            <button type="submit" className="btn btn-success">
              Sign in
            </button>
          </form>
        </Text>
      </View>
    );
  }
}
