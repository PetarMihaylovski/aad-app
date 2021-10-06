import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%',
        height: 75,
        marginVertical:5,
        borderBottomWidth:1,
        borderColor:'lightgray'
    },
    image:{
        width:50,
        height:75,
        aspectRatio: 3/2
    },
    textContainer:{
        flex:1,
    },
    productName:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:16
    },
    wrapper: {
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
});

export default styles;