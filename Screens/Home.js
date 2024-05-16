import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Button } from "react-native";
import Table from "../Components/Table";
import AddData from "../Components/AddData";
import NewData from "../Components/NewData";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

function Home() {
  const [isPressed, setIsPressed] = useState(false);
  const [newInfo, setNewInfo] = useState(false);
  const data = [
    { date: "01/05/24", category: "Food", amount: "$50" },
    { date: "02/05/24", category: "Clothing", amount: "$30" },
    { date: "03/05/24", category: "Entertainment", amount: "$20" },
    { date: "04/05/24", category: "Utilities", amount: "$100" },
    { date: "05/05/24", category: "Transportation", amount: "$40" },
    { date: "06/05/24", category: "Dining out", amount: "$45" },
    { date: "07/05/24", category: "Healthcare", amount: "$80" },
    { date: "08/05/24", category: "Rent", amount: "$500" },
    { date: "09/05/24", category: "Electronics", amount: "$200" },
    { date: "10/05/24", category: "Miscellaneous", amount: "$70" },
  ];
  const AddButtonList = ({date,category,amount}) => {
    data.push({date,category,amount});
  };
  return (
    <ScrollView>
      <View className="text-center w-full flex-1 items-center">
        <Text className="absolute p-4 text-xl font-bold">
          Your Monthly Expenses
        </Text>
        <View className="absolute top-10 right-4 w-24 flex-1 items-center bg bg-transparent">
          {newInfo ? null : (
            <TouchableOpacity
              onPress={() => setIsPressed(!isPressed)}
              activeOpacity={0}
              className="absolute top-0 w-24 flex-1 items-center bg bg-transparent my-4"
              style={{
                backgroundColor: isPressed ? "rgba(0, 0, 0, 0)" : "transparent",
              }}
            >
              <Button
                title="New"
                onPress={() => {
                  setNewInfo(true);
                }}
              />
            </TouchableOpacity>
          )}
        </View>
        {newInfo ? (
          <View className="flex-1 flex-col">
            <AddData
              newInfo={newInfo}
              setNewInfo={setNewInfo}
              isPressed={isPressed}
              setIsPressed={setIsPressed}
            />
            <NewData list={AddButtonList}/>
          </View>
        ) : (
          <Table dataArray={data} />
        )}

        <View className="h-screen"></View>
      </View>
    </ScrollView>
  );
}

export default Home;
