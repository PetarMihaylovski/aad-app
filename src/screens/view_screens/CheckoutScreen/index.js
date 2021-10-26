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
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        //returns the number of times an object is found in an array
        const countOccurrences = (array, value) =>
            array.reduce((accumulated, currValue) => (currValue === value ? accumulated + 1 : accumulated), 0);
        //save unique entries
        const uniqueProducts = new Set(orderedProducts);
        //loop through the products and count how many times they are ordered
        uniqueProducts.forEach(product => {
            const quantity = countOccurrences(orderedProducts, product);
            setProductQuantity(prevState => [...prevState, {
                product,
                quantity,
                combinedPrice: product.price * quantity
            }]);
        });
    }, []);

    useEffect(() => {
        // calculates the total price
        const total = productQuantity.reduce((previousValue, currentValue) => {
            return (previousValue + currentValue.combinedPrice)
        }, 0);
        setTotalPrice(total);
    }, [productQuantity]);

    const increment = (product) => {
        setProductQuantity(prevState => {
            return prevState.map((entry) => {
                if (product.id === entry.product.id) {
                    const quantity = Math.max(0, entry.quantity + 1); // prevents from going less than 0
                    return {
                        quantity,
                        product: entry.product,
                        combinedPrice: entry.product.price * quantity
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
                    const quantity = Math.max(0, entry.quantity - 1); // prevents from going less than 0
                    return {
                        quantity,
                        product: entry.product,
                        combinedPrice: entry.product.price * quantity
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
            <Text style={styles.total}>Total Order Price: {'\u20AC'} {totalPrice.toFixed(2)}</Text>

            {
                productQuantity.length > 0
                    ? <FlatList
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
                    : <Text style={styles.warningText}>Cart was empty!</Text>
            }
        </View>
    );
};

export default CheckoutScreen;