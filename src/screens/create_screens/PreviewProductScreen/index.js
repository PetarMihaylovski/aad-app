import React, {useState} from "react";
import {FlatList, Text, View, Pressable} from "react-native";
import styles from "./styles";
import productsInitial from "../../../../assets/data/products.json"
import ProductViewComponent from "../../../components/create_components/ProductViewComponent";

const PreviewProductScreen = () => {
    const [products, setProducts] = useState(productsInitial);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item}) => (
                    <ProductViewComponent product={item}/>
                )}
                keyExtractor={(item => item.id + item.name)}>
            </FlatList>
            <View>
                <Pressable style={styles.button}
                           onPress={()=>{}}>
                    <Text styles={styles.buttonText}>Create More</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default PreviewProductScreen;