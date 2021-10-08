import React, {useState} from "react";
import {FlatList, Text, View, Pressable, Button, TextInput} from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import productsInitial from "../../../../assets/data/products.json"
import ProductView from "../../../components/create_components/ProductViewComponent";
import ShopProductHeader from "../../../components/create_components/ShopProductHeader";
import {Picker} from '@react-native-picker/picker';


const PreviewProductScreen = () => {
    const [products, setProducts] = useState(productsInitial);
    const [isModalVisible, setModalVisibility] = useState(false);

    //TODO: has to be parsed in the end, cuz it gives warning when
    // this is a numeric value
    const [price, setPrice] = useState('');
    const [stockAvailability, setStockAvailability] = useState('');
    const [category, setCategory] = useState("test")

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
                        </View>
                        <View>
                            <Text style={styles.text}>Chose Product's Category</Text>
                            <Picker
                                style={styles.picker}
                                selectedValue={category}
                                onValueChange={(itemValue, itemIndex) =>
                                    setCategory(itemValue)
                                }>
                                <Picker.Item label="Clothes" value="clothes"/>
                                <Picker.Item label="Shoes" value="shoes"/>
                                <Picker.Item label="Accessories" value="accessories"/>
                            </Picker>
                        </View>

                    </View>
                    <View style={styles.modalButtonContainer}>
                        <Button title="Discard" onPress={toggleModal} color='orangered'/>
                        <Button title="Save Changes" onPress={toggleModal}/>
                    </View>
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