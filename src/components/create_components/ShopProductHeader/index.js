import React, {useEffect, useState} from "react";
import {Text, View, Image, Pressable, TextInput} from "react-native";
import styles from "./styles";
import Carousel, {Pagination} from "react-native-snap-carousel";

/**
 * eventually this would be split up, but if it is not, i am sorry
 * @param isCreateShop
 * @param name
 * @param description
 * @param image
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
                        ? <Image style={styles.image}
                                 source={{uri: image ? image.uri : 'https://i.picsum.photos/id/327/500/500.jpg?hmac=9kV_jy-Q_BAHmgMqOTXXJyOc8tWn3V0VS2h9bB8aWk0'}}
                        />
                        :
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