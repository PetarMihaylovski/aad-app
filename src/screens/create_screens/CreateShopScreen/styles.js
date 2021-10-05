import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: "95%",
        marginHorizontal: 10,
    },
    saveButton:{
        marginRight:20
    },
    bottomButtonsContainer: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingVertical: 5
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    importText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14
    },
    button: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 5,
        width: 130
    },
});

export default styles;