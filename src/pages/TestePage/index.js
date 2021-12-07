import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const TesteApp = () => {

  function prepararJson() {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": "alunodeveloper@developer.com",
        "password": "172051"
      })
    };
  }

  useEffect(() => {
    (async () => {



      // console.log(await Axios.post("https://192.168.9.157/api/login", {
      //   params: {
      //     "email": "alunodeveloper@developer.com",
      //     "password": "172051"
      //   }
      // }))


      var isAutenticado = false;
      await fetch("http://192.168.9.154/api/login", prepararJson())
        .then((Response) => (Response.json()))
        .then((resJson) => {
          var status = (resJson.status);
          if (status === 401) {
            isAutenticado = false;
          } else if (resJson.token != "") {
            isAutenticado = true;
            dispatch({
              type: LOGIN_VALUE,
              payload: resJson,
            })
          } else {
            imprimirAlert("Error, favor entrar em Contato");
          }
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
      console.log(isAutenticado);

    })();


  }, []);
  return (
    <View style={styles.centeredView}>
      <Text>Ola Neo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,

  },
  modalView: {
    width: "80%",
    height: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default TesteApp;