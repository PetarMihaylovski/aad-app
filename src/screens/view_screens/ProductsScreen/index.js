import React, {useEffect, useState} from "react";
import {FlatList, View} from "react-native";
import styles from "./styles";
import ProductCard from "../../../components/view_components/ProductCard";
import {store} from "../../../store/store";

const ProductsScreen = ({navigation, route}) => {
    const shop = route.params.shop;
    const [products, setProducts] = useState([])

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
            title: "Welcome to: " + shop.name
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item}) =>
                    <ProductCard product={item}/>
                }
                keyExtractor={item => item.id.toString() + item.name}
                numColumns={2}/>
        </View>
    );
}

export default ProductsScreen;