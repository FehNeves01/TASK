import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';

import firebase from './../../config/firebaseconfig';
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");




  const loginFirebase = () => {


    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Task", { idUser: user.uid })
      })
      .catch((error) => {
        setErrorLogin(true);
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        console.log(errorCode, " ", errorMessage)
      });
  }


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Task", {idUser: user.uid })
      } else {
        // User is signed out
        // ...
      }
    });

  })


  return (
    <KeyboardAvoidingView
      behavior={Platform === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Task</Text>
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
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => loginFirebase()}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>

      }
      <Text style={styles.registration}>
        Se ainda nao tem um cadastro
        <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("NewUser")}> Click Aqui</Text>
      </Text>
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
}
