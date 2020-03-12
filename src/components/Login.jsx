import React from "react";
import { Text, View } from "react-native";

class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>
          <title>Connexion</title>
          <div
            className=" display-4 card text-center text-white font-weight-bold "
            style={{ width: "100%" }}
          >
            <div className="card-header bg-success ">OSCIAL</div>
          </div>

          <div
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              width: "70%",
              marginTop: "5%",
              fontSize: "1em"
            }}
          >
            <p className="text-success font-weight-bold header">
              Bienvenu sur Oscial.
            </p>
            <p className="text-success font-weight-bold">
              Pour votre première utilisation, merci de bien vouloir vous
              identifier.
            </p>
          </div>

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
            <div className="form-group text-secondary row">
              <label className="col">Adresse E-mail</label>
              <input className="form-control col col-6" />
            </div>

            <div className="form-group text-secondary row ">
              <label htmlFor="exampleInputPassword1 " className="col">
                Password
              </label>
              <input
                type="password"
                className="form-control col col-6"
                id="exampleInputPassword1"
              />
            </div>

            <div className="row d-flex justify-content-around">
              <button
                type="submit"
                className="btn btn-success "
                style={{ width: "45%", float: "left", fontSize: "0.85em" }}
              >
                Inscription
              </button>

              <button
                type="submit"
                className="btn btn-success "
                style={{ width: "45%", float: "right", fontSize: "0.85em" }}
              >
                Connexion
              </button>
            </div>
          </form>
        </Text>
      </View>
    );
  }
}
export default Login;
