import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: "90%",
        margin: 20,
        marginTop: 40
    },
    uploadImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginVertical: 7
    },
    uploadText:{
        fontWeight:'bold',
        fontSize:16
    },
    uploadButton: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 5,

    },
    imageContainer: {
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingBottom: 10
    },
    image: {
        aspectRatio: 4 / 3
    }
});

export default styles;