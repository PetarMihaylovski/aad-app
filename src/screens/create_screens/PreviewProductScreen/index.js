import React, {useLayoutEffect, useState} from "react";
import {FlatList, Text, View, Pressable} from "react-native";
import styles from "./styles";
import ProductView from "../../../components/create_components/ProductPreviewCard";
import CreateProductModal from "../../../components/create_components/CreateProductModal";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation, useRoute} from "@react-navigation/native";

const PreviewProductScreen = () => {
    const navigator = useNavigation();
    const route = useRoute();
    const saveProduct = route.params.saveProduct;
    const existingProducts = route.params.products;

    const [products, setProducts] = useState(existingProducts);
    const [isModalVisible, setModalVisibility] = useState(false);

    useLayoutEffect(() => {
        navigator.setOptions({
            headerLeft: () => null,
            headerRight: () => (
                <Pressable
                    style={styles.saveButton}
                    onPress={() => {
                        navigator.navigate('Create Shop');
                    }}>
                    <Entypo name={'check'} size={24}/>
                </Pressable>
            ),
        });
    }, []);

    const toggleModal = () => {
        setModalVisibility(!isModalVisible);
    };

    const handleNewProduct = (product) => {
        // save products to the shop
        saveProduct(product);
        // save products to the local display array
        setProducts(prevState=> [...prevState, product]);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                extraData={products}
                renderItem={({item}) => (
                    <ProductView product={item} controlButtons/>
                )}
                keyExtractor={(item => item.id + item.name)}>
            </FlatList>

            <CreateProductModal isVisible={isModalVisible}
                                toggle={toggleModal}
                                handleNewProduct={handleNewProduct}/>

            <View>
                <Pressable style={styles.button}
                           onPress={toggleModal}>
                    <Text styles={styles.buttonText}>Create More</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default PreviewProductScreen;