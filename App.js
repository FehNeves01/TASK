import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Task     from "./src/pages/Task/"
import NewTask  from "./src/pages/NewTask/"
import Details  from "./src/pages/Details/"
import Login    from "./src/pages/Login/"
import NewUser  from "./src/pages/NewUser/"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Task"     component={Task}    options={{ headerTintColor: "#172051"}} />
        <Stack.Screen name="NewTask"  component={NewTask} options={{ headerTintColor: "#172051" }} />
        <Stack.Screen name="Details"  component={Details} options={{ headerTintColor: "#172051" }} />
        <Stack.Screen name="Login"    component={Login}   options={{ headerTintColor: "#172051"}} />
        <Stack.Screen name="NewUser"  component={NewUser} options={{ headerTintColor: "#172051" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


