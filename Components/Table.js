import React, { useState } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";

function Table({ dataArray }) {
  const [title, setTitle] = useState("More");
  const [limitedDataArray, setLimitedDataArray] = useState(
    dataArray.slice(0, 5)
  );
  const DataArrayChange = () => {
    if (title === "More") {
        setLimitedDataArray(dataArray);
        setTitle("Less");
    }else{
        setLimitedDataArray(dataArray.slice(0, 5));
        setTitle("More");
    }
  };
  return (
    <View className="absolute flex-1 flex-col top-32 mx-4 text-center justify-center items-center">
      <View className="flex-1 flex-row ">
        <View className="pl-4 py-4 border-black border-b-2 border-x-2 h-16">
          <Text className="font-extrabold text-lg w-16">Date</Text>
        </View>
        <View className="px-2 py-4 border-black border-b-2 border-r-2 h-16">
          <Text className="font-extrabold text-lg w-24">Category</Text>
        </View>
        <View className="p-4 border-black border-b-2 border-r-2 h-16">
          <Text className="font-extrabold text-lg w-20">Amount</Text>
        </View>
        <View className="p-4 border-black border-b-2 border-r-2 h-16 w-28">
          <Text className="font-extrabold text-lg">Actions</Text>
        </View>
      </View>
      {limitedDataArray.map((item, key) => (
        <View className="flex-1 flex-row" key={key}>
          <View className="pl-4 py-4 border-black border-b-2 border-x-2 h-16">
            <Text className="w-16">{item.date}</Text>
          </View>
          <View className="px-2 py-4 border-black border-b-2 border-r-2 h-16">
            <Text className="w-24">{item.category}</Text>
          </View>
          <View className="p-4 border-black border-b-2 border-r-2 h-16">
            <Text className="w-20">{item.amount}</Text>
          </View>
          <View className="px-2 border-black border-b-2 border-r-2 h-16 w-28">
            <TouchableOpacity style={{ marginRight: 10, height: "10px" }}>
              <Button title="Remove" color="red" onPress={() => {}} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: -10 }}>
              <Button title="Edit" color="blue" onPress={() => {}} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <TouchableOpacity>
        <Button title={title} onPress={() => {DataArrayChange()}} />
      </TouchableOpacity>
    </View>
  );
}

export default Table;
