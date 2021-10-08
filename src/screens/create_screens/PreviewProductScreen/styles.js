import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: "95%",
        margin: 10,
        marginTop: 30
    },
    modalContainer: {
        flex: 1,
        width: '100%',
        height: '90%',
        backgroundColor: 'white',
        flexDirection: 'column',
        borderRadius: 20,
    },
    modalWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '75%',
        marginHorizontal: 30
    },
    inputsWrapper: {
        marginVertical: 7,
        alignItems: 'center',
        width: '100%'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 7,
    },
    input: {
        height: 40,
        width: '45%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    picker: {
        borderWidth: 1,
    },
    modalButtonContainer: {
        marginTop: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14
    },
    button: {
        borderWidth: 1,
        marginBottom: 10,
        justifyContent: 'flex-end',
        alignItems: "center",
        padding: 5,
        width: '100%'
    },
});

export default styles;