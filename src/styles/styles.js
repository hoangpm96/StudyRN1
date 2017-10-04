import React, {Component} from 'react';
import {
    StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'column'
    },
    header: {
        flex: 1,
         backgroundColor: '#FF9900',
         alignItems: 'center',
         justifyContent: 'center'
    },
    content: {
        flex: 4,
         backgroundColor: '#003300',
         alignItems: 'center',
         justifyContent: 'center'
    },
    button: {
        flex: 2,
        backgroundColor: '#3399FF',
        flexDirection: 'row',
    },
    footer: {
        flex: 1,
        backgroundColor: '#CC0033',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cong: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tru: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader: {
        padding: 5,
        fontSize: 25,
        color: 'white'
    },
    textContent: {
        fontSize: 100,
        color: 'white',
        padding: 10
    },
    text: {
        fontSize: 25,
        color: 'white'
    },
    buttontest: {
        flex: 1,
        backgroundColor: 'white', 
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default styles;