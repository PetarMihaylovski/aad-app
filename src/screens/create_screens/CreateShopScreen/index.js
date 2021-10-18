import React, {useEffect, useLayoutEffect, useState} from "react";
import {Text, View, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native"
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
import ShopProductHeader from "../../../components/create_components/ShopProductHeader";
import {store} from "../../../store/store";

const CreateShopScreen = () => {
    const navigator = useNavigation();

    const [name, setName] = useState('sample name');
    const [description, setDescription] = useState('sample description');
    const [products, setProducts] = useState([]);

    useLayoutEffect(() => {
        navigator.setOptions({
            headerRight: () => (
                <Pressable
                    style={styles.saveButton}
                    onPress={onSave}>
                    <Entypo name={'check'} size={24}/>
                </Pressable>
            ),
        });
        // not the most optimal solution since it causes the button to reload every time
        // a name or description character is called, but I spent 7 hours to figure it out :D
    }, [name, description, products]);

    const onSave = async () => {
        const shop = {
            user_id: 1, //TODO: has to be changed whenever login is implemented
            name,
            description,
        };

        /**
         *  allow me to explain what happens here:
         *  1) the shop is sent to the API
         *  2) the API's response (which is the newly created shop) is cached so no need of a new fetch afterwards
         *  3) then the new shop is passed to the next callback, so its id could be used in the
         *  product's body and the products could be successfully saved for this shop
         */

        await store.saveShop(shop)
            .then((response) => {
                if (response.status !== 201) {
                    console.log('saving a shop failed with status code: ', response.status);
                }
                store.addShop(response.data);
                return response.data;
            })
            .then(async (savedShop) => {
                // adds the db id of the saved shop to the products
                setProducts(prevState => prevState.map(product => {
                    product.shop_id = savedShop.id;
                    return product;
                }));
                if (products.length > 0) {
                    await store.saveProductsForShop(products);
                }
            })
            .catch((error) => {
                console.log('shop error: ', error);
            });

        navigator.reset({
            index: 0, routes: [{
                name: 'Home Screen'
            }]
        });
    }

    const handleNameInput = (input) => {
        setName(input);
    };
    const handleDescriptionInput = (input) => {
        setDescription(input);
    };

    const saveProduct = (p) => {
        setProducts(prevState => {
            return [...prevState, p];
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