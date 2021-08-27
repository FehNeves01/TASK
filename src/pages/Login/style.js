import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:"#FFF",
    justifyContent:"center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios"? 0 : 50,
  },
  title:{
    fontSize:48,
    color:"#172051",
    marginBottom:10,
    fontWeight:"bold",

  },
  input:{
    width:300,
    marginTop:10,
    paddingTop:10,
    height:50,
    borderBottomWidth:1,
    borderColor:"#172051",
    marginLeft:"auto",
    marginRight:"auto",
    color:"#F92e6a",

  },
  contentAlert:{
    marginTop:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  warningAlert:{
    paddingLeft:10,
    color:"#F92e6a",
    fontSize:16,
   
  },
  buttonLogin:{
    width:200,
    height:50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#172051",
    borderRadius:50,
    marginTop:30,
  },
  textButtonLogin:{
    color: "#FFF",
  },
  registration:{
    marginTop:10,
    color: "#4d5156",
    fontSize:10
  },
  linkSubscribe:{
    color:"#1877f2",
    fontSize:10
  }
})