import React from "react";
import {FlatList, Text, View, Image, Pressable} from "react-native";
import styles from "./styles";

const CreateShopScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.uploadImageContainer}>
                <Text style={styles.uploadText}>Store Front Picture</Text>
                <Pressable style={styles.uploadButton}
                            onPress={()=> console.warn("be patient, it would be implemented")}>
                    <Text style={styles.uploadText}>UPLOAD</Text>
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                       source={{uri: "https://i.picsum.photos/id/327/500/500.jpg?hmac=9kV_jy-Q_BAHmgMqOTXXJyOc8tWn3V0VS2h9bB8aWk0"}}
                />
            </View>
        </View>
    );
}

export default CreateShopScreen;