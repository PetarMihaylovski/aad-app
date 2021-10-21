import React, {useEffect, useState} from "react";
import {Pressable, Image, Text, TextInput, View, useWindowDimensions} from "react-native";
import styles from "./styles";
import image from "../../../../assets/images/alogo-2.png";
import {emailValidator, passwordValidator} from "../../../validators/validators";
import {userStore} from "../../../store/userStore";
import {useNavigation} from '@react-navigation/native';
import ForgotPassword from "../../../components/auth/ForgotPasswordComponent";
import RememberMeCheckbox from "../../../components/auth/RememberMe";
import * as SecureStore from "expo-secure-store";

const LoginScreen = ({}) => {
    const navigator = useNavigation();
    const {height} = useWindowDimensions();

    const [email, setEmail] = useState('tester@gmail.com');
    const [password, setPassword] = useState('1234567890');
    const [errorState, setErrorState] = useState(false);
    const [storeSession, setStoreSession] = useState(false);

    useEffect(() => {
        if (errorState) {
            setTimeout(() => setErrorState(false), 5000);
        }
    }, [errorState])

    const onLogin = () => {
        const validEmail = emailValidator(email)
        const validPassword = passwordValidator(password);

        if (!validEmail || !validPassword) {
            setErrorState(true);
            return;
        }
        userStore.login({email, password})
            .then(async () => {
                if  (storeSession){
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
                <ForgotPassword/>
            </View>

            <Pressable style={styles.button}
                       onPress={onLogin}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
            </Pressable>

            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <Pressable onPress={() => navigator.navigate('Register')}>
                    <Text style={styles.link}>Register</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default LoginScreen;