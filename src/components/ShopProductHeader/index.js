import React from "react";
import {Text, View, Image, Pressable, TextInput} from "react-native";
import styles from "./styles";

const ShopProductHeader = ({isCreateShop}) => {
    return (
        <View>
            <View style={styles.uploadImageContainer}>
                <Text style={styles.buttonText}>{isCreateShop ? "Store Front Picture" : "Product Picture"}</Text>
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
                    <Text style={styles.inputTitle}>{isCreateShop ? "Store Name" : "Product Name"}</Text>
                    <TextInput style={styles.nameInput}/>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.inputTitle}>Description</Text>
                    <TextInput style={styles.descriptionInput}
                               multiline={true}
                               numberOfLines={3}/>
                </View>
            </View>
        </View>
    );
};

export default ShopProductHeader;