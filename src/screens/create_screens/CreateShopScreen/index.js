import React, {useLayoutEffect, useState} from "react";
import {Text, View, Pressable, Alert} from "react-native";
import {useNavigation} from "@react-navigation/native"
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
import ShopProductHeader from "../../../components/create_components/ShopProductHeader";
import {store} from "../../../store/store";
import * as ImagePicker from "expo-image-picker";
import {shopValidator} from "../../../validators/validators";
import {userStore} from "../../../store/userStore";

/**
 * user has to be authenticated to access this screen
 */
const CreateShopScreen = () => {
    const navigator = useNavigation();

    // initial shop state
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    // products for the shop
    // see 'lifting state up' in react docs
    const [products, setProducts] = useState([]);

    const [errorState, setErrorState] = useState(false);

    /**
     * renders the save button in the header
     */
    useLayoutEffect(() => {
        navigator.setOptions({
            headerRight: () => (
                <Pressable
                    style={styles.saveButton}
                    onPress={onSave}>
                    <Entypo name={'check'} size={24}/>
                </Pressable>
            ),
        });
    }, [name, description, image, products]);

    /**
     * handles the save button action
     */
    const onSave = async () => {
        // validates the shop data
        const isValid = shopValidator({name, image, description});

        if (!isValid) {
            Alert.alert(
                "Field is empty",
                "Shop should have all the fields!",
                [
                    {
                        text: "OK",
                        style: "cancel"
                    },
                ]
            );
            return;
        }

        // constructs the shop object
        const shop = {
            user_id: userStore.user.id,
            name,
            image,
            description,
        };

        /**
         *  allow me to explain what happens here:
         *  1) the shop is sent to the API
         *  2) the API's response (which is the newly created shop) is cached so no need of a new fetch afterwards
         *  3) then the new shop is passed to the next callback, so its id could be used in the
         *  product's body and the products could be successfully saved for this shop
         */
        await store.saveShop(shop)
            .then((response) => {
                if (response.status !== 201) {
                    console.log('saving a shop failed with status code: ', response.status);
                }
                // cache the new shop, so it does not need to be fetched from the API
                // works only on the shop's creator phone
                store.addShop(response.data);
                return response.data;
            })
            .then(async (savedShop) => {
                // remaps the products array to add the shop id of the shop
                // that has been saved in the database already
                // furthermore, it maps the images array accordingly,
                // so they can be sent in the form data
                setProducts(prevState => prevState.map(product => {
                    product.shop_id = savedShop.id;
                    product.images = product.images.map(image => {
                        return {
                            uri: image.uri,
                            type: 'image/jpeg',
                            name: 'product_image.jpg',
                        };
                    });
                    return product;
                }));
                if (products.length > 0) {
                    return store.saveProductsForShop(products)
                }
            })
            .then((savedProducts) => {
                if (savedProducts.status !== 201) {
                    console.log('saving a product failed with status code: ', savedProducts.status);
                }
                console.log('products saved!: ', savedProducts.data);
            })
            .catch((error) => {
                setErrorState(true);
                console.log('saving the shop with its products failed: ', error);
            });

        if (errorState) {
            Alert.alert("Error occurred",
                "Something went wrong! Please try again later.",
                [
                    {
                        text: "Exit",
                        onPress: () => {
                            navigator.reset({
                                index: 0, routes: [{
                                    name: 'Home Screen'
                                }]
                            });
                        },
                        style: "cancel"
                    },
                ]);
        }

        navigator.reset({
            index: 0, routes: [{
                name: 'Home Screen'
            }]
        });
    }

    /**
     * upload button handler
     * when called, opens the gallery
     * and saves the chosen image
     */
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 2],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result);
        }
    };

    /**
     * adds a new product
     * @param p
     */
    const saveProduct = (p) => {
        setProducts(prevState => {
            return [...prevState, p];
        });
    };

    const handleNameInput = (input) => {
        setName(input);
    };

    const handleDescriptionInput = (input) => {
        setDescription(input);
    };

    return (
        <View style={styles.container}>
            <ShopProductHeader isCreateShop={true}
                               image={image}
                               handleNameInput={handleNameInput}
                               handleDescriptionInput={handleDescriptionInput}
                               handleImageInput={pickImage}
            />

            <View style={styles.bottomButtonsContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.importText}>Import Products From CSV</Text>
                    <Pressable style={styles.button}
                               onPress={() => console.warn("would not be implemented")}>
                        <Text style={styles.buttonText}>IMPORT</Text>
                    </Pressable>
                </View>
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    marginVertical: 2,
                    fontWeight: 'bold'
                }}>or</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.importText}>Create Products Yourself</Text>
                    <Pressable style={styles.button}
                               onPress={() => {
                                   navigator.push('New Products', {
                                       products,
                                       saveProduct
                                   });
                               }}>
                        <Text style={styles.buttonText}>CREATE</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default CreateShopScreen;