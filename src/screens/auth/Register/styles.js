import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        padding : 20,
        alignItems: 'center'
    },
    logo: {
        width : '70%',
        maxWidth : 300,
        maxHeight: 200
    },
    inputContainer: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius:5,
        paddingHorizontal: 10,
        marginVertical:5
    },
    button: {
        marginVertical: 10,
        backgroundColor:'#3b71f3',
        justifyContent: 'center',
        alignItems: "center",
        padding: 5,
        width: '80%',
        height: 40
    },row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: '#f15454',
    },
});

export default styles;