import React from 'react'
import {Text, View, Image} from 'react-native';
import styles from "./styles";

const ShopCard = ({}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                   source={{uri: "https://i.picsum.photos/id/418/300/200.jpg?hmac=_nF8-Wr4uJzTcMpTPNdWCz4RTJ6Y1zk12u1Fs1XDz40"}}/>
            <View style={styles.textContainer}>
                <Text style={styles.shopName}>The best shop around!</Text>
            </View>
        </View>
    );
}

export default ShopCard;