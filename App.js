import React, {useEffect} from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import 'react-native-gesture-handler';
import {store} from "./src/store/store";
import * as ImagePicker from "expo-image-picker";

export default function App() {
    useEffect(() => {
        async function fetchInitialAPIData() {
            store.getShopsFromAPI();
        }
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
        fetchInitialAPIData();
    }, []);

    return (
        <RootNavigator/>
    );
}


