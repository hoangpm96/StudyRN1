
import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry
} from 'react-native';
export default class DemoRegister extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue', alignItem: 'center', justifyContent: 'center'}}>
                <Text style={{ flex: 1, color: 'white' }}>This is Register page</Text>
            </View>
        )
    }
    
}