import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends React.Component{
    render(){
        return(   
			<View>
					
                <form class="text-center">
                    <div class="form-group">
                        <label>
                            Login :
                            <input type="text" class="form-control" name="login" />
                        </label>
                    </div>
                    <div class="form-group">
                        <label>
                            Password :
                            <input type="password" class="form-control" name="password" />
                        </label>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </form>

			</View>
        )
    }
}

export default Login