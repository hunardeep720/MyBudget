import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Home from "./Screens/Home";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    // <View className="flex-1 justify-center items-center">
    //   <Text>App</Text>
    // </View>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
