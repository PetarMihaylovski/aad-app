import React from "react";
import CheckBox from "@react-native-community/checkbox";
import {Text, View} from "react-native";
import styles from './styles';

/**
 * Stateless component that represents the remember me checkbox
 * @param storeSession initial checkbox value
 * @param handler whenever value changes
s */
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
