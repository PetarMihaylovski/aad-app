import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '40%',
        height: '33%',
        borderWidth: 1,
        borderRadius: 20
    },
    image: {
        aspectRatio: 1,
        borderRadius: 20
    },
    textContainer: {},
    name: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center'
    },
    description: {},
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    }
});

export default styles;