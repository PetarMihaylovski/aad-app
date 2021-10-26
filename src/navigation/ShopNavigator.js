import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import ShopsScreen from "../screens/view_screens/ShopsScreen";
import ProductsScreen from "../screens/view_screens/ProductsScreen";
import CheckoutScreen from "../screens/view_screens/CheckoutScreen";
import {userStore} from "../store/userStore";
import LoginScreen from "../screens/auth/Login";
import RegisterScreen from "../screens/auth/Register";
import {observer} from "mobx-react";

const Stack = createStackNavigator();

const ShopNavigator = observer(() => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Available Shops"} component={ShopsScreen}/>
            <Stack.Screen name={"Products"} component={ProductsScreen}/>
            {userStore.token ?
                (<>
                    <Stack.Screen name={"Checkout"} component={CheckoutScreen}/>
                </>)
                :
                (<>
                    <Stack.Screen name={"Login"} component={LoginScreen}/>
                    <Stack.Screen name={"Register"} component={RegisterScreen}/>
                </>)
            }
        </Stack.Navigator>
    );
});

export default ShopNavigator;