import React, {useState} from "react";
import {Pressable, Image, Text, TextInput, View, useWindowDimensions} from "react-native";
import styles from "./styles";
import image from "../../../../assets/images/alogo-2.png";

const LoginScreen = ({}) => {
    const {height} = useWindowDimensions();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>

            <Image
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
                source={image}/>

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

            <View style={styles.forgotContainer}>
                <Pressable
                    onPress={() => {
                    }}
                >
                    <Text style={{textDecorationLine : 'underline'}}>Forgot your password?</Text>
                </Pressable>
            </View>

            <Pressable style={styles.loginButton}
                       onPress={() => {
                       }}>
                <Text style={{color:'white', fontWeight: 'bold'}}>Login</Text>
            </Pressable>
        </View>
    );
}

export default LoginScreen;