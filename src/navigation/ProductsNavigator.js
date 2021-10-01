import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopsHomePage from '../screens/ShopsHomeScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15454',
            headerShown: false
        }}>
            <Tab.Screen
                name={"Home"}
                component={ShopsHomePage}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="home" size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name={"Shops"}
                component={ShopsHomePage}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="shop" size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name={"Profile"}
                component={ShopsHomePage}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="user" size={25} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;