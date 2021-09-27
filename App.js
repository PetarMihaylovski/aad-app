import React from "react";
import {StyleSheet, View} from "react-native";
import ShopsHomePage from "./src/screens/ShopsHomePage";


export default function App() {
    return (
        <View style={styles.container}>
            <ShopsHomePage/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '90%',
        margin: 20,
        marginVertical:40,
    }
});