import React, { Component } from 'react';
import { 
    View,
    Text,
} from 'react-native';

export default class Menu extends Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> {this.props.navigation.state.params.username} - {this.props.navigation.state.params.password} </Text>

            </View>
        )
    }
    
}