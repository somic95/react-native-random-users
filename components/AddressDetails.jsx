import { View, Text } from "react-native";
import React from "react";

export default function AddressDetails({ user }) {
  return (
    <View className="border border-stone-700 p-4 rounded">
      <Text className="text-white font-bold text-2xl mb-2">Address</Text>
      <View>
        <Text className="text-gray-400">
          <Text className="text-white font-bold text-base">Location : </Text>
          {user.location.street.number}, {user.location.street.name}
        </Text>
        <Text className="text-gray-400">
          <Text className="text-white font-bold text-base">
            City & State :{" "}
          </Text>
          {user.location.city}, {user.location.state}, {user.location.postcode}
        </Text>
        <Text className="text-gray-400">
          <Text className="text-white font-bold text-base">Country : </Text>
          {user.location.country}, {user.nat}
        </Text>
      </View>
    </View>
  );
}
