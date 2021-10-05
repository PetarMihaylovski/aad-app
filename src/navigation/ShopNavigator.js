import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import ShopsScreen from "../screens/view_screens/ShopsScreen";
import ProductsScreen from "../screens/view_screens/ProductsScreen";

const Stack = createStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Available Shops"} component={ShopsScreen}/>
            <Stack.Screen name={"Products"} component={ProductsScreen}/>
        </Stack.Navigator>
    );
};

export default ShopNavigator;