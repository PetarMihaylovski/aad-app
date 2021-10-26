import React from "react";
import {Pressable, Text, View} from "react-native";
import useLayoutEffect from "react-native-web/dist/hooks/useLayoutEffect";
import {useNavigation} from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {userStore} from "../../../store/userStore";
import * as SecureStore from "expo-secure-store";
import {Observer} from "mobx-react";


const HomeScreen = ({name}) => {
    const navigator = useNavigation();

    useLayoutEffect(() => {
        navigator.setOptions({
            headerRight: () => (
                userStore.token &&
                <Observer>{() => (
                    <Pressable
                        style={{flexDirection: 'row', padding: 20, justifyItems: 'space-between'}}
                        onPress={onLogout}>
                        <AntDesign name={'logout'} size={24}/>
                        <Text style={{marginLeft: 15}}>Logout</Text>
                    </Pressable>
                )}</Observer>
            ),
        });
    }, [userStore.token]);

    const onLogout = async () => {
        SecureStore.deleteItemAsync(SESSION_KEY)
            .then(() => {
                userStore.deleteSession();
            })
            .catch(error => {
                console.log("error deleting the session: ", error);
            });
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{name}</Text>
        </View>
    );
};

export default HomeScreen;