import React, {useState} from 'react';
import {View, FlatList, Pressable} from "react-native";
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
                    <Pressable onPress={()=> {
                        //TODO: implement screen navigation
                    }}>
                        <ShopCard shop={item}/>
                    </Pressable>
                }
                keyExtractor={item => item.id.toString() + item.name}
            />
        </View>
    );
};

export default ShopsHomePage;