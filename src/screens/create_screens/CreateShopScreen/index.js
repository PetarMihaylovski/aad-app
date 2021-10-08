import React, {useLayoutEffect, useState} from "react";
import {Text, View, Pressable} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native"
import Entypo from "react-native-vector-icons/Entypo";
import productsInitial from "../../../../assets/data/products.json"
import styles from "./styles";
import ShopProductHeader from "../../../components/create_components/ShopProductHeader";

const CreateShopScreen = () => {
    const navigator = useNavigation();
    const route = useRoute();


    const [products, setProducts] = useState(route.params ? route.params.products : productsInitial);

    useLayoutEffect(() => {
        navigator.setOptions({
            headerRight: () => (
                <Pressable
                    style={styles.saveButton}
                    onPress={() => {
                        console.warn('shop added')
                    }}>
                    <Entypo name={'check'} size={24}/>
                </Pressable>
            ),
        });
    }, []);

    const saveProduct = (p) => {
        setProducts(prevState => {
            return [...prevState, p];
        });
    };

    return (
        <View style={styles.container}>

            <ShopProductHeader isCreateShop={true}/>

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