import React, {useState} from "react";
import {FlatList, Text, View, Pressable, Button, TextInput} from "react-native";
import Modal from "react-native-modal";

import styles from "./styles";
import productsInitial from "../../../../assets/data/products.json"
import ProductView from "../../../components/create_components/ProductViewComponent";
import ShopProductHeader from "../../../components/create_components/ShopProductHeader";

const PreviewProductScreen = () => {
    const [products, setProducts] = useState(productsInitial);
    const [isModalVisible, setModalVisibility] = useState(false);

    const [price, setPrice] = useState(0);
    const [stockAvailability, setStockAvailability] = useState(0);

    const toggleModal = () => {
        setModalVisibility(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item}) => (
                    <ProductView product={item}/>
                )}
                keyExtractor={(item => item.id + item.name)}>
            </FlatList>

            <Modal isVisible={isModalVisible}
                   onBackdropPress={toggleModal}>
                <View style={styles.modalContainer}>
                    <View>
                        <ShopProductHeader isCreateShop={false}/>
                        <View style={styles.modalWrapper}>
                            <View style={styles.inputsWrapper}>
                                <Text style={styles.text}>Price</Text>
                                <TextInput style={styles.input}
                                           keyboardType={'numeric'}
                                           value={price}
                                           onChangeText={setPrice}/>
                            </View>
                            <View style={styles.inputsWrapper}>
                                <Text style={styles.text}>Stock Availability</Text>
                                <TextInput style={styles.input}
                                           keyboardType={'numeric'}
                                           value={stockAvailability}
                                           onChangeText={setStockAvailability}/>
                            </View>
                            <Text style={styles.text}>Stock Availability</Text>
                            <TextInput style={styles.input}
                                       keyboardType={'numeric'}
                                       value={stockAvailability}
                                       onChangeText={setStockAvailability}/>
                        </View>
                    </View>
                    <Button title="Hide modal" onPress={toggleModal}/>
                </View>
            </Modal>

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