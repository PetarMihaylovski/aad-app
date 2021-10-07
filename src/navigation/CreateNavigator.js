import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import CreateShopScreen from "../screens/create_screens/CreateShopScreen";
import PreviewProductScreen from "../screens/create_screens/PreviewProductScreen";

const Stack = createStackNavigator();

const CreateNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Create Shop"} component={CreateShopScreen}/>
            <Stack.Screen name={"New Products"} component={PreviewProductScreen}/>
        </Stack.Navigator>
    );
};

export default CreateNavigator;