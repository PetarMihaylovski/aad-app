import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '40%',
        width: '90%',
        borderWidth:1,
        borderColor:'#000000'
    },
    image:{
        aspectRatio:3/2,
        borderRadius: 20,
    },
    textContainer:{
        marginTop:20,
        justifyContent:'center',
        alignItems: 'center'
    },
    shopName:{
        fontWeight:"bold",
        fontSize:24
    }
});

export default styles;