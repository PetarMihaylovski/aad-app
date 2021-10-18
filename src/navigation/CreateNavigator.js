import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import CreateShopScreen from "../screens/create_screens/CreateShopScreen";
import PreviewProductScreen from "../screens/create_screens/PreviewProductScreen";
import {userStore} from "../store/userStore";
import LoginScreen from "../screens/auth/Login";
import {observer} from "mobx-react";

const Stack = createStackNavigator();

const CreateNavigator = observer(() => {
    return (
        <Stack.Navigator>
            {userStore.isAuthenticated ? (
                    <>
                        <Stack.Screen name={"Create Shop"} component={CreateShopScreen}/>
                        <Stack.Screen name={"New Products"} component={PreviewProductScreen}/>
                    </>)
                :
                (
                    <>
                        <Stack.Screen name={"Login"} component={LoginScreen}/>
                    </>)
                /*<Stack.Screen name={"New Products"} component={PreviewProductScreen}/>*/
            }
        </Stack.Navigator>
    );
});

export default CreateNavigator;