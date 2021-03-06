import React, {useEffect, useState} from "react";
import {Text, View, Image, Pressable, TextInput} from "react-native";
import styles from "./styles";
import Carousel, {Pagination} from "react-native-snap-carousel";

/**
 * Another abomination of a component. Should be split in two components as well
 * Used in two place:
 * The create shop screen (but the carousel is hidden)
 * The create product screen (but the description field is hidden)
 *
 * @param isCreateShop if the component is on the create shop screen
 * @param name
 * @param description seen only on the create shop screen
 * @param image used in both places BUT passed with different data types | create shop screen - object | create product screen - array
 * @param handleNameInput
 * @param handleDescriptionInput
 * @param handleImageInput
 * @returns {JSX.Element}
 * @constructor
 */
const ShopProductHeader = ({
                               isCreateShop,
                               name,
                               description,
                               image,
                               handleNameInput,
                               handleDescriptionInput,
                               handleImageInput
                           }) => {
    // the current displayed image on the carousel
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View>
            <View style={styles.uploadImageContainer}>
                <Text style={styles.buttonText}>{isCreateShop ? "Store Front Picture" : "Product Picture"}</Text>
                <Pressable style={styles.button}
                           onPress={handleImageInput}>
                    <Text style={styles.buttonText}>UPLOAD</Text>
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                {
                    isCreateShop || !image
                        ?
                        // displays a single image on the create shop screen
                        <Image style={styles.image}
                                 source={{uri: image ? image.uri : 'https://via.placeholder.com/500'}}
                        />
                        :
                        // displays a scrollable carousel with multiple images on the create product modal
                        <View>
                            <Carousel
                                style={styles.image}
                                data={image}
                                renderItem={({item}) => (
                                    <Image style={styles.image}
                                           source={{uri: item.uri}}
                                    />
                                )}
                                onSnapToItem={(index) => setActiveIndex(index)}
                                sliderWidth={350}
                                itemWidth={350}
                                loop
                            />
                            <Pagination
                                dotsLength={image.length}
                                activeDotIndex={activeIndex}
                                dotContainerStyle={{height: 1}}
                                dotColor={'#f15454'}
                                inactiveDotColor={'#000000'}
                            />
                        </View>
                }
            </View>
            <View style={styles.inputsContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.inputTitle}>{isCreateShop ? "Store Name" : "Product Name"}</Text>
                    <TextInput style={styles.nameInput}
                               value={name}
                               onChangeText={handleNameInput}
                    />
                </View>
                {isCreateShop &&
                // displays the description field if on the create shop screen
                <View style={styles.nameContainer}>
                    <Text style={styles.inputTitle}>Description</Text>
                    <TextInput style={styles.descriptionInput}
                               multiline={true}
                               numberOfLines={3}
                               value={description}
                               onChangeText={handleDescriptionInput}
                    />
                </View>
                }
            </View>
        </View>
    );
};

export default ShopProductHeader;