import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "./Screens/Home";
import NewItem from "./Screens/NewItem";
import List from "./Screens/List";
import Spending from "./Screens/Spending";
import { UserProvider } from "./UseContext/UserContext";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Overview" component={Home} />
          <Drawer.Screen name="Add Item" component={NewItem} />
          <Drawer.Screen name="List" component={List} />
          <Drawer.Screen name="Spending" component={Spending} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
