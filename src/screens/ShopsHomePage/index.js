import React, {useState} from 'react';
import {View, FlatList} from "react-native";
import shopsInitial from '../../../assets/data/shops.json'
import ShopCard from "../../components/ShopCard";
import styles from "./styles";

const ShopsHomePage = ({}) => {
    const [shops, setShops] = useState(shopsInitial);

    return (
        <View style={styles.container}>
            <FlatList
                data={shops}
                renderItem={({item}) =>

                    <ShopCard shop={item}/>
                }
                keyExtractor={item => item.id.toString() + item.name}
            />
        </View>
    );
};

export default ShopsHomePage;