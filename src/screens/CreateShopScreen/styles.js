import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: "90%",
        margin: 20,
        marginTop: 40,
    },
    uploadImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginVertical: 7
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    button: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 5,
        width: 130

    },
    imageContainer: {
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingBottom: 10
    },
    image: {
        aspectRatio: 4 / 3
    },
    inputsContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    nameContainer: {
        marginVertical: 10
    },
    inputTitle: {
        marginBottom: 5,
        fontWeight: 'bold'
    },
    nameInput: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    descriptionInput: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    bottomButtonsContainer: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingVertical:10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    importText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default styles;