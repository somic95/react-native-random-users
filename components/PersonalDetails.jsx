import { View, Text } from "react-native";
import React from "react";
import { format } from "date-fns/format";

export default function PersonalDetails({ user }) {
  return (
    <View className="border border-stone-700 p-4 rounded">
      <Text className="text-white font-bold text-2xl mb-2">
        Personal Details
      </Text>
      <View>
        <Text className="text-gray-400">
          <Text className="text-white font-bold text-base">Full Name : </Text>
          {user.name.title}. {user.name.first} {user.name.last}
        </Text>
        <Text className="text-gray-400">
          <Text className="text-white font-bold text-base">Age : </Text>
          {user.dob.age} years
        </Text>
        <Text className="text-gray-400">
          <Text className="text-white font-bold text-base">
            Date of Birth :{" "}
          </Text>
          {format(new Date(user.dob.date), "do MMMM yyyy")}
        </Text>
      </View>
    </View>
  );
}
