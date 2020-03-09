import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


class Login extends React.Component{
    render(){
        return(   
			    <View >
				    <Text>
                
                    <title>Connexion</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                  
                      <div class=" display-4 card text-center text-white font-weight-bold " style={{ width:'100%'}}>
                          <div class="card-header bg-success " >
                            OSCIAL
                          </div>
                      </div>

                    <div  style={{marginRight:'auto', marginLeft:'auto', width:'70%', marginTop:'5%', fontSize:'1em'}}>
                      <p class="text-success font-weight-bold header"  >Bienvenu sur Oscial.</p>
                      <p class="text-success font-weight-bold">Pour votre première utilisation, merci de bien vouloir vous identifier.</p>
                    </div>
            
                      <form class=" border border-secondary"style={{marginRight:'auto', marginLeft:'auto', width:'80%', marginTop:'10%', padding:'30px'}}>
                        
                        <div class="form-group text-secondary row">
                          <label class="col" >Adresse E-mail</label>
                          <input  class="form-control col col-4"/>
                        </div>
                        
                        <div class="form-group text-secondary row ">
                          <label for="exampleInputPassword1 " class="col">Password</label>
                          <input type="password" class="form-control col col-4" id="exampleInputPassword1"/>
                        </div>

                        <div class="row d-flex justify-content-around">
                          <button type="submit" class="btn btn-success " style={{width:'45%',float:'left',fontSize:'0.85em'}}>Inscription</button>
                         
                          <button type="submit" class="btn btn-success " style={{width:'45%',float:'right',fontSize:'0.85em'}} >Connexion</button>
                        </div>

                      </form> 
               
            
             </Text>
          </View>
              )
          }
        }
        export default Login