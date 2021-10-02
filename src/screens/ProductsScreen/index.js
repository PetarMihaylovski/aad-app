import React, {useEffect, useState} from "react";
import {FlatList, View} from "react-native";
import styles from "./styles";
import ProductCard from "../../components/ProductCard";
import productsInitial from "../../../assets/data/products.json"

const ProductsScreen = ({navigation, route}) => {
    const shop = route.params.shop;
    const [products, setProducts] = useState(productsInitial)

    useEffect(() => {
        //TODO: here fetch data from the API itself
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