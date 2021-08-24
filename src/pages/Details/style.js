import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FAFAFA"

  },
  label:{
    width:"90%",
    marginTop:20,
    fontSize: 16,
    marginLeft:28,
    color:"#172051",
  },
  inputText:{
    width:"90%",
    marginTop:10,
    padding:10,
    height:50,
    borderBottomWidth:1,
    borderColor:"#172051",
    marginLeft:"auto",
    marginRight:"auto",
  },
  buttonNewTask:{
    width: 60,
    height: 60,
    bottom:30,
    left:20,
    position:"absolute",
    backgroundColor:"#172051",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
  },
  iconButton:{
    color:"#FFFF",
    fontSize:15,
  },
})

export default styles