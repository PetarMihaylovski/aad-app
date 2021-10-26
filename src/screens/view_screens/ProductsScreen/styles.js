import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -12,
        right: -10,
        zIndex: 1
    },
    container: {
        justifyContent: "center",
        margin: 10,
        width: '95%',
        height: '90%'
    },
    errorState: {
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red',
        fontSize: 16
    }
});

export default styles;