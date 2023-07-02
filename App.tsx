import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from "./src/navigation/Navigator";
import { NavigationContainer } from "@react-navigation/native";



function App(): JSX.Element {


  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <Navigator/>
      </NavigationContainer>
    </SafeAreaView>
  );
}


export default App;
