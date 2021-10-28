import React, {useEffect} from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import 'react-native-gesture-handler';
import {store} from "./src/store/store";
import * as ImagePicker from "expo-image-picker";
import * as SecureStore from "expo-secure-store";
import {userStore} from "./src/store/userStore";
import { LogBox } from "react-native";

export default function App() {
    useEffect(() => {
        LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

        async function fetchInitialAPIData() {
            store.getShopsFromAPI();
            console.log('data fetched!');
        }

        /**
         * checks for existing session and restore it if it exists
         * @returns {Promise<void>}
         */
        async function restoreSession() {
            await SecureStore.getItemAsync(SESSION_KEY)
                .then(response => {
                    const {user, token} = JSON.parse(response);
                    userStore.restoreSession({user, token});
                    console.log('session restored');
                })
                .catch(() => console.log('ongoing session not found'));
        }

        /**
         * asks for permission to access the gallery
         * used to upload pictures to models
         */
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
        // (1000*60) = 1 minute * X = X minutes // big shaq's quick mafths
        const interval = setInterval(async () => {
            await fetchInitialAPIData();
        }, (1000 * 60)*3);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <RootNavigator/>
    );
}


