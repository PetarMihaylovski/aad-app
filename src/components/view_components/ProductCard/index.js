import React from "react";
import {Text, View, Image} from "react-native";
import styles from "./styles";

const ProductCard = ({product}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: product.imageURI}}/>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.price}</Text>
            </View>
        </View>
    );
}

export default ProductCard;