import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import CreateShopScreen from "../screens/create_screens/CreateShopScreen";
import PreviewProductScreen from "../screens/create_screens/PreviewProductScreen";
import {userStore} from "../store/userStore";
import LoginScreen from "../screens/auth/Login";
import {observer} from "mobx-react";
import RegisterScreen from "../screens/auth/Register";

const Stack = createStackNavigator();

/**
 * Navigator for the create sequences
 * The navigator itself gets notified when the user is authenticated
 * Thus DO NOT explicitly navigate to the desired place that is behind a login wall
 * Once the user is authenticated, they will automatically end up on the desired screen
 */
const CreateNavigator = observer(() => {
    return (
        <Stack.Navigator>
            {userStore.token ? (
                    // if user is authenticated, they have access to the create screens
                    <>
                        <Stack.Screen name={"Create Shop"} component={CreateShopScreen}/>
                        <Stack.Screen name={"New Products"} component={PreviewProductScreen}/>
                    </>)
                :
                (
                    // user is not authenticated,
                    // to gain access they have to either register or login
                    <>
                        <Stack.Screen name={"Login"} component={LoginScreen}/>
                        <Stack.Screen name={"Register"} component={RegisterScreen}/>
                    </>)
            }
        </Stack.Navigator>
    );
});

export default CreateNavigator;