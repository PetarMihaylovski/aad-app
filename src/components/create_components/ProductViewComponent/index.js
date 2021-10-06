import React from "react";
import {Text, View, Image, Pressable, TextInput} from "react-native";
import styles from "./styles";

const ProductViewComponent = ({product}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{uri: product.imageURI}}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
            </View>
        </View>
    );
};

export default ProductViewComponent;