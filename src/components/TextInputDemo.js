import React, {Component} from 'react';
import {
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';

export default class TextInputDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    getUserName(value){
        this.setState({
            username:value
        });
    }
    getPassWord(value){
        this.setState({
            password:value
        });
    }
    Submit(){
        alert(this.state.username + ' - ' + this.state.password);
    }
    render(){
        return(
                <View>
                    <TextInput style={styles.styleInput} placeholder={'username'} 
                    onChangeText={(value)=>this.getUserName(value)}/>
                    <TextInput style={styles.styleInput} placeholder={'password'} 
                    secureTextEntry={true}
                    onChangeText={(value)=> this.getPassWord(value)}/>
                    <Button 
                    title = "Submit"
                    onPress={()=>this.Submit()}
                    />
                </View>
        )
    }
}
const styles = StyleSheet.create({
    styleInput: {
        paddingTop: 10,
        marginTop: 40,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0
    }
})
