import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFF",
    paddingTop:20,
  },
  Tasks:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:5
  },
  deleteTask:{
    justifyContent:"center",
    paddingRight:15,
  },
  description:{
    width:"80%",
    alignContent:"flex-start",
    backgroundColor:"#172051",
    padding:12,
    paddingHorizontal:20,
    borderRadius:50,
    marginBottom:5,
    marginLeft:15,
    color:"#FFF",
    fontWeight:"bold"
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
  buttonLogout:{
    width: 60,
    height: 60,
    bottom:30,
    right:20,
    position:"absolute",
    backgroundColor:"#172051",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:5,
  },
  iconButton:{
    marginTop:-5,
    marginLeft:2,
    color:"#FFFF",
    fontSize:40,

  },
})

export default styles