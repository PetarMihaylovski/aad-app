import React, {useEffect} from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import 'react-native-gesture-handler';
import {shopStore} from "./src/store/shop";

export default function App() {
    useEffect(()=>{
        async function fetchShopData () {
            await shopStore.getShopsFromAPI();
        }
        fetchShopData();
    },[]);

    return (
        <RootNavigator/>
    );
}


