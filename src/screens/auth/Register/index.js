import React, {useEffect, useState} from "react";
import {Pressable, Image, Text, TextInput, View, useWindowDimensions} from "react-native";
import styles from "./styles";
import image from "../../../../assets/images/alogo-2.png";
import {emailValidator, passwordValidator, usernameValidator} from "../../../validators/validators";
import {userStore} from "../../../store/userStore";
import {useNavigation} from '@react-navigation/native';
import RememberMeCheckbox from "../../../components/auth/RememberMe";
import * as SecureStore from "expo-secure-store";

const RegisterScreen = ({}) => {
    const navigator = useNavigation();
    const {height} = useWindowDimensions();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [storeSession, setStoreSession] = useState(false);

    useEffect(() => {
        if (errorState) {
            setTimeout(() => setErrorState(false), 5000);
        }
    }, [errorState]);

    const onRegister = async () => {
        const validUsername = usernameValidator(username)
        const validEmail = emailValidator(email)
        const validPassword = passwordValidator(password);

        if (!validEmail || !validPassword || !validUsername) {
            setErrorState(true);
            return;
        }
        userStore.register({username, email, password})
            .then(async () => {
                if (storeSession) {
                    await SecureStore.setItemAsync(SESSION_KEY, JSON.stringify({
                        user: userStore.user,
                        token: userStore.token
                    }));
                    console.log('session stored!')
                }
            })
            .catch(error => {
                console.log('error saving the session: ', error)
            });
    };

    const handleCheckboxClick = (state) => {
        setStoreSession(state);
    }

    return (
        <View style={styles.container}>

            <Image
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
                source={image}/>

            {errorState && <Text>Wrong data!</Text>}


            <View style={styles.inputContainer}>
                <Text style={styles.title}>Username</Text>
                <TextInput style={styles.input}
                           value={username}
                           onChangeText={setUsername}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.title}>Email</Text>
                <TextInput style={styles.input}
                           value={email}
                           onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.title}>Password</Text>
                <TextInput style={styles.input}
                           value={password}
                           onChangeText={setPassword}
                           secureTextEntry
                />
            </View>

            <View style={styles.row}>
                <RememberMeCheckbox storeSession={storeSession} handler={handleCheckboxClick}/>
            </View>

            <Pressable style={styles.button}
                       onPress={onRegister}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>REGISTER</Text>
            </Pressable>

            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <Pressable onPress={() => {
                    navigator.navigate('Login');
                }}>
                    <Text style={styles.link}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default RegisterScreen;