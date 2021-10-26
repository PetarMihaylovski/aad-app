import React, {useState, useEffect} from 'react';
import {View, FlatList, Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native';
import ShopCard from "../../../components/view_components/ShopCard";
import styles from "./styles";
import {Observer} from "mobx-react";
import {store} from "../../../store/store";

/**
 * Displays the listview with the existing shops
 * @returns {JSX.Element}
 * @constructor
 */
const ShopsScreen = ({}) => {
    const navigation = useNavigation();

    /**
     * changes the screen title
     */
    useEffect(() => {
        navigation.setOptions({
            title: `Shops Available: ${store.shops.length}`
        });
    }, [store.shops]);

    return (
        <View style={styles.container}>
            <Observer>{() => (
                <FlatList
                    data={store.shops}
                    renderItem={({item}) =>
                        <Pressable onPress={() => {
                            navigation.push('Products', {shop: item});
                        }}>
                            <ShopCard shop={item} navigation={navigation}/>
                        </Pressable>
                    }
                    keyExtractor={item => item.id.toString() + item.name}
                />
            )}
            </Observer>
        </View>
    );
};

export default ShopsScreen;