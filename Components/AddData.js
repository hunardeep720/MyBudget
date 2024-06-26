import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

function AddData({ newInfo, setNewInfo, isPressed, setIsPressed }) {
  return (
    <View className="right-0 w-24 flex-1 items-end bg bg-transparent">
      {newInfo ? (
        <TouchableOpacity
          onPress={() => setIsPressed(!isPressed)}
          activeOpacity={0}
          className="right-0 top-0 w-24 flex-1 items-center bg bg-transparent my-4"
          style={{
            backgroundColor: isPressed ? "rgba(0, 0, 0, 0)" : "transparent",
          }}
        >
          <Button
            title="Done"
            onPress={() => {
              setNewInfo(false);
            }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export default AddData;
