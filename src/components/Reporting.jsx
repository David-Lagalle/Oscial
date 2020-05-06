import React from "react";
import { Text, View } from "react-native";
import Icon from "@mdi/react";
import {
  mdiAccountCircle,
  mdiArrowLeftCircle,      
} from "@mdi/js";

import "./Reporting.css";
 
export default class Reporting extends React.Component {
  render() {
    return (
      <View>
        <Text>
          <h1 id='titre'>Signalement</h1>
          <div className='Container'>
          <form>
            <label>Je souhaite signaler ce profil :</label>
            <select class="custom-select" id="inputGroupSelect01">
              <option value="1" className='option'>jean rené </option>
              <option value="2" className='option'>Marie christine </option>
              <option value="3" className='option'>Jean Michelle </option>
            </select>
            <label>Je souhaite signaler ce profil à cause de :</label>

            <div id='containerScroll'>
              <div className='Divcause'>
                <p className='cause'>Harcèlement</p>
                <p className='cause'>Menace</p>
                <p className='cause'>diffamation</p>
                <p className='cause'>droit d'auteur non respecté </p>
                <p className='cause'>trafic illégal</p>
                <p className='cause'>lien douteux</p>
                <p className='cause'>Xénophobe</p>
              </div>
              <div className='checkbox'>
                <input type="checkbox" id='prems'/>
                <br></br>
                <input type="checkbox" className='check'/>
                <br></br>
                <input type="checkbox" className='check'/>
                <br></br>
                <input type="checkbox" className='check'/>
                <br></br>
                <input type="checkbox" className='check'/>
                <br></br>
                <input type="checkbox" className='check'/>
                <br></br>
                <input type="checkbox" className='check'/>
              </div>
              
            </div>
            
              <div class="form-group">
                <label  for="exampleFormControlTextarea1">Je spécifie pourquoi je signale ce profil</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <Icon color="black" className='gauche' style={{ width: 40 }} path={mdiArrowLeftCircle} />
              <button type="submit"  className="btn btn-success "id='droite'>
                Envoyer
              </button>
              <div className='clear'></div>
        </form>
          </div>
          
          
        </Text>
      </View>
    );
  }
}
