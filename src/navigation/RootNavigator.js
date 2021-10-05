import React from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CreateShopScreen from "../screens/create_screens/CreateShopScreen";
import ShopNavigator from "./ShopNavigator";
import CreateNavigator from "./CreateNavigator";

const Tab = createBottomTabNavigator();

const HomeScreen = ({name}) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{name}</Text>
    </View>
);

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#f15454'}}>

                <Tab.Screen
                    name={"Home Screen"}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesome5 name="home" size={25} color={color}/>
                        )
                    }}>
                    {() => <HomeScreen name={"Home Screen"}/>}
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