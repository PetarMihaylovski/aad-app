import Modal from "react-native-modal";
import {Button, Text, TextInput, View} from "react-native";
import styles from "./styles";
import ShopProductHeader from "../ShopProductHeader";
import {Picker} from "@react-native-picker/picker";
import React, {useState} from "react";

const CreateProductModal = ({isVisible, toggle})=>{

    const [price, setPrice] = useState('');
    const [stockAvailability, setStockAvailability] = useState('');
    const [category, setCategory] = useState("test")

    return (
        <Modal isVisible={isVisible}
               onBackdropPress={toggle}>
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
                    <Button title="Discard" onPress={toggle} color='orangered'/>
                    <Button title="Save Changes" onPress={toggle}/>
                </View>
            </View>
        </Modal>
    );
};

export default CreateProductModal;