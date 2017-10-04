import React, {Component} from 'react';
import {
    TextInput,
    View,
    Platform,
    StyleSheet
} from 'react-native';

export default class DemoPlatform extends Component{
    render(){
        return(
                <View>
                    {console.log('Ten He Dieu Hanh:  '+ Platform.OS +'phien ban:  '+ Platform.Version)}
                </View>
        )
    }
}
