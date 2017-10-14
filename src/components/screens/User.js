import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class User extends Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> My User </Text>
                <TouchableOpacity style={{backgroundColor: 'red'}}
                    onPress={()=> {this.props.navigation.navigate('DrawerOpen')}}
                >
                    <Text style={{ color: '#ffff', fontSize: 20, padding: 10}}>
                        Go to Menu
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    
}