import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ShopsHomePage from "../screens/ShopsHomePage";
import ProductsPage from "../screens/ProductsPage";


const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home Page"}
                    component={ShopsHomePage}
                />
                <Stack.Screen
                    name={"Products Page"}
                    component={ProductsPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;