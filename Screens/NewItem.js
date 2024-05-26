import React from "react";
import { View, ScrollView } from "react-native";
import NewData from "../Components/NewData";

export default function NewItem() {
  return (
    <ScrollView>
      <View className="flex-1 justify-center items-center top-24 p-5">
        <NewData list={data} />
      </View>
    </ScrollView>
  );
}
