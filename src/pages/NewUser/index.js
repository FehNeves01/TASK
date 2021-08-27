import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import firebase from './../../config/firebaseconfig';
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function NewUser({ navigation }) {


  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");



  // Para Novo Cadastro Funcionando 
  const createLoginFirebase = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Task", { idUser: user.uid })
      })
      .catch((error) => {
        setErrorLogin(true);
        var errorCode = error.code;
        var errorMessage = error.message;
        // Alert.alert(errorCode, " ", errorMessage)
      });
  }
  useEffect(() => {
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>New User</Text>
      <TextInput style={styles.input} placeholder={"Email"} type={"text"} value={email} onChangeText={text => setEmail(text)} />
      <TextInput style={styles.input} placeholder={"Password"} secureTextEntry={true} type={"text"} value={password} onChangeText={text => setpassword(text)} />
      {errorLogin === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons name="alert-octagram" size={24} color="#172051" />
          <Text style={styles.warningAlert}>E-mail ou password incorreto</Text>

        </View>
        :
        <View>
          <Text></Text>
        </View>
      }
      {email === "" || password === ""
        ?
        <TouchableOpacity
          disabled={true}
          style={styles.buttonLogin}
        >
          <Text style={styles.textButtonLogin}>Cadastrar</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => createLoginFirebase()}
        >
          <Text style={styles.textButtonLogin}>Cadastrar</Text>
        </TouchableOpacity>

      }

      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
}


