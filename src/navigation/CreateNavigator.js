import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import PreviewProductScreen from "../screens/create_screens/PreviewProductScreen";
import CreateShopScreen from "../screens/create_screens/CreateShopScreen";

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