import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: "95%",
        margin: 10,
        marginTop:30
    },wrapper: {
        marginVertical: 7,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 7,
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14
    },
    button: {
        borderWidth: 1,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: "center",
        padding: 5,
        width: '100%'
    },
});

export default styles;