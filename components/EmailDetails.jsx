import { View, Text } from "react-native";
import React from "react";

export default function EmailDetails({ user }) {
  return (
    <View className="border border-stone-700 p-4 rounded">
      <Text className="text-white font-bold text-2xl mb-2">
        Email & Contact
      </Text>
      <View>
        <Text className="text-gray-400">
          <Text className="text-white font-bold text-base">Email : </Text>
          {user.email}
        </Text>
        <Text className="text-gray-400">
          <Text className="text-white font-bold text-base">Mobile : </Text>
          {user.phone}
        </Text>
      </View>
    </View>
  );
}
