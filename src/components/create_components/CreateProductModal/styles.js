import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
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
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
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
        justifyContent: 'space-between',
    },
});

export default styles;