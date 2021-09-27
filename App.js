import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from "react-native";
import shopsInitial from './assets/data/shops.json'

import ShopCard from "./src/components/ShopCard";

export default function App() {
    const [shops, setShops] = useState(shopsInitial);

    return (
        <View style={styles.container}>
            <FlatList
                data={shops}
                renderItem={({item}) =>
                        <ShopCard shop={item}/>
                }
                keyExtractor={item => item.id.toString()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        margin: 20,
        marginVertical:40,
    }
});