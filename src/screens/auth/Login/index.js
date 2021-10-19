import React, {useEffect, useState} from "react";
import {Pressable, Image, Text, TextInput, View, useWindowDimensions} from "react-native";
import styles from "./styles";
import image from "../../../../assets/images/alogo-2.png";
import {emailValidator, passwordValidator} from "../../../validators/validators";
import {userStore} from "../../../store/userStore";
import {useNavigation} from '@react-navigation/native';
import ForgotPassword from "../../../components/auth/ForgotPasswordComponent";

const LoginScreen = ({}) => {
    const navigator = useNavigation();
    const {height} = useWindowDimensions();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        if (errorState) {
            setTimeout(() => setErrorState(false), 5000);
        }
    }, [errorState])

    const onLogin = async () => {
        const validEmail = emailValidator(email)
        const validPassword = passwordValidator(password);

        if (!validEmail || !validPassword) {
            setErrorState(true);
            return;
        }
        await userStore.login({email, password});
    };

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

            <ForgotPassword/>

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