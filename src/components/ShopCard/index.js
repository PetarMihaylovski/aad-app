import React from 'react'
import {Text, View, Image, Pressable} from 'react-native';
import styles from "./styles";

const ShopCard = ({shop}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                   source={{uri: shop.imageURI}}/>
            <View style={styles.textContainer}>
                <Text style={styles.shopName}>{shop.name}</Text>
                <Pressable onPress={()=>{
                    //TODO: implement the see products handler
                }}>
                    <Text style={styles.seeMoreText}>See Products</Text>
                </Pressable>
        </View>
</View>
)
    ;
}

export default ShopCard;