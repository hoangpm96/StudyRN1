import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
    AppRegistry
} from 'react-native';
import DemoLogin from './Login';
import ClickTime from './ClickTime';

export default class DemoNavigationiOS extends Component {
    render() {
        return (
            <NavigatorIOS initialRoute={{
                component: ClickTime,
                title: 'Trang chủ ClickTime',
                passProps: { myProp: 'foo' }
              }}
              style={{flex: 1}}
              />
        )
    }
}