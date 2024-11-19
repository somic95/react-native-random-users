import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function RandomBtn({ getUser }) {
  return (
    <TouchableOpacity
      className="items-center border border-orange-400 rounded-xl bg-orange-400"
      onPress={getUser}
    >
      <Text className="py-2 px-4 text-black font-bold text-base italic">
        Get random another user
      </Text>
    </TouchableOpacity>
  );
}
