import React, { Component } from 'react';
import { 
    AppRegistry,
    View
} from 'react-native';
import LoginPokemon from './pokemon/login/LoginPokemon';

class App extends Component {
    render() {
        return(
            <LoginPokemon/>
        )
    }
    
}
 
export default App;