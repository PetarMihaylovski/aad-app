import React, {useEffect, useLayoutEffect, useState} from "react";
import {FlatList, Pressable, View, Text} from "react-native";
import styles from "./styles";
import {useNavigation, useRoute} from "@react-navigation/native";
import ProductCard from "../../../components/view_components/ProductCard";
import {store} from "../../../store/store";
import Entypo from "react-native-vector-icons/Entypo";
import {Badge} from "react-native-elements";
import {userStore} from "../../../store/userStore";

const ProductsScreen = () => {
    const navigator = useNavigation();
    const route = useRoute();

    const shop = route.params.shop;

    const [products, setProducts] = useState([]); // all the products for the given shop
    const [orderedProducts, setOrderedProducts] = useState([]); // products added to the shopping cart

    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        // store data in the cache
        // fetch it every time this screen is rendered
        store.fetchProductsForShop(shop.id)
            .then(response => {
                if (response.status !== 200) {
                    console.log('API responded with status code: ', response.status)
                    setErrorState(true);
                }
                setProducts(prevState => [...prevState, ...response.data]);
                setErrorState(false);
            })
            .catch(error => {
                setErrorState(true);
                console.log('could not fetch the products: ', error);
            });

        navigator.setOptions({
            title: shop.name
        });
    }, []);

    /**
     * adds the shopping cart icon to the header
     * counts the number of products ordered,
     */
    useLayoutEffect(() => {
        navigator.setOptions({
            headerRight: () => (
                <Pressable
                    style={{marginRight: 20}}
                    onPress={() => {

                        // user has to be authenticated to checkout,
                        if (userStore.token) {
                            navigator.navigate('Checkout', {
                                shop,
                                orderedProducts
                            });
                        } else {
                            navigator.navigate('Login');
                        }
                    }}>

                    {
                        // adds the badge with the number of items in the cart
                        orderedProducts.length > 0 ?
                            <Badge value={orderedProducts.length}
                                   containerStyle={styles.badge}/>
                            : null
                    }
                    <Entypo name={'shopping-cart'} size={24}/>
                </Pressable>
            ),
        });
    }, [orderedProducts, userStore.token]);

    const addToShoppingCart = (item) => {
        setOrderedProducts(prevState => [...prevState, item]);
    }

    return (
        <View style={styles.container}>
            {
                !errorState
                    ? <FlatList
                        data={products}
                        renderItem={({item}) =>
                            <ProductCard product={item} handleAddToShoppingCart={addToShoppingCart}/>
                        }
                        keyExtractor={item => item.id.toString() + item.name}
                        numColumns={2}/>
                    :
                    <Text style={styles.errorState}>Could not fetch the products! Try again later!</Text>
            }
        </View>
    );
}

export default ProductsScreen;