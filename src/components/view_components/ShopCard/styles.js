import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '33%',
        width: '90%',
        margin:20,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        justifyContent: 'center',
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
    },
    description:{
        textAlign:'center'
    }
});

export default styles;