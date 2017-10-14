import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry
} from 'react-native';
export default class DemoLogin extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'red', alignItem: 'center', justifyContent: 'center'}}>
                <Text style={{flex: 1, color: 'white'}}>This is login page</Text>
            </View>
        )
    }
}