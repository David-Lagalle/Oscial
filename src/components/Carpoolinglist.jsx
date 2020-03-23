import React from "react";
import { Text, View } from "react-native";
import Icon from "@mdi/react";
import { mdiFilterPlus,
    mdiMapSearchOutline,
    mdiDogSide,       
    mdiBagChecked,
    mdiArrowRightThick,
    mdiPlusCircle ,
} from "@mdi/js";



export default class Carpoolinglist extends React.Component {
  render() {
    return (
      <View>
        <Text> 
        <h1 style={{ width: "90%", display:"block",marginLeft:"auto", marginRight:"auto", textAlign:"center" }}>Covoiturage</h1>
        
        <div style={{ width: "80%",marginTop:"5%",display:"block",marginRight:"auto",marginLeft:"auto",}}>
        <Icon color="green" style={{ width: 30, float:"right", }} path={mdiFilterPlus} />
        <Icon color="green" style={{ width: 30 ,float:"right",marginRight:10}} path={mdiMapSearchOutline} /> 
        <Icon color="green" style={{ width: 30 ,float:"right",marginRight:10}} path={mdiPlusCircle} />
        </div>
        <div style={{clear:"both",}}></div>

        <div style={{ 
              marginTop:"5%",       
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
          
            
            }}>
        <div
            style={{
              textAlign:"center", 
              backgroundColor: "#ebfeed",
              border: "solid 1px lightgrey",
              borderRadius: "15px",
              width: "60%",
              float:'right',
            
            }}
          >
            <p style={{fontWeight:"600",}}  >Caroline Martin</p>
            <div
            className="row"
            >
            
              <p style={{fontWeight:"600",}}className="col">PARIS</p>
              <p className='col'></p>
              <p className='col'>RENNES</p>
            </div>

            <div
            className="row"
            >
              <p style={{fontWeight:"600",}}className="col">12/06/20</p>
             <Icon color="black"  style={{width:"15%", }} path={mdiArrowRightThick} />
              <p style={{fontWeight:"600",}} className='col'>12/06/20</p>
            </div>

            <div
            className="row"
            >
              <p style={{fontWeight:"600",}}className="col">12:00</p>
              <p className='col'></p>
              <p style={{fontWeight:"600",}} className='col'>14:30</p>
            </div>

          </div>

          <div
            style={{
              backgroundColor: "#ebfeed",
              border: "solid 1px lightgrey",
              borderRadius: "15px",
              width: "38%",
              float:'left',
            
            }}
            >  
              <div
              style={{width:"30%",float:"left",}}
              >
                <Icon color="black" style={{ width: "90%",marginTop:"40%",}} path={mdiBagChecked} />
              
              </div>

              <div
              style={{width:"65%",float:"right",}}
              >
                <p style={{textAlign:"center", fontWeight:"600",}}>bagages importants autorisés
                </p>
              </div>

              <div
              style={{clear:"both",}}
              >
              </div>
              
              <div
              style={{width:"30%",float:"left",}}
              >
                <Icon color="black" style={{ width: "90%",marginTop:"40%",}} path={mdiDogSide} />
              </div>

              <div
              style={{width:"65%",float:"right",}}
              >
                <p style={{textAlign:"center",fontWeight:"600",}}>animaux non autorisés 
                </p>
              </div>
            
            </div>
          </div>
        </Text>
      </View>
    );
  }
}
