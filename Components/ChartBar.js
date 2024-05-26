import React, { useState, useEffect } from "react";
import { View, useWindowDimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

function ChartBar({ data, categories }) {
  const [barDataset, setBarDataset] = useState(new Array(categories.length).fill(0));

  const aggregateData = () => {
    const updatedDataset = new Array(categories.length).fill(0);
    data.forEach((dataItem) => {
      const categoryIndex = categories.indexOf(dataItem.category);
      if (categoryIndex > -1) {
        updatedDataset[categoryIndex] += parseFloat(dataItem.amount);
      }
    });
    setBarDataset(updatedDataset);
  };

  useEffect(() => {
    aggregateData();
  }, [data]);

  const { width } = useWindowDimensions();
  const barData = {
    labels: categories,
    datasets: [{ data: barDataset }]
  };

  return (
    <View>
      <BarChart
        data={barData}
        width={width - 5}
        height={500}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          backgroundGradientFromOpacity: 1,
          backgroundGradientToOpacity: 1,
          color: (opacity = 1) => `rgba(34, 128, 176, ${opacity})`,
          barPercentage: 1
        }}
        verticalLabelRotation={90}
        showValuesOnTopOfBars
        style={{ borderColor: "black", borderWidth: 1 }}
      />
    </View>
  );
}

export default ChartBar;
