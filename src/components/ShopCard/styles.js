import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: 250,
        width: '90%',
        marginVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        justifyContent:'center'
    },
    image:{
        aspectRatio:16/9,
        borderRadius: 20,
    },
    textContainer:{
        marginTop:10,
        justifyContent:'center',
        alignItems: 'center'
    },
    shopName:{
        fontWeight:"bold",
        fontSize:24
    }
});

export default styles;