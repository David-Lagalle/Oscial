import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


class Covoiturage extends React.Component{
    render(){
        return(   
			    <View>
				    <Text>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                        <h1>Covoiturage</h1>
                        <form class=" border border-secondary"style={{marginRight:'auto', marginLeft:'auto', width:'80%', marginTop:'10%', padding:'30px'}}>
                            <div class="form-group ">
                                <label for="formGroupExampleInput">Lieu de départ</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" />
                            </div>
                            <p>Date et heure de départ</p>
                            <div class="form-group row">
                                
                                <input type="text" class="form-control col" id="formGroupExampleInput2" placeholder="jj/mm/aa"/>
                                <div class='col'>
                                    <img src="../image/iconlocalisation.png" alt="icone localisation"/>
                                </div>
                                <input type="text" class="form-control col" id="formGroupExampleInput3" placeholder="hh:mm"/>
                                <div class='col'></div>
                            </div>
                            <p >Lieu d'arrivée</p>
                            <div class="form-group">
                                <input type="text" class="form-control" id="formGroupExampleInput4"/>
                            </div>
                            <p>Date et heure d'arrivée</p>
                            <div class="form-group row">
                                <input type="text" class="form-control col" id="formGroupExampleInput5" placeholder="jj/mm/aa"/>
                                <div class='col'></div>
                                <input type="text" class="form-control col" id="formGroupExampleInput6" placeholder="hh:mm"/>
                                <div class='col'></div>
                            </div>
                            <button type="submit" class="btn btn-success">Sign in</button>
                        </form>
                    </Text>
                </View>
        )
    }
}
export default Covoiturage