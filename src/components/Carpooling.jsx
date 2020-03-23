import React from "react";
import { Text, View } from "react-native";
import Icon from "@mdi/react";
import { mdiMapMarker,
        mdiCalendarMultiselect,
        mdiClockOutline,
        mdiArrowLeftCircle,      
} from "@mdi/js";

import "./Carpooling.css";

export default class Carpooling extends React.Component {
  render() {
    return (
      <View>
        <Text>
          <h1>Covoiturage</h1>
          <form
            className=" border border-secondary"
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


            <div className="form-row">
              <div className="col">
                <label htmlFor="dateTimeDeparture">Date et heure de départ</label>
                <input
                  type="text"
                  className="form-control"
                  id="dateTimeDeparture"
                  placeholder="jj/mm/aa"
                />
              </div>
              <Icon color="black" style={{ width: 40 }} path={mdiCalendarMultiselect} />
            </div>

            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput3"
                  placeholder="hh:mm"
                />
              </div>
              <Icon color="black" style={{ width: 40 }} path={mdiClockOutline} />
            </div>

            <div className="form-row">
              <div className="col">
                <label htmlFor="arrivalPlace">Lieu d'arrivée</label>
                <input
                  type="text"
                  className="form-control"
                  id="arrivalPlace"
                />
              </div>
              <Icon color="black" style={{ width: 40 }} path={mdiMapMarker} />
            </div>
 
            <div className="form-row">
              <div className="col">
                <label htmlFor="formGroupExampleInput5">Date et heure d'arrivée</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput5"
                  placeholder="jj/mm/aa"
                />
              </div>
              <Icon color="black" style={{ width: 40 }} path={mdiCalendarMultiselect} />
            </div>
            
         
        <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput6"
                  placeholder="hh:mm"
                />
              </div>
              <Icon color="black" style={{ width: 40 }} path={mdiClockOutline} />
            </div>        
            <Icon color="black" className='gauche' style={{ width: 40 }} path={mdiArrowLeftCircle} />
            <button type="submit"  className="btn btn-success "id='droite'>
              Rechercher
            </button>
            <div className="clear"></div>
          </form>
        </Text>
      </View>
    );
  }
}
