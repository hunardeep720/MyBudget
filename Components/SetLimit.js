import { View, Text, TextInput } from "react-native";
export const SetLimit = ({ categories, limit }) => {
  return (
    <View className="flex-1 flex-col px-10 w-full text-center items-center justify-center shadow-lg border">
      <View className="w-full border-b flex-1 flex-row">
        <Text className="w-1/2 text-xl font-bold py-4">Category</Text>
        <Text className="w-1/2 text-xl font-bold py-4">Set Limit</Text>
      </View>
      {categories.map((item,index) => (
        <View key={index} className="w-full my-2 flex-1 flex-row">
          <Text className="w-1/2 m-4">{item}</Text>
          <View className="w-1/2">
            <TextInput
              placeholder="Enter limit"
              keyboardType="number-pad"
              className="border rounded-md p-4 text-center"
              onChangeText={(e) => {
                limit[index] = e;
              }}
            />
          </View>
        </View>
      ))}

      <View className="w-1/2"></View>
    </View>
  );
};
