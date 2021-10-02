import React from "react";
import {FlatList, Text, View, Image, Pressable, TextInput} from "react-native";
import styles from "./styles";

const CreateShopScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.uploadImageContainer}>
                <Text style={styles.buttonText}>Store Front Picture</Text>
                <Pressable style={styles.button}
                           onPress={() => console.warn("be patient, it would be implemented")}>
                    <Text style={styles.buttonText}>UPLOAD</Text>
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                       source={{uri: "https://i.picsum.photos/id/327/500/500.jpg?hmac=9kV_jy-Q_BAHmgMqOTXXJyOc8tWn3V0VS2h9bB8aWk0"}}
                />
            </View>
            <View style={styles.inputsContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.inputTitle}>Store Name</Text>
                    <TextInput style={styles.nameInput}/>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.inputTitle}>Description</Text>
                    <TextInput style={styles.descriptionInput}
                               multiline={true}
                               numberOfLines={3}/>
                </View>
            </View>
            <View style={styles.bottomButtonsContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.importText}>Import Products From CSV</Text>
                    <Pressable style={styles.button}
                               onPress={() => console.warn("COULD be implemented")}>
                        <Text style={styles.buttonText}>IMPORT</Text>
                    </Pressable>
                </View>
                <Text style={{
                    fontSize:18,
                    textAlign: 'center',
                    marginVertical: 10,
                    fontWeight:'bold'
                }}>or</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.importText}>Create Products Yourself</Text>
                    <Pressable style={styles.button}
                               onPress={() => console.warn("be patient, it would be implemented")}>
                        <Text style={styles.buttonText}>CREATE</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default CreateShopScreen;