import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%',
        height: 110,
        marginVertical:5,
        borderBottomWidth:1,
        borderColor:'lightgray'
    },
    image:{
        width:50,
        height:100,
        aspectRatio: 3/2
    },
    textContainer:{
        flex:1,
    },
    name:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:18
    },
    info: {
        fontSize: 16,
        alignSelf: 'flex-start',
        marginLeft: 15,
    }
});

export default styles;