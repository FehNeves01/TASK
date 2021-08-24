import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import firebase from './../../config/firebaseconfig';
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const loginFirebase = () => {

  }

  useEffect(() => {
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Task</Text>
      <TextInput style={styles.input} placeholder={"Email"} type={"text"} value={email} onChangeText={text => setEmail(text)} />
      <TextInput style={styles.input} placeholder={"Password"} secureTextEntry={true} type={"text"} value={senha} onChangeText={text => setSenha(text)} />
      {errorLogin === true
        ?
        <View style={styles.contentAlert}>
            <MaterialCommunityIcons name="aler.circle" size={24} color="#172051" />
            <Text style={styles.warningAlert}>E-mail ou senha incorreto</Text>
            
        </View>
        :
        <View>
        </View>
      }

      touchableOpacity
    </KeyboardAvoidingView>
  );
}
