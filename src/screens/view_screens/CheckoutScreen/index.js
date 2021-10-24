import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import styles from "./styles";
import {FlatList, View} from "react-native";
import ProductPreviewCard from "../../../components/create_components/ProductPreviewCard";

const CheckoutScreen = () => {
    const navigator = useNavigation();
    const route = useRoute();
    const orderedProducts = route.params.orderedProducts;

    //could not think of a better name,
    //stores the product and the number of times it is ordered (quantity)
    const [productQuantity, setProductQuantity] = useState([]);

    useEffect(() => {
        //returns the number of times an object is found in an array
        const countOccurrences = (array, value) =>
            array.reduce((accumulated, currValue) => (currValue === value ? accumulated + 1 : accumulated), 0);
        //save unique entries
        const uniqueProducts = new Set(orderedProducts);
        //loop through the products and count how many times they are ordered
        uniqueProducts.forEach(product => {
            setProductQuantity(prevState => [...prevState, {
                product,
                quantity: countOccurrences(orderedProducts, product)
            }]);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={productQuantity}
                renderItem={({item}) => (
                    <ProductPreviewCard product={item.product} count={item.quantity}/>
                )}
                keyExtractor={item => item.product.id.toString() + item.product.name}
            />
        </View>
    );
};

export default CheckoutScreen;