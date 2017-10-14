import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
    TextInput,
    TouchableHighlight
 } from 'react-native';

 export default class LoginPokemon extends Component {
    _onPress(){
        alert(1)
    }
    constructor(props){
        super(props);
        background=require('../img/background.png');
        logo=require('../img/logo.png');
        facebook=require('../img/facebook.png');
        twitter=require('../img/twitter.png')
        google=require('../img/google.png')
    }
     render(){
         return(
             <Image source={background} style={styles.waperContainer}>
                <StatusBar hidden={true}/>
                    <View style={styles.waperLogo}>
                        <Image source={logo} style={styles.logoStyle}/>
                    </View>
                    <View style={styles.waperTextInput}>
                        <Text style={styles.styleRegister}>REGISTER</Text>
                        <TextInput placeholder={'User Name'} style={styles.TextInput}/>
                        <TextInput placeholder={'Password'} 
                        secureTextEntry={true}
                        style={styles.TextInput}/>
                        <TouchableHighlight style={styles.waperButton}
                        onPress={()=> this._onPress()}
                        >
                            <Text style={{color: 'white', fontSize: 14}}>LOGIN</Text>
                        </TouchableHighlight>
                        <View style={styles.row}>
                            <View style={styles.line}/>
                            <Text style={styles.textConnect}>OR WITH CONNECT</Text>
                            <View style={styles.line}/>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.rowSocial}>
                                <Image source={facebook} style={styles.logo}/>
                                <Text style={styles.textSocial}>Facebook</Text>
                            </View>
                            <View style={styles.rowSocial}>
                                <Image source={google} style={styles.logo}/>
                                <Text style={styles.textSocial}>Google</Text>
                            </View>
                            <View style={styles.rowSocial}>
                                <Image source={twitter} style={styles.logo}/>
                                <Text style={styles.textSocial}>Twitter</Text>
                            </View>
                        </View>
                    </View>
             </Image>
         )
     }
 }
 const styles= StyleSheet.create({
    waperContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch'
    },
    waperLogo: {
        flex: 1,
    },
    logoStyle: {
        width: 220,
        resizeMode: 'contain'
    },
    waperTextInput: {
        flex: 1,
        width: 350

    },
    TextInput: {
        borderColor: 'transparent',
        borderWidth: 1,
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 10,
        fontSize: 14,
        color: 'white',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
    },
    styleRegister: {
        fontSize: 14,
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        margin: 5,
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    },
    waperButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(226,39,44,0.5)',
    },
    row: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        height: 2,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    textConnect: {
        backgroundColor: 'transparent',
        color: 'rgba(0,0,0,0.5)',
        padding: 5
    },
    rowSocial: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 5
    },
    logo: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        margin: 4,

    },
    textSocial: {
        color: 'white',
        fontSize: 12,
        marginLeft: 10
    }
})