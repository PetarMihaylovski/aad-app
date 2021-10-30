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

    // initial state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [storeSession, setStoreSession] = useState(false);

    /**
     * removes the error state after 5 seconds
     */
    useEffect(() => {
        if (errorState) {
            setTimeout(() => setErrorState(false), 5000);
        }
    }, [errorState]);

    /**
     * login handler
     */
    const onLogin = () => {
        // validates the fields
        const validEmail = emailValidator(email)
        const validPassword = passwordValidator(password);

        if (!validEmail || !validPassword) {
            setErrorState(true);
            return;
        }

        // authenticate user and store the session
        userStore.login({email, password})
            .then(async () => {
                if (storeSession) {
                    // stores the session if user wants so
                    await SecureStore.setItemAsync(SESSION_KEY, JSON.stringify({
                        user: userStore.user,
                        token: userStore.token,
                        ownsShop : userStore.ownsShop
                    }));
                    console.log('session stored successfully!')
                }
            })
            .catch(error => {
                console.log('could not persist the session: ', error);
            });

        // does not navigate away from the screen because the navigator will
        // notice that the user token has been updated and will navigate accordingly
    };

    const handleRememberMeClick = (state) => {
        setStoreSession(state);
    }

    return (
        <View style={styles.container}>

            <Image
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
                source={image}/>

            {errorState && <Text style={{color: 'red'}}>Unprocessable data entered!</Text>}

            <View style={styles.inputContainer}>
                <Text style={styles.title}>Email</Text>
                <TextInput style={[errorState ? styles.errorState : null]}
                           value={email}
                           onChangeText={setEmail}
                           testID={'Login.emailInput'}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.title}>Password</Text>
                <TextInput style={[errorState ? styles.errorState : null]}
                           value={password}
                           onChangeText={setPassword}
                           secureTextEntry
                           testID={'Login.passwordInput'}
                />
            </View>

            <View style={styles.row}>
                <RememberMeCheckbox storeSession={storeSession} handler={handleRememberMeClick}/>
                <ForgotPassword/>
            </View>

            <Pressable style={styles.button}
                       onPress={onLogin}
                       testID={'Login.login'}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
            </Pressable>

            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <Pressable onPress={() => navigator.navigate('Register')} testID={'Login.register'}>
                    <Text style={styles.link}>Register</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default LoginScreen;