import React, {Component} from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

class DemoImage extends Component{
    render(){
        return(
            <View>
                {/* <StatusBar hidden={true}/> */}
                {/* <Text> Demo Image </Text> */}
                {/* <Image style={{height: 200, width: 200}}source={require('../img/chi-anh.png')} /> */}
                
                {/* <Image
                style={styles.img}
                source={require('../img/chi-anh.png')}
                /> */}
                <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://fortunedotcom.files.wordpress.com/2017/08/gettyimages-630991466.jpg'}}
              />
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        img: {
            width: 400,
            height: 400
        }
    }
)
export default DemoImage;
