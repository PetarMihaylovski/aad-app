import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10
    },
    header:{
        marginTop:15,
        alignSelf:'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    total:{
        marginBottom: 15,
        alignSelf:'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    warningText: {
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red',
        fontSize: 16
    }
});

export default styles;