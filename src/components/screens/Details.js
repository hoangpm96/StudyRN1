import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Details extends Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> My Details </Text>
                <TouchableOpacity style={{backgroundColor: 'green'}}
                    onPress={()=> {this.props.navigation.goBack()}}
                >
                    <Text style={{ color: '#ffff', fontSize: 20, padding: 10}}>
                        Back
                    </Text>
                </TouchableOpacity>
                <Text>
                        {this.props.navigation.state.params.thamso}
                    </Text>
            </View>
        )
    }
    
}