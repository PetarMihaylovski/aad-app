import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ShopsHomePage from "../screens/ShopsHomeScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import ProductsNavigator from "./ProductsNavigator";
import ProductsPage from "../screens/ProductsScreen";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            {/*    <Stack.Screen*/}
            {/*        name={"Test"}*/}
            {/*        component={BottomTabNavigator}*/}
            {/*        options={{*/}
            {/*            headerShown: false*/}
            {/*        }}*/}
            {/*    />*/}
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