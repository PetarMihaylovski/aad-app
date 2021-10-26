import {Pressable, Text, View} from "react-native";
import React from "react";
import styles from "./styles";

/**
 * Stateless component used to display the forgot your password button
 */
const ForgotPassword = () => {
    return (
        <View style={styles.forgotContainer}>
            <Pressable
                onPress={() => alert('it wont be implemented, sorry!')}
            >
                <Text style={{textDecorationLine: 'underline'}}>Forgot your password?</Text>
            </Pressable>
        </View>
    );
}

export default ForgotPassword;