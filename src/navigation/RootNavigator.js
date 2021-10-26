import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigator";
import CreateNavigator from "./CreateNavigator";
import HomeScreen from "../screens/view_screens/HomeScreen";

const Tab = createBottomTabNavigator();

/**
 * The root navigator
 * On every tab.screen there is a nested navigator
 * for the respective routes
 * @returns {JSX.Element}
 */
const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#f15454'}}>

                <Tab.Screen
                    name={"Home Screen"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesome5 name="home" size={25} color={color}/>
                        )
                    }}>
                </Tab.Screen>

                <Tab.Screen
                    name={"Shops"}
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Entypo name="shop" size={25} color={color}/>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name={"Create Personal Shop"}
                    component={CreateNavigator}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesome5 name="user" size={25} color={color}/>
                        ),
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;