import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

function NewData({ list }) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [amount, setAmount] = useState("0");
  const [categorySelected, setCategorySelected] = useState(false);
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
  const formatDate = (input) => {
    // Remove non-numeric characters
    let formattedDate = input.replace(/\D/g, "");

    // Add slashes between day, month, and year
    if (formattedDate.length > 2) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
    }
    if (formattedDate.length > 5) {
      formattedDate = `${formattedDate.slice(0, 5)}/${formattedDate.slice(5)}`;
    }

    // Limit the length to 8 characters (dd/mm/yy)
    return formattedDate.slice(0, 8);
  };
  const handleDateChange = (text) => {
    const formattedDate = formatDate(text);
    setDate(formattedDate);
  };
  const AddButton = () => {
    if (date === "" || category === "Select Category" || amount === 0) {
      alert("Please fill in all fields");
    } else {
      list(date, category, amount);
      setDate("");
      setCategory("Select Category");
      setAmount("0");
    }
  };
  return (
    <View className="">
      <View className="flex-1 flex-row my-2">
        <Text className="font-bold text-lg m-2 w-1/3">Date</Text>
        <TextInput
          placeholder="dd/mm/yy"
          keyboardType="number-pad"
          className="border w-1/2 rounded-md text-center"
          onChange={setDate}
          onChangeText={handleDateChange}
          value={date}
          maxLength={8}
          required
        />
      </View>

      <View className="flex-1 flex-row my-2">
        <Text className="font-bold text-lg m-2 w-1/3">Category</Text>
        {categorySelected ? (
          <View className="border w-1/2 rounded-md text-center">
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => {
                setCategory(itemValue);
                setCategorySelected(false);
              }}
            >
              <Picker.Item label="Select Category" value="Select Category" />
              {categories.map((cat, index) => (
                <Picker.Item key={index} label={cat} value={cat} />
              ))}
            </Picker>
          </View>
        ) : (
          <TouchableOpacity className="border w-1/2 rounded-md text-center">
            <Text
              className="p-4"
              onPress={() => {
                setCategorySelected(true);
              }}
            >
              {category}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="flex-1 flex-row my-2">
        <Text className="font-bold text-lg m-2 w-1/3">Amount</Text>
        <TextInput
          placeholder="Amount"
          className="border w-1/2 rounded-md text-center"
          onChangeText={(e)=>{setAmount(e)}}
          keyboardType="number-pad" 
          required
        />
      </View>

      <TouchableOpacity style={{ alignSelf: "center", marginTop: 16 }}>
        <Button
          title="Add"
          onPress={() => {
            AddButton();
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default NewData;
