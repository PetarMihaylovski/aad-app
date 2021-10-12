import React, {useState, useEffect} from 'react';
import {View, FlatList, Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native';
import ShopCard from "../../../components/view_components/ShopCard";
import styles from "./styles";
import {Observer} from "mobx-react";
import {shopStore} from "../../../store/shop";

const ShopsScreen = ({}) => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: `Shops Available: ${shopStore.shops.length}`
        });
    }, []);

    return (
        <View style={styles.container}>
            <Observer> {()=>
                <FlatList
                    data={shopStore.shops}
                    renderItem={({item}) =>
                        <Pressable onPress={() => {
                            navigation.push('Products', {shop:item});
                        }}>
                            <ShopCard shop={item} navigation={navigation}/>
                        </Pressable>
                    }
                    keyExtractor={item => item.id.toString() + item.name}
                />
            }
            </Observer>
        </View>
    );
};

export default ShopsScreen;