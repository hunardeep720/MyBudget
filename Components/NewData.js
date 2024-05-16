import React,{useState} from "react";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

function NewData({list}) {
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("Select Category");
    const [amount, setAmount] = useState(0);
    const [categorySelected, setCategorySelected] = useState(false);
    const categories = ["Food", "Clothing", "Entertainment", "Utilities", "Transportation", "Dining out", "Healthcare", "Rent", "Electronics", "Miscellaneous"];
    const AddButton = () => {
        if(date === "" || category === "Select Category" || amount === 0){
            alert("Please fill in all fields");
        }
        else{
            list(date,category,amount);
        }
    };
  return (
    <View className="top-32">
      <View className="flex-1 flex-row my-2">
        <Text className="font-bold text-lg m-2 w-1/3">Date</Text>
        <TextInput placeholder="Date" className="border w-1/2 rounded-md text-center" onChange={setDate} required />
      </View>

      <View className="flex-1 flex-row my-2">
        <Text className="font-bold text-lg m-2 w-1/3">Category</Text>
        {categorySelected?<Picker
          className="border w-1/2 rounded-md text-center"
          selectedValue={category}
          onValueChange={(itemValue) => { setCategory(itemValue); setCategorySelected(false); }}
        >
          <Picker.Item label="Select Category" value={category} />
          {categories.map((cat, index) => (
            <Picker.Item key={index} label={cat} value={cat} />
          ))}
        </Picker>:<TouchableOpacity className="border w-1/2 rounded-md text-center">
            <Text className="p-4" onPress={()=>{setCategorySelected(true)}}>{category}</Text>
        </TouchableOpacity>}
      </View>

      <View className="flex-1 flex-row my-2">
        <Text className="font-bold text-lg m-2 w-1/3">Amount</Text>
        <TextInput placeholder="Amount" className="border w-1/2 rounded-md text-center" onChange={setAmount} required />
      </View>

      <TouchableOpacity style={{ alignSelf: "center", marginTop: 16 }}>
        <Button title="Add" onPress={() => {AddButton()}} />
      </TouchableOpacity>
      <Text>{category}</Text>
    </View>
  );
}

export default NewData;
