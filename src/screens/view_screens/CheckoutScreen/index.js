import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import styles from "./styles";
import {Button, FlatList, Text, View} from "react-native";
import ProductPreviewCard from "../../../components/create_components/ProductPreviewCard";
import {store} from "../../../store/store";

/**
 * user has to be authenticated to reach this screen
 */
const CheckoutScreen = () => {
    const navigator = useNavigation();
    const route = useRoute();

    const orderedProducts = route.params.orderedProducts;
    const shop = route.params.shop;

    //could not think of a better name,
    //stores the product and the number of times it is ordered (quantity)
    //and the combined price (quantity * product price)
    const [productQuantity, setProductQuantity] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // price of the whole order

    /**
     * inits the productQuantity array
     */
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

    /**
     * calculates the total price every time
     * the quantity of product changes
     */
    useEffect(() => {
        // calculates the total
        const total = productQuantity.reduce((previousValue, currentValue) => {
            return (previousValue + currentValue.combinedPrice)
        }, 0);
        setTotalPrice(total);
    }, [productQuantity]);

    /**
     * handles incrementing the quantity of a given product
     * @param product the given product (...duh)
     */
    const increment = (product) => {
        // react state is immutable, so to increment the quantity of a single product
        // the whole state has to be remapped
        setProductQuantity(prevState => {
            return prevState.map((entry) => {
                // find the product who's quantity has been incremented
                if (product.id === entry.product.id) {
                    // calculate the new quantity
                    const quantity = entry.quantity + 1;
                    // return the incremented productQuantity
                    return {
                        quantity,
                        product: entry.product,
                        combinedPrice: entry.product.price * quantity
                    }
                } else {
                    // return the unchanged entries
                    return entry;
                }
            });
        });
    }

    /**
     * the opposite of the increment method
     * @param product do I really have to specify that again?
     */
    const decrement = (product) => {
        setProductQuantity(prevState => {
            return prevState.map((entry) => {
                if (product.id === entry.product.id) {
                    // math.max is used to prevent the quantity to go bellow 0
                    const quantity = Math.max(0, entry.quantity - 1);
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

    /**
     * handles placing a order
     */
    const placeOrder = () => {
        //maps the data according to the api's specification
        const orderData = productQuantity.map(entry => {
            return {
                product_id: entry.product.id,
                stock: entry.quantity
            }
        });

        store.placeOrder(orderData)
            .then((response) => {
                console.log('order placed successfully: ', response.data);

                // navigates back to the home screen
                navigator.reset({
                    index: 0, routes: [{
                        name: 'Home Screen'
                    }]
                });
            })
            .catch(error => {
                console.log('error occurred placing the order: ', error);
            });
    };

    return (
        <View style={styles.container}>

            <Text style={styles.header}>Your order from: {shop.name}</Text>
            <Text style={styles.total}>Total Order Price: {'\u20AC'} {totalPrice.toFixed(2)}</Text>

            {
                productQuantity.length > 0
                    ? <>
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
                        <Button title="Place Order" onPress={placeOrder}/>
                    </>
                    : <Text style={styles.warningText}>Cart was empty!</Text>
            }
        </View>
    );
};

export default CheckoutScreen;