import React, {useState, useEffect} from 'react';
import {View, FlatList, Pressable} from "react-native";
import shopsInitial from '../../../assets/data/shops.json'
import ShopCard from "../../components/ShopCard";
import styles from "./styles";

const ShopsHomePage = ({navigation}) => {
    const [shops, setShops] = useState(shopsInitial);

    useEffect(() => {
        //TODO: here fetch data from the API itself
        navigation.setOptions({
            title: "Shops Available: " + shops.length,
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={shops}
                renderItem={({item}) =>
                    <Pressable onPress={() => {
                        navigation.push("Products Page", {
                            shop: item
                        });
                    }}>
                        <ShopCard shop={item} navigation={navigation}/>
                    </Pressable>
                }
                keyExtractor={item => item.id.toString() + item.name}
            />
        </View>
    );
};

export default ShopsHomePage;