import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import ChartBar from "../Components/ChartBar";

const Spending = () => {
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
      <View className="top-10">
        <ChartBar data={data} categories={categories} />
      </View>
    </ScrollView>
  );
};
export default Spending;
