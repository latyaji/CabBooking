import { StyleSheet, Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  backgroundimg: {
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
    fontSize: 18,
    fontWeight: "400"
  },
  errorcontainer: {
    flexDirection: "row"
  },
  errortxt: {
    color: "red"
  },
  wrongicon: {
    width: 20,
    height: 20
  },
  righticon: {
    width: 15,
    height: 15,
    marginRight: 20,
    tintColor: "#56BA6F"
  },
  errorshow: {
    color: "red",
    fontWeight: "500"
  },
  txtheading: {
    fontSize: 18,
    paddingLeft: 18,
    fontWeight: "500"
  },
  backicon: {
    width: 30,
    height: 30,
    marginTop: 40,
    marginLeft: 10,
    tintColor: "#fff"
  },
  nexticon: {
    width: 30,
    height: 30,
    marginTop: 40,
    marginRight: 10,
    tintColor: "#000",
    transform: [{ rotate: '180deg' }]
  },
  topcontainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sectoptxt: {
    fontWeight: "bold",
    color: "#000",
    opacity: 0.6
  },
  sectopsubtxt:
  { 
    color: "#000", 
    opacity: 0.5 
  },
  nextbtncontainer:{ 
    backgroundColor: "#263D8E", 
    padding: 14, 
    marginLeft: 30,
    marginRight: 30, 
    borderRadius: 24, 
    flexDirection: "row", 
    justifyContent: "center"
   },
   nxtbtntxt:{ 
    color: "#fff", 
    fontWeight: "600", 
    fontSize: 18, 
    textAlign: "center" 
  },


})

export default styles;