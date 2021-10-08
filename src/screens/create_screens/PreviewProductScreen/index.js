import React, {useState} from "react";
import {FlatList, Text, View, Pressable, Button, TextInput} from "react-native";
import styles from "./styles";
import productsInitial from "../../../../assets/data/products.json"
import ProductView from "../../../components/create_components/ProductViewComponent";
import CreateProductModal from "../../../components/create_components/CreateProductModal";


const PreviewProductScreen = () => {
    const [products, setProducts] = useState(productsInitial);
    const [isModalVisible, setModalVisibility] = useState(false);

    const toggleModal = () => {
        setModalVisibility(!isModalVisible);
    };

    const handleNameInput = ()=>{

    };

    const handleDescriptionInput = ()=>{

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

            <CreateProductModal isVisible={isModalVisible} toggle={toggleModal}/>

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