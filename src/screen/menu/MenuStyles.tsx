import {Text, View, ImageBackground,StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    img: {
        height: screenHeight,
        width: screenWidth,

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
    ridetxt: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#000"
    },
    headingtxt: {
        fontSize: 18,

    },
    headingtxtwo: {
        fontSize: 36,
        color: "#000"
    },
    tophead: {
        alignContent: "center",
        margin: 30,
        paddingTop: 40
    },
    onlinetxt: {
        fontSize: 18,
        color: "green",
        fontWeight: "600",
        textAlign: "center",
        opacity: 0.5
    },
    btncontainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    btnbox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: "#52A154",
        borderRadius: 12,
    },
    btnboxbg: {
        width: 15,
        height: 15,
        backgroundColor: "#52A154",
        borderRadius: 9,
        margin: 3
    },
    radiotxt: {
        marginLeft: 20
    },

    backicon: {
        width: 30,
        height: 30,
        tintColor: "#000"
    },

    goofflinebtnconatiner: {
        backgroundColor: "#EA3323",
        padding: 14,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 24,
        flexDirection: "row",
        justifyContent: "center"
    },
    goofflinebttxt: { 
        color: "#fff", 
        fontWeight: "600", 
        fontSize: 18, 
        textAlign: "center" 
    },
    gretericon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        tintColor: "#fff",
        transform: [{ rotate: '180deg' }]
    },
    onlineconatiner:{ 
        flexDirection: "row", 
        justifyContent: "center", 
        marginBottom: 20 
    }


});