import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '33%',
        width: '90%',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        justifyContent: 'center'
    },
    image: {
        aspectRatio: 16 / 9,
        borderRadius: 20,
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    shopName: {
        fontWeight: "bold",
        fontSize: 24
    },
    seeMoreText: {
        textDecorationLine: 'underline',
        fontSize:16,
        color: 'blue'
    }
});

export default styles;