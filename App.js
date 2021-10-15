import React, {useEffect} from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import 'react-native-gesture-handler';
import {store} from "./src/store/store";

export default function App() {
    useEffect(() => {
        async function fetchInitialAPIData() {
            await store.getShopsFromAPI();
        }
        fetchInitialAPIData();
    }, []);

    return (
        <RootNavigator/>
    );
}


