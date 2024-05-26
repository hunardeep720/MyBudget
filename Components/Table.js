import React, { useState } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";

function Table({ dataArray, limit }) {
  const [colorItem, setColorItem] = useState("darkgreen");
  const [itemLimit, setItemLimit] = useState(0);
  const [title, setTitle] = useState("More");
  const [limitedDataArray, setLimitedDataArray] = useState(
    dataArray.slice(0, 5)
  );
  const DataArrayChange = () => {
    if (title === "More") {
      setLimitedDataArray(dataArray);
      setTitle("Less");
    } else {
      setLimitedDataArray(dataArray.slice(0, 5));
      setTitle("More");
    }
  };
  const ChangeColor =(amount,limit)=>{
    if(amount>limit){
      setColorItem("darkred")
    }else{
      setColorItem("darkgreen")
    }
  }
  const totalAmount = dataArray
    .map((item) => parseFloat(item.amount))
    .reduce((a, b) => a + b, 0);
  const totalLimit = limit.reduce((a, b) => a + b, 0);
  return (
    <View className="flex-1 flex-col mx-4 text-center justify-center items-center">
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
      {limitedDataArray.map((item, index) => (
        <View className="flex-1 flex-row" key={index}>
          <View className="pl-4 py-4 border-black border-b-2 border-x-2 h-16">
            <Text className="w-16">{item.date}</Text>
          </View>
          <View className="px-2 py-4 border-black border-b-2 border-r-2 h-16">
            <Text className="w-24">{item.category}</Text>
          </View>
          <View className="p-4 border-black border-b-2 border-r-2 h-16">
            <Text className="w-20">
              ${item.amount} /{" "}
              <Text style={{color:`${colorItem}`}}>
                {item.category === "Food"
                  ? limit[0] 
                  : item.category === "Clothing"
                  ? limit[1]
                  : item.category === "Entertainment"
                  ? limit[2]
                  : item.category === "Utilities"
                  ? limit[3]
                  : item.category === "Transportation"
                  ? limit[4]
                  : item.category === "Healthcare"
                  ? limit[5]
                  : item.category === "Rent"
                  ? limit[6]
                  : item.category === "Electronics"
                  ? limit[7]
                  : item.category === "Miscellaneous"
                  ? limit[8]
                  : 0}
              </Text>
            </Text>
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
      <View className="flex-1 flex-row w-full">
        <View className="pl-4 py-4 w-full text-center flex-1 items-center  border-black border-b-2 border-x-2 h-16">
          <Text>
            Total: {totalAmount} /{" "}
            <Text
              style={
                totalAmount > totalLimit
                  ? { color: "darkgreen" }
                  : { color: "darkred" ,fontWeight:"bold"}
              }
            >
              {totalLimit}
            </Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Button
          title={title}
          onPress={() => {
            DataArrayChange();
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Table;
