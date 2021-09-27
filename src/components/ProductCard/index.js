import React from "react";
import {Text, View, Image} from "react-native";
import styles from "./styles";

const ProductCard = ({}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: "https://i.picsum.photos/id/774/100/100.jpg?hmac=ecKifXlZM3csAuXkIO2A1NYGhUlnE3q_ZUz3Vf74BK4"}}/>
            <View style={styles.textContainer}>
                <Text style={styles.name}>Nice T-Shirt</Text>
                <Text style={styles.description} numberOfLines={2}>Cotton coated shirt, very comfy!</Text>
                <Text style={styles.price}>$17,50</Text>
            </View>
        </View>
    );
}

export default ProductCard;