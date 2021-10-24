import React, {useState} from "react";
import {Text, View, Image, Pressable} from "react-native";
import styles from "./styles";
import Carousel, {Pagination} from "react-native-snap-carousel";
import Fontisto from "react-native-vector-icons/Fontisto";

const ProductCard = ({product, handleAddToShoppingCart}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View style={styles.container}>
           <Text style={styles.name} numberOfLines={2} ellipsizeMode='tail'>{product.name}</Text>
            <View>
                <Carousel
                    data={product.images}
                    renderItem={({item}) => (
                        <Image style={styles.image}
                               source={{uri: BASE_URL + item.path}}
                        />
                    )}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    sliderWidth={170}
                    itemWidth={170}
                    loop
                />
                <Pagination
                    dotsLength={product.images.length}
                    activeDotIndex={activeIndex}
                    dotContainerStyle={{height: 1}}
                    dotColor={'#f15454'}
                    inactiveDotColor={'#000000'}
                />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.row}>
                    <Text style={styles.price}>{'\u20AC'} {product.price}</Text>
                    <Pressable style={{marginRight: 10, marginBottom: 5}}
                               onPress={()=>handleAddToShoppingCart(product)}>
                        <Fontisto name='shopping-basket-add' size={26}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default ProductCard;