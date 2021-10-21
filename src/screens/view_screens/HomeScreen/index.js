import React from "react";
import {Text, View} from "react-native";

const HomeScreen = ({name}) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{name}</Text>
    </View>
);

export default HomeScreen;