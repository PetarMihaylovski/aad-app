import React, {useLayoutEffect, useState} from "react";
import {FlatList, Text, View, Pressable} from "react-native";
import styles from "./styles";
import productsInitial from "../../../../assets/data/products.json"
import ProductView from "../../../components/create_components/ProductViewComponent";
import CreateProductModal from "../../../components/create_components/CreateProductModal";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";

const PreviewProductScreen = () => {
    const navigator = useNavigation();

    const [products, setProducts] = useState(productsInitial);
    const [isModalVisible, setModalVisibility] = useState(false);

    useLayoutEffect(() => {
        navigator.setOptions({
            headerLeft:() =>null,
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

    const toggleModal = () => {
        setModalVisibility(!isModalVisible);
    };

    const handleNewProduct = (e) => {
        setProducts([...products, e]);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                extraData={products}
                renderItem={({item}) => (
                    <ProductView product={item}/>
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