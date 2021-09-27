import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ShopsHomePage from "../screens/ShopsHomePage";


const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home Screen"}
                    component={ShopsHomePage}
                    options={{
                        title: "Shops Available",
                    }}
                />
                {/*<Stack.Screen*/}
                {/*    name={"Edit Party"}*/}
                {/*    component={PartyDetailsScreen}*/}
                {/*    options={{*/}
                {/*        title: "Edit a Party",*/}
                {/*    }}*/}
                {/*/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;