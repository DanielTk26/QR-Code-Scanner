import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ScannerScreen from "./screens/ScannerScreen";

export default class App extends React.Component {
  
  render() {
   return <AppContainer />;
 
     }
  }

const TabNavigator = createBottomTabNavigator({
   Scanner: { screen: ScannerScreen },
 } );

const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center"
  }
});
