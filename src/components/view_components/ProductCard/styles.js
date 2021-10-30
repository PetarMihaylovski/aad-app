import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1/2,
        borderRadius: 20,
        margin:10,
        backgroundColor:'rgba(208,208,208,0.66)'
    },
    image: {
        aspectRatio: 1,
        borderRadius: 20,
    },
    textContainer: {
        paddingTop:3,
        justifyContent:'center'
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center',
        textDecorationLine:'underline',
        marginVertical: 5
    },
    row:{
      flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 15,
    }
});

export default styles;