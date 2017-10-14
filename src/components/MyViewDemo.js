import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
    AppRegistry
} from 'react-native';
import ClickTime from './ClickTime';


export default class NavigatorIOSApp extends Component {
    render() {
      return (
        <NavigatorIOS
          initialRoute={{
            component: MyScene,
            title: 'My Initial Scene',
            passProps: { myProp: 'foo' },
            barStyle: 'blue'
          }}
          style={{flex: 1}}
        />
      );
    }
  }
  
  class MyScene extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      navigator: PropTypes.object.isRequired,
    }
  
    _onForward = () => {
      this.props.navigator.push({
        title: 'Scene ' + nextIndex,
      });
    }
  
    render() {
      return (
        <View>
          <Text>Current Scene: { this.props.title }</Text>
          <TouchableHighlight onPress={this._onForward}>
            <Text>Tap me to load the next scene</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
  class MyView extends Component {
    _handleBackPress() {
      this.props.navigator.pop();
    }
  
    _handleNextPress(nextRoute) {
      this.props.navigator.push(nextRoute);
    }
  
    render() {
      const nextRoute = {
        component: MyView,
        title: 'Bar That',
        passProps: { myProp: 'bar' }
      };
      return(
        <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
          <Text style={{marginTop: 200, alignSelf: 'center'}}>
            See you on the other nav {this.props.myProp}!
          </Text>
        </TouchableHighlight>
      );
    }
  }
  class NavvyIOS extends Component {
    _handleNavigationRequest() {
      this.refs.nav.push({
        component: MyView,
        title: 'Genius',
        passProps: { myProp: 'genius' },
      });
    }
  
    render() {
      return (
        <NavigatorIOS
          ref='nav'
          initialRoute={{
            component: MyView,
            title: 'Foo This',
            passProps: { myProp: 'foo' },
            rightButtonTitle: 'Add',
            onRightButtonPress: () => this._handleNavigationRequest(),
          }}
          style={{flex: 1}}
        />
      );
    }
  }