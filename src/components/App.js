import React, { Component } from 'react';
import { 
    AppRegistry,
    View
} from 'react-native';
import { SideMenu } from "./Router"

class App extends Component {
    render() {
        return(
            <SideMenu/>
        )
    }
    
}
 
export default App;