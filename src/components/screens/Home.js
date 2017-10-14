import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Home extends Component {
    // static navigationOptions = {
    //     title: 'Trang Chủ'
    // }
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff'}}>
                <Text> My Home </Text>
                <TouchableOpacity style={{backgroundColor: 'green'}}
                    onPress={()=> {this.props.navigation.navigate('ManHinh_Detail', { thamso: 'Hello Hoang Phan'})}}
                >
                    <Text style={{ color: '#ffff', fontSize: 20, padding: 10}}>
                        Go to Details
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    
}