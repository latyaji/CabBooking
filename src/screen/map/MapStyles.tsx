import { StyleSheet, Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    img: {
        height: screenHeight,
        width: screenWidth,

    },
    headerText: {
        fontSize: 38,
        fontWeight: "bold",
        color: "#000"
    },
    input: {
        marginLeft: 14,
        borderBottomWidth: 0.8,
    },
    typetxt:
    {
        color: "#fff",
        fontSize: 16, fontWeight: "bold",
    },
    largetxt: {
        color: "#fff", fontSize: 16,
    },
    backicon: {
        width: 30,
        height: 30,
        tintColor: "#000"
    },
    topcontainer: {
        margin: 20,
        paddingTop: 40
    },

    topconatinersubtxt: {
        fontWeight: "bold",
        color: "#000",
        opacity: 0.6
    },
    topconatinersubtxtsec: {
        color: "#000",
        opacity: 0.5
    },
    viewbtncontainer: {
        backgroundColor: "#263D8E",
        padding: 14,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 24,
        flexDirection: "row",
        justifyContent: "center"
    },
    viewbtntxt: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 18,
        textAlign: "center"
    },
    carimg: {
        width: 170,
        height: 80,
        resizeMode: "contain"
    },
    modaltopconatiner: {
        flexDirection: "row",
        marginBottom: 6,
        justifyContent:"space-around"
        
    },
    modalprofileimg: {
        width: 80,
        height: 80,
        resizeMode: "cover"
    },
    modalprofilecontainer: {
        paddingLeft: 12,
        paddingTop: 12
    },
    modalprofileheadtxt: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 18
    },
    modalprofilesubheadtxt: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalprofilesmalltxt: {
        color: "#fff",
        paddingRight: 12
    },
    whitetxt: { color: "#fff" },
    submitbtnconatiner: {
        backgroundColor: "#263D8E",
        padding: 14,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 24,
        flexDirection: "row",
        justifyContent: "center"
    },
    submitbtntxt:{ 
        color: "#fff", 
        fontWeight: "600", 
        fontSize: 18, 
        textAlign: "center" 
    },



})

