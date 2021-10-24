import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import ShopsScreen from "../screens/view_screens/ShopsScreen";
import ProductsScreen from "../screens/view_screens/ProductsScreen";
import CheckoutScreen from "../screens/view_screens/CheckoutScreen";

const Stack = createStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Available Shops"} component={ShopsScreen}/>
            <Stack.Screen name={"Products"} component={ProductsScreen}/>
            <Stack.Screen name={"Checkout"} component={CheckoutScreen}/>
        </Stack.Navigator>
    );
};

export default ShopNavigator;