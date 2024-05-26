import { View, ScrollView } from "react-native";
import Table from "../Components/Table";
import React, { useState } from "react";

const List = () => {
  let limitArray = [60, 100, 150, 200, 250, 300, 350, 400, 500];
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
      <View className="top-10 mb-20 px-10">
        <Table dataArray={data} limit={limitArray} />
      </View>
    </ScrollView>
  );
};
export default List;
