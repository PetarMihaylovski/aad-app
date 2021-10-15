import React, {useEffect, useLayoutEffect, useState} from "react";
import {Text, View, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native"
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
import ShopProductHeader from "../../../components/create_components/ShopProductHeader";
import {store} from "../../../store/store";

const CreateShopScreen = () => {
    const navigator = useNavigation();

    const [shopID, setShopID] = useState(-1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [products, setProducts] = useState([]);

    useLayoutEffect(() => {
        navigator.setOptions({
            headerRight: () => (
                <Pressable
                    style={styles.saveButton}
                    onPress={() => {
                        const shop = {
                            id: shopID,
                            name,
                            description,
                            products
                        };
                        store.addShop(shop);
                        setShopID(shop.id);
                        navigator.reset({
                            index: 0, routes: [{
                                name: 'Home Screen'
                            }]
                        });

                    }}>
                    <Entypo name={'check'} size={24}/>
                </Pressable>
            ),
        });
        // not the most optimal solution since it causes the button to reload every time
        // a name or description character is called, but I spent 7 hours to figure it out :D
    }, [name, description]);

    useEffect(() => {
        setShopID(Math.round(Math.random() * 10000));

        // clean up function, whenever the page unmounts
        return () => {
            store.saveProductsForShop(shopID, products);
        };
    }, [])

    const handleNameInput = (input) => {
        setName(input);
    };
    const handleDescriptionInput = (input) => {
        setDescription(input);
    };

    const saveProduct = (p) => {
        setProducts(prevState => {
            return [...prevState, {shop_id: shopID, ...p}];
        });
    };

    return (
        <View style={styles.container}>
            <ShopProductHeader isCreateShop={true}
                               handleNameInput={handleNameInput}
                               handleDescriptionInput={handleDescriptionInput}
            />

            <View style={styles.bottomButtonsContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.importText}>Import Products From CSV</Text>
                    <Pressable style={styles.button}
                               onPress={() => console.warn("COULD be implemented")}>
                        <Text style={styles.buttonText}>IMPORT</Text>
                    </Pressable>
                </View>
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    marginVertical: 2,
                    fontWeight: 'bold'
                }}>or</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.importText}>Create Products Yourself</Text>
                    <Pressable style={styles.button}
                               onPress={() => {
                                   navigator.push('New Products', {
                                       products,
                                       saveProduct
                                   });
                               }}>
                        <Text style={styles.buttonText}>CREATE</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default CreateShopScreen;