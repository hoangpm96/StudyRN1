import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
    
    }
    showText(){
        this.props.navigation.navigate('ManHinh_Profile', {username: this.state.username, password: this.state.password});
        //this.props.navigation.navigate('DrawerOpen', {username: this.state.username});
        // alert(this.state.username + ' - ' + this.state.password);
    }
    render() {
        return(
            <View style={{ flex: 1, flexGrow: 1, justifyContent: 'center'}}>
                <View style = {styles.container}>
                <TextInput style = {styles.inputstyle} placeholder={'User Name'} 
                onChangeText={ (value) => this.setState({username: value})}
                />
                <TextInput style = {[ styles.inputstyle, {marginTop: 10, borderTopWidth: 1}]}
                 placeholder={'Password'} secureTextEntry={true}
                 onChangeText={ (value) => this.setState({password: value})}
                 />
                </View>
                <TouchableOpacity style={styles.submitStyle}
                onPress={()=>this.showText()}
                >
                    <Text style={styles.textStyle}>
                        Submit
                    </Text>
                </TouchableOpacity>
            
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    inputstyle: {
        height: 40,
        flex: 1,
        borderRadius: 4,
        marginRight: 10,
        marginLeft: 10,
        borderWidth: 1
    },
    container: {
        height: 100,
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
    },
    submitStyle: {
        backgroundColor: 'green', 
        marginTop: 10, 
        marginLeft: 10,         
        width: 100,
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#009933',
        justifyContent: 'center',
         alignItems: 'center'
    }
})