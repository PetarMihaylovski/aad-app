import React from 'react';
import {StyleSheet, View} from "react-native";

import ShopCard from "./src/components/ShopCard";

export default function App() {
    return (
        <View style={styles.container}>
            <ShopCard/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        margin: 10
    }
});