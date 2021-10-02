import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import ShopsHomeScreen from "../screens/ShopsHomeScreen";
import ProductsScreen from "../screens/ProductsScreen";

const Stack = createStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Available Shops"} component={ShopsHomeScreen}/>
            <Stack.Screen name={"Products"} component={ProductsScreen}/>
        </Stack.Navigator>
    );
};

export default ShopNavigator;