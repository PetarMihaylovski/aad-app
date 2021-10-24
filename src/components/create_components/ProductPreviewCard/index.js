import React from "react";
import {Text, View, Image, Pressable} from "react-native";
import styles from "./styles";
import Carousel from "react-native-snap-carousel";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductPreviewCard = ({product}) => {
    return (
        <View style={styles.container}>
            <View>
                <Carousel
                    style={styles.image}
                    data={product.images}
                    renderItem={({item}) => (
                        <Image style={styles.image}
                               source={{uri: item.uri}}
                        />
                    )}
                    sliderWidth={125}
                    itemWidth={125}
                    loop
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name} numOfLines={2}>{product.name}</Text>
                <Text style={styles.info}>Price: {'\u20AC'} {product.price}</Text>
                <Text style={styles.info}>Stock Availability: {product.stock}</Text>
                <Text style={styles.info}>Category: {product.category}</Text>
            </View>

            <Pressable
                onPress={() =>{
                }}>
                <AntDesign name={'edit'} size={20}/>
            </Pressable>
        </View>
    );
};

export default ProductPreviewCard;