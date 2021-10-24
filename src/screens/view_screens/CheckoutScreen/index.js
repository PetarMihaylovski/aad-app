import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import styles from "./styles";
import {FlatList, Text, View} from "react-native";
import ProductPreviewCard from "../../../components/create_components/ProductPreviewCard";

const CheckoutScreen = () => {
    const route = useRoute();
    const orderedProducts = route.params.orderedProducts;
    const shop = route.params.shop;

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

    const increment = (product) => {
        setProductQuantity(prevState => {
            return prevState.map((entry) => {
                if (product.id === entry.product.id) {
                    return {
                        quantity: Math.max(0, entry.quantity + 1), // prevents from going less than 0
                        product: entry.product
                    }
                } else {
                    return entry;
                }
            });
        });
    }

    const decrement = (product) => {
        setProductQuantity(prevState => {
            return prevState.map((entry) => {
                if (product.id === entry.product.id) {
                    return {
                        quantity: Math.max(0, entry.quantity - 1), // prevents from going less than 0
                        product: entry.product
                    }
                } else {
                    return entry;
                }
            });
        });
    }

    return (
        <View style={styles.container}>

            <Text style={styles.header}>Your order from: {shop.name}</Text>

            <FlatList
                data={productQuantity}
                extraData={productQuantity}
                renderItem={({item}) => (
                    <ProductPreviewCard product={item.product}
                                        count={item.quantity}
                                        handleIncrement={increment}
                                        handleDecrement={decrement}
                    />
                )}
                keyExtractor={item => item.product.id.toString() + item.product.name}
            />
        </View>
    );
};

export default CheckoutScreen;