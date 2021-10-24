import React, {useEffect, useLayoutEffect, useState} from "react";
import {FlatList, Pressable, View, Text} from "react-native";
import styles from "./styles";
import ProductCard from "../../../components/view_components/ProductCard";
import {store} from "../../../store/store";
import Entypo from "react-native-vector-icons/Entypo";
import {Badge} from "react-native-elements";

const ProductsScreen = ({navigation, route}) => {
    const shop = route.params.shop;
    const [products, setProducts] = useState([])
    const [orderedProducts, setOrderedProducts] = useState([]);

    useEffect(() => {
        // store data in cache and fetch it every time
        store.fetchProductsForShop(shop.id)
            .then(response => {
                if (response.status !== 200) {
                    console.log('response code: ', response.status)
                }
                setProducts(prevState => [...prevState, ...response.data]);
            })
            .catch(error => {
                console.log(error);
            });

        navigation.setOptions({
            title: shop.name
        });
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable
                    style={{marginRight: 20}}
                    onPress={() => {
                        navigation.navigate('Checkout', {
                            orderedProducts
                        });
                    }}>
                    {
                        orderedProducts.length > 0 ?
                            <Badge value={orderedProducts.length}
                                   containerStyle={styles.badge}/>
                            : null
                    }
                    <Entypo name={'shopping-cart'} size={24}/>
                </Pressable>
            ),
        });
    }, [orderedProducts]);

    const addToShoppingCart = (item) => {
        setOrderedProducts(prevState => [...prevState, item]);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item}) =>
                    <ProductCard product={item} handleAddToShoppingCart={addToShoppingCart}/>
                }
                keyExtractor={item => item.id.toString() + item.name}
                numColumns={2}/>
        </View>
    );
}

export default ProductsScreen;