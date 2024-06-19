import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, Button } from "react-native";
import Table from "../Components/Table";
import ChartBar from "../Components/ChartBar";
import { SetLimit } from "../Components/SetLimit";
import { loadDatabase } from "../Database/Data";

function Home() {
  const [isPressed, setIsPressed] = useState(false);
  const [newInfo, setNewInfo] = useState(false);
  const [limit, setLimit] = useState(false);
  let limitArray = [60, 100, 150, 200, 250, 300, 350, 400, 500];

  const categories = [
    "Food",
    "Clothing",
    "Entertainment",
    "Utilities",
    "Transportation",
    "Healthcare",
    "Rent",
    "Electronics",
    "Miscellaneous",
  ];

  useEffect(()=>{
    loadDatabase().then(()=>(console.log("database loaded"))).catch((err)=>{console.log('error while loading database',err)})
  },[]);

  const [data, setData] = useState([
    { date: "01/05/24", category: "Food", amount: "50" },
    { date: "02/05/24", category: "Clothing", amount: "30" },
    { date: "03/05/24", category: "Entertainment", amount: "20" },
    { date: "04/05/24", category: "Utilities", amount: "100" },
    { date: "05/05/24", category: "Transportation", amount: "40" },
    { date: "07/05/24", category: "Healthcare", amount: "80" },
    { date: "08/05/24", category: "Rent", amount: "500" },
    { date: "09/05/24", category: "Electronics", amount: "200" },
    { date: "10/05/24", category: "Miscellaneous", amount: "70" },
  ]);

  return (
    <ScrollView>
      <View className="text-center w-full flex-1">
        <Text className="absolute text-center flex-1 items-center w-full p-4 text-xl font-bold">
          Your Monthly Expenses
        </Text>
        <View className="w-full top-10 right-4 flex-1 flex-row bg bg-transparent">
          {newInfo ? null : (
            <TouchableOpacity
              onPress={() => setIsPressed(!isPressed)}
              activeOpacity={0}
              className="top-0 h-24 flex-1 items-start bg bg-transparent m-4"
              style={{
                backgroundColor: isPressed ? "rgba(0, 0, 0, 0)" : "transparent",
              }}
            >
              {limit ? (
                <Button
                  title="Apply"
                  onPress={() => {
                    setLimit(false);
                  }}
                />
              ) : (
                <Button
                  title="Set Limit"
                  onPress={() => {
                    setLimit(true);
                  }}
                />
              )}
            </TouchableOpacity>
          )}
          {limit ? null : (
            <TouchableOpacity
              onPress={() => setIsPressed(!isPressed)}
              activeOpacity={0}
              className="top-0 h-24 flex-1 items-end bg bg-transparent my-4"
              style={{
                backgroundColor: isPressed ? "rgba(0, 0, 0, 0)" : "transparent",
              }}
            >
              {newInfo ? (
                <Button
                  title="Done"
                  onPress={() => {
                    setNewInfo(false);
                  }}
                />
              ) : (
                <Button
                  title="New"
                  onPress={() => {
                    setNewInfo(true);
                  }}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
        <View className="relative">
          {limit ? <SetLimit categories={categories} limit={limitArray} /> : (<View>{newInfo ? (
            <View className="flex-1 flex-col">
              {/* <NewData list={AddButtonList} /> */}
            </View>
          ) : (
            <Table dataArray={data} limit={limitArray}/>
          )}</View>)}
        </View>
        <View className="relative mt-10">
          <ChartBar data={data} categories={categories} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
