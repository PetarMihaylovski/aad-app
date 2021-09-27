import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        margin:10,
        backgroundColor:'#d0d0d0'
    },
    image: {
        aspectRatio: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    textContainer: {
        paddingTop:3
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center',
        textDecorationLine:'underline'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginRight:15
    }
});

export default styles;