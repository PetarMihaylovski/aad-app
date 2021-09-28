import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopsHomePage from '../screens/ShopsHomePage';
import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();

const BottoomTabNavigatior = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#f15454'}}>
            <Tab.Screen
                name={"Shops"}
                component={ShopsHomePage}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="shop" size={25} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottoomTabNavigatior;