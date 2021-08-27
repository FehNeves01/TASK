import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../../config/firebaseconfig';
import style from "./style";

// Nativo do Expo
//Importacao de Icones
import { FontAwesome , MaterialCommunityIcons} from '@expo/vector-icons'



export default function Task({ navigation , route}) {
    const [task, setTask] = useState([]);
    const database = firebase.firestore();

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login");
          }).catch((error) => {
            // An error happened.
          });
          
    }
    function deleteTask(id) {
        database.collection(route.params.idUser).doc(id).delete();
    }

    useEffect(() => {
        //onSnapshot é uma funcao que escuta todas as alteracoes do banco, e ja atualiza o front
        // ta facil de entender
        // ta consultando o back do firebase na colecao Tasks
        database.collection(route.params.idUser).onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            })
            setTask(list);
        })
    }, [])

    return (
        <View style={style.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (<View style={style.Tasks}>


                        <Text
                            style={style.description}
                            onPress={() =>
                                navigation.navigate("Details", {
                                    id: item.id,
                                    description: item.description,
                                    idUser: route.params.idUser
                                })
                            }
                        >
                            {item.description}
                        </Text>
                        <TouchableOpacity style={style.deleteTask}
                            onPress={() => { deleteTask(item.id) }}>
                            <FontAwesome
                                name="minus-circle"
                                size={30}
                                color="#f92e6a"

                            ></FontAwesome>
                        </TouchableOpacity>
                    </View>)


                }}

            />
            <TouchableOpacity style={style.buttonNewTask}
                onPress={() => navigation.navigate("NewTask", {idUser: route.params.idUser})}>
                <Text style={style.iconButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonLogout}
                onPress={() => logout()}>
                <MaterialCommunityIcons name="logout" size={40} color="#FFF" />
            </TouchableOpacity>

        </View>
    );
}
