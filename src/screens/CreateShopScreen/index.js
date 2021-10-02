import React from "react";
import {Text, View, Pressable} from "react-native";
import styles from "./styles";
import ShopProductHeader from "../../components/ShopProductHeader";

const CreateShopScreen = () => {
    return (
        <View style={styles.container}>

            <ShopProductHeader isCreateShop={true}/>

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
                    marginVertical: 2,
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