import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import firebase from '../../config/firebaseconfig'
import styles from './style'

export default function NewTask({ navigation, route }) {
  
  const database = firebase.firestore();
  const [description, setDescription] = useState("");
  
  function addTask(){
    database.collection(route.params.idUser).add({
      description: description,
      status: false
    })
    navigation.navigate("Task",{idUser: route.params.idUser} );
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.inputText} placeholder="Tarefa" onChangeText={text => setDescription(text)} />
      <TouchableOpacity style={styles.buttonNewTask} onPress={()=>addTask()}>
        <Text style={styles.iconButton}> Save </Text>
      </TouchableOpacity>
     </View>
  );
}
