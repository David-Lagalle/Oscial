import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "./Profile.css";

class PswSection extends React.Component {
  render() {
    return (
      <View>
        <div class="form-row">
          <div class="col">
            <label name="oldPsw" htmlFor="oldPsw">
              Ancien mot de passe
            </label>
            <input
              id="oldPsw"
              className="form-control"
              name="oldPsw"
              type="password"
              placeholder=""
            ></input>
          </div>
          <div class="col">
            <label htmlFor="newPsw">Nouveau mot de passe</label>
            <input
              id="newPsw"
              className="form-control"
              name="newPsw"
              type="text"
              placeholder=""
            ></input>
          </div>
        </div>
      </View>
    );
  }
}

export default class Rgpd extends React.Component {
  state = { showPswSection: false };

  hidePsw = () => {
    this.setState({ showPswSection: !this.state.showPswSection });
  };

  toggleClass = () => {
    $(this).toggleClass("open");
  };

  render() {
    return (
      <View>
        <Text>
          <div className="content">
            <form>
              <img></img>
              <div class="form-row">
                <div class="col">
                  <label htmlFor="name">Nom</label>
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div class="col">
                  <label htmlFor="name">Prénom</label>
                  <input
                    className="form-control"
                    name="surname"
                    type="text"
                    placeholder=""
                  ></input>
                </div>
              </div>
              {this.state.showPswSection ? <PswSection /> : null}
              <input
                type="button"
                className="btn btn-secondary"
                onClick={() => this.hidePsw()}
              ></input>
              <div class="form-row">
                <div class="col">
                  <label htmlFor="mail">Mail</label>
                  <input
                    className="form-control"
                    name="mail"
                    type="email"
                    placeholder=""
                  ></input>
                </div>
                <div class="col">
                  <label htmlFor="birthday">Date de naissance</label>
                  <input
                    className="form-control"
                    name="birthday"
                    type="date"
                    placeholder=""
                  ></input>
                </div>
              </div>
              <div class="form-row">
                <div class="col">
                  <label htmlFor="name">Adresse postale</label>
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div class="col">
                  <label htmlFor="name">Numéro de téléphone</label>
                  <input
                    className="form-control"
                    name="name"
                    type="tel"
                    placeholder=""
                  ></input>
                </div>
              </div>
              <label>Sexe</label>
              <div className="input-group-text">
                <div class="form-row">
                  <div class="col">
                    <input id="man" name="sexe" type="radio"></input>
                    <label id="man">Homme</label>
                  </div>
                  <div class="col">
                    <input id="woman" name="sexe" type="radio"></input>
                    <label id="man">Femme</label>
                  </div>
                  <div class="col">
                    <input id="other" name="sexe" type="radio"></input>
                    <label id="man">Autre</label>
                  </div>
                </div>
              </div>
              <label htmlFor="socialStatus">Status social</label>
              <select name="socialStatus" className="custom-select">
                <option value="">Salarié</option>
                <option value="">Alternant</option>
                <option value="">Etudiant</option>
                <option value="">Salarié</option>
              </select>

              <br></br>
              <button type="submit" className="btn btn-success">
                Sauvegarder
              </button>
            </form>
          </div>
        </Text>
      </View>
    );
  }
}
