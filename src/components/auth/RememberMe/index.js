import React, {useState} from "react";
import CheckBox from "@react-native-community/checkbox";
import {Text, View} from "react-native";
import styles from './styles';

const RememberMeCheckbox = ({storeSession, handler }) => {

    return (
        <View style={styles.row}>
            <CheckBox
                disabled={false}
                value={storeSession}
                onValueChange={(newValue) => handler(newValue)}
            />
            <Text>Remember me?</Text>
        </View>
    );
}

export default RememberMeCheckbox;
