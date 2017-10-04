import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    AppRegistry
} from 'react-native';
import styles from '../styles/styles';
export default class ClickTime extends Component {
    constructor(props){
        super(props);
        this.state = { 
            _result: 50 
        };
    }
    cong(){
        this.setState({ 
            _result: this.state._result + 1
          });
        }
    tru(){
         this.setState( { _result: this.state._result - 1   
         });
    }
    reset(){
        this.setState ({_result: 50});
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Title</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.textContent} > {this.state._result} </Text>
                </View>
                <View style={styles.button}>
                    <View style={styles.cong}>
                        <Text style={styles.text} onPress={()=>{this.cong()}}> Cong </Text>
                    </View>
                    <View style={styles.tru}>
                        <Text style={styles.text} onPress={() => {this.tru()}}> Tru </Text>
                    </View>
                    <View style={styles.buttontest}>
                    <Button 
                    onPress={() => {this.cong()}}
                    title="Click Me"
                    //color='blue'
                    //disabled="true"
                    />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text} onPress={()=>{this.reset()}}> Reset </Text>
                </View>
            </View>
        )
    }
}