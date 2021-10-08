import Modal from "react-native-modal";
import {Button, Text, TextInput, View} from "react-native";
import styles from "./styles";
import ShopProductHeader from "../ShopProductHeader";
import {Picker} from "@react-native-picker/picker";
import React, {useEffect, useState} from "react";

const CreateProductModal = ({isVisible, toggle, handleNewProduct}) => {

    const [id, setID] = useState(100);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stockAvailability, setStockAvailability] = useState('');
    const [category, setCategory] = useState('')

    const handleSaveButtonClick = () => {
        if ( validateProduct()){
            handleNewProduct({
                id,
                name,
                price,
                stockAvailability,
                category
            });
            prepNext();
            toggle();
        }
        else{
            console.warn("All fields should have data!")
        }

    };

    const prepNext = () => {
        setID(id + 1);
        setName('');
        setPrice('');
        setStockAvailability('');
        setCategory('');
    };

    const validateProduct = () => {
        // check if user has entered data in all the fields
        if (!name || !price || !stockAvailability || !category){
            return false;
        }
        return true;
    };

    return (
        <Modal isVisible={isVisible}
               onBackdropPress={toggle}>
            <View style={styles.modalContainer}>
                <View>
                    <ShopProductHeader isCreateShop={false}
                                       name={name}
                                       setName={setName}/>
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
                    <Button title="Save Changes" onPress={handleSaveButtonClick}/>
                </View>
            </View>
        </Modal>
    );
};

export default CreateProductModal;