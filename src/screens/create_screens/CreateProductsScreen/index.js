import React, {useState} from "react";
import {Text, View} from "react-native";
import styles from "./styles";
import ShopProductHeader from "../../../components/create_components/ShopProductHeader";

const CreateProductsScreen = () =>{
    const [products, setProducts] = useState([]);

    return (
        <View style={styles.container}>
            <ShopProductHeader style={styles.header} isCreateShop={false}/>
        </View>
    );
};

export default CreateProductsScreen;