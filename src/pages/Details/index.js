import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'
import firebase from './../../config/firebaseconfig'

export default function Details({ navigation, route } ) {
  const database = firebase.firestore();
  const [descriptionEdit, setDescriptionEdit]=useState(route.params.description);
  const [idTask, setIdTask]=useState(route.params.id);
  
  function editTask(id){
    database.collection(route.params.idUser).doc(id).update({
      description:descriptionEdit,
      status: false
    })
    navigation.navigate('Task', {idUser: route.params.idUser});
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.inputText} placeholder="Details" onChangeText={text => setDescriptionEdit(text)} value={descriptionEdit}/>
      <TouchableOpacity style={styles.buttonNewTask} onPress={()=>editTask(idTask)}>
        <Text style={styles.iconButton}> Save </Text>
      </TouchableOpacity>
     </View>
  );
}
