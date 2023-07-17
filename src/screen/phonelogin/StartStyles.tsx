import { StyleSheet, Dimensions } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    app: {
        marginHorizontal: "auto",
        maxWidth: 500
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        width: 100
    },
    img: {
        height: screenHeight,
        width: screenWidth,

    },
    phoneContainer: {
        width: '100%',
        height: 50,
        backgroundColor: "#4691C6",
        borderWidth: 1,
        borderColor: "#fff",
    },
    button: {
        marginTop: 30,
        width: '75%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#18d4d4',
    },
    textInput: {
        paddingVertical: 0,
        backgroundColor: '#4691C6',
        borderLeftWidth: 1,
        borderColor: "#fff",
        color: "#fff"

    },
    text: {
        color: 'white',
        fontWeight: '600'
    },
    backicon: {
        width: 30,
        height: 30,
        marginTop: 20,
        marginRight: 20,
        tintColor: "#fff",
        transform: [{ rotate: '180deg' }]
    },
    carimg: {
        width: 100,
        height: 80,
        resizeMode: "contain"
    },
    bottomcontainer: {
        marginTop: 260,
        margin: 15,
        justifyContent: "center"
    },
    bottomheadtxt: {
        color: "#fff",
        fontSize: 15
    },
    boldtxt: {
        fontWeight: "bold"
    },
    whitetxt: {
        color: "#fff"
    },
    phoneinputcontainer: {
        borderColor: "#fff",
        borderRadius: 12,
        marginTop: 40
    },
    topheadtxt: {
        color: "white",
        fontSize: 50
    }
});