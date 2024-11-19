import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";
import EmailDetails from "./components/EmailDetails";
import Profile from "./components/Profile";
import RandomBtn from "./components/RandomBtn";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getUser() {
    try {
      setIsLoading(true);

      const res = await fetch("https://randomuser.me/api");
      const data = await res.json();
      setUsers(data.results);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ScrollView className="bg-stone-800">
      <StatusBar style="light" />

      {isLoading ? (
        <View className="flex-1 h-screen items-center justify-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        users.map((user) => (
          <View key={user.login.uuid} className="py-20 px-5 gap-y-5">
            <Text className="text-center font-extrabold text-3xl italic text-orange-400">
              Random User App!
            </Text>

            <View>
              <Profile user={user} />
            </View>
            <View>
              <PersonalDetails user={user} />
            </View>
            <View>
              <AddressDetails user={user} />
            </View>
            <View>
              <EmailDetails user={user} />
            </View>
            <View>
              <RandomBtn getUser={getUser} />
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}
