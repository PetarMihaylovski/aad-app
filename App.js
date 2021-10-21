import React, {useEffect} from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import 'react-native-gesture-handler';
import {store} from "./src/store/store";
import * as ImagePicker from "expo-image-picker";
import * as SecureStore from "expo-secure-store";
import {userStore} from "./src/store/userStore";

export default function App() {
    useEffect(() => {
        async function fetchInitialAPIData() {
            await store.getShopsFromAPI();
        }

        async function restoreSession() {
            await SecureStore.getItemAsync(SESSION_KEY)
                .then(response => {
                    const {user, token} = JSON.parse(response);
                    userStore.restoreSession({user, token});
                    console.log('session restored');
                })
                .catch(error => {
                    console.log('session not found', error);
                });
        }

        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();

        restoreSession();
        fetchInitialAPIData();
    }, []);

    return (
        <RootNavigator/>
    );
}


