import React from "react";
import {Text} from "react-native";

const ProductsPage = ({navigation, route}) =>{
    const shop = route.params.shop;

    return (
        <>
            <Text>We are here from {shop.name}</Text>
        </>
    );
}

export default ProductsPage;