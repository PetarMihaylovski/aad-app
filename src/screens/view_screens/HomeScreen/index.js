import React from "react";
import {Pressable, Text, View} from "react-native";
import useLayoutEffect from "react-native-web/dist/hooks/useLayoutEffect";
import {useNavigation} from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {userStore} from "../../../store/userStore";
import * as SecureStore from "expo-secure-store";
import {Observer} from "mobx-react";


const HomeScreen = ({}) => {
    const navigator = useNavigation();

    useLayoutEffect(() => {
        // adds the logout button in the header
        // whenever there is an existing session
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
        // called every time the variable in the dependencies changes
    }, [userStore.token]);

    /**
     * handles logout action by deleting the existing session,
     * thus logging out the current user.
     *
     * No error handling, since button is only visible when
     * there is an existing session
     */
    const onLogout = async () => {
        SecureStore.deleteItemAsync(SESSION_KEY)
            .then(() => {
                userStore.deleteSession();
            });
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;