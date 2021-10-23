import React from "react";
import {Text, View, Image} from "react-native";
import styles from "./styles";
import Carousel from "react-native-snap-carousel";

const ProductCard = ({product}) => {
    return (
        <View style={styles.container}>
            <Carousel
                data={product.images}
                renderItem={({item}) => (
                    <Image style={styles.image}
                           source={{uri: BASE_URL + item.path}}
                    />
                )}
                sliderWidth={170}
                itemWidth={170}
                loop
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.price}</Text>
            </View>
        </View>
    );
}

export default ProductCard;