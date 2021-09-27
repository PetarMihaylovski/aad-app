import React from 'react'
import {Text, View, Image} from 'react-native';
import styles from "./styles";

const ShopCard = ({shop}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                   source={{uri: shop.imageURI}}/>
            <View style={styles.textContainer}>
                <Text style={styles.shopName}>{shop.name}</Text>
            </View>
        </View>
    );
}

export default ShopCard;