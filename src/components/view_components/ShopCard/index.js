import React from 'react'
import {useNavigation} from '@react-navigation/native';
import {Text, View, Image, Pressable} from 'react-native';
import styles from "./styles";
import {store} from "../../../store/store";

/**
 * Stateless component used
 * to display shop data
 */
const ShopCard = ({shop}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                   source={{uri: BASE_URL + shop.imageURI}}/>
            <View style={styles.textContainer}>
                <Text style={styles.shopName}>{shop.name}</Text>
                <Pressable onPress={() => {
                    navigation.navigate('Products', {shop});
                }}>
                    <Text style={styles.seeMoreText}>See Products</Text>
                </Pressable>
            </View>
            <Text style={styles.description}
                  numberOfLines={2}>
                {shop.description}
            </Text>
        </View>
    );
}

export default ShopCard;