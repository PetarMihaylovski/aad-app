import React from "react";
import {Text, View, Image, Pressable} from "react-native";
import styles from "./styles";
import Carousel from "react-native-snap-carousel";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const ProductPreviewCard = ({product, count = 0, controlButtons, handleIncrement, handleDecrement}) => {

    return (
        <View style={styles.container}>
            <View>
                <Carousel
                    style={styles.image}
                    data={product.images}
                    renderItem={({item}) => (
                        <Image style={styles.image}
                               source={{uri: controlButtons ? item.uri : BASE_URL + item.path}}
                        />
                    )}
                    sliderWidth={125}
                    itemWidth={125}
                    loop
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name} numOfLines={2}>{product.name}</Text>
                <Text style={[styles.info, {alignSelf: 'flex-start'}]}>Price: {'\u20AC'} {product.price}</Text>
                {controlButtons && <Text style={styles.info}>Stock Availability: {product.stock}</Text>}
                <Text style={styles.info}>Category: {product.category}</Text>
                {!controlButtons &&
                <Text style={styles.info}>Total: {'\u20AC'} {(Number(product.price) * count).toFixed(2)}</Text>}
            </View>

            {controlButtons
                ? <View style={{paddingVertical: 15, justifyContent: 'space-between'}}>
                    <Pressable
                        onPress={() => {
                        }}>
                        <AntDesign name={'edit'} size={20}/>
                    </Pressable>
                    <Pressable
                        style={{alignSelf: 'flex-end'}}
                        onPress={() => {
                        }}>
                        <Entypo name={'trash'} size={20}/>
                    </Pressable>
                </View>
                : <View style={{paddingVertical: 15, justifyContent: 'space-between'}}>
                    <Pressable
                        onPress={() => {
                            handleIncrement(product);
                        }}
                        style={styles.button}>
                        <Text style={{fontSize: 16, color: '#474747'}}>+</Text>
                    </Pressable>
                    <Text style={{marginLeft: 7, fontSize: 16}}>{count}</Text>
                    <Pressable
                        onPress={() => {
                            handleDecrement(product);
                        }}
                        style={styles.button}>
                        <Text style={{fontSize: 16, color: '#474747'}}>-</Text>
                    </Pressable>
                </View>
            }
        </View>
    );
};

export default ProductPreviewCard;