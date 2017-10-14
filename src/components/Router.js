import React, { Component } from 'react';
import Home from './screens/Home';
import Menu from './screens/Menu';
import User from './screens/User';
import Details from './screens/Details';
import { StackNavigator,
        TabNavigator,
        DrawerNavigator
} from 'react-navigation';

export const HomeStack = StackNavigator({
    ManHinh_Home: {
        screen: Home,
        navigationOptions: {
            title: 'Trang Chủ'
        }
    },
    ManHinh_Detail: {
        screen: Details,
        navigationOptions: {
            title: 'Chi tiết'
        }
    },
})
export const UserStack = StackNavigator({
    Screen_User: {
        screen: User,
        navigationOptions: {
            title: 'User'
        }
    },
})

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'HOME'
        }
    },
    User: {
        screen: UserStack,
        navigationOptions: {
            tabBarLabel: 'USER'
        }
    }
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: 'blue',
            },
            labelStyle: {
                fontSize: 20,
            },
            tabStyle: {
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 10,
                paddingTop: 10
            },
            inactiveTintColor: 'red',
            activeTintColor: 'white',
            inactiveBackgroundColor: '#542e',
            activeBackgroundColor: '#723'
        }
    }
)

export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabs
    },
},
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <Menu/>
    }
)