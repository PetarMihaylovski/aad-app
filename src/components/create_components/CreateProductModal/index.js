import Modal from "react-native-modal";
import {Alert, Button, Text, TextInput, View} from "react-native";
import styles from "./styles";
import ShopProductHeader from "../ShopProductHeader";
import {Picker} from "@react-native-picker/picker";
import React, {useState} from "react";
import {productValidator} from "../../../validators/validators";
import * as ImagePicker from "expo-image-picker";

/**
 * This component is used to create new products
 * @param isVisible
 * @param toggle show/hide the modal
 * @param handleNewProduct
 * @returns {JSX.Element}
 */
const CreateProductModal = ({isVisible, toggle, handleNewProduct}) => {

    // initial state
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([]);

    const handleSaveButtonClick = () => {
        // validates the fields
        const isValid = productValidator({name, price, stock, category});
        if (isValid) {
            handleNewProduct({
                //random ID assigned, so the item can be identified uniquely by the flat list
                id: Math.round(Math.random() * 10000),
                name,
                price,
                stock,
                category,
                images
            });
            // closes the modal
            toggle();
            // resets the state
            clearForm();
        } else {
            console.warn("All fields should have data!")
        }
    };

    /**
     * handles the upload button action
     * opens the gallery and allows the user to pick up to 3 images
     */
    const pickImage = async () => {
        if (images.length === 3){
            Alert.alert("Image Limit Reached",
                "Cannot add more than 3 images!",
                [
                    {
                        text: "OK",
                        style: "cancel"
                    },
                ]);
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 2],
            quality: 1,
        });
        if (!result.cancelled) {
            setImages(prevState => [...prevState, result]);
        }
    };

    const handleNameInput = (input) => {
        setName(input);
    };

    const clearForm = () => {
        setName('');
        setPrice('');
        setStock('');
        setCategory('');
        setImages([]);
    };

    return (
        <Modal isVisible={isVisible}
               onBackdropPress={toggle}>
            <View style={styles.modalContainer}>
                <View>
                    <ShopProductHeader isCreateShop={false}
                                       name={name}
                                       handleNameInput={handleNameInput}
                                       image={images}
                                       handleImageInput={pickImage}/>
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
                                       value={stock}
                                       onChangeText={setStock}/>
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
                            <Picker.Item label="" value=""/>
                            <Picker.Item label="Clothes" value="clothes"/>
                            <Picker.Item label="Shoes" value="shoes"/>
                            <Picker.Item label="Accessories" value="accessories"/>
                        </Picker>
                    </View>

                </View>
                <View style={styles.modalButtonContainer}>
                    <Button title="Discard" onPress={() => {
                        clearForm();
                        toggle();
                    }} color='orangered'/>
                    <Button title="Save Changes" onPress={handleSaveButtonClick}/>
                </View>
            </View>
        </Modal>
    );
};

export default CreateProductModal;