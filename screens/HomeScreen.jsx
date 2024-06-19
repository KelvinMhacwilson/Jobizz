import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import FeaturedJobs from "../components/FeaturedJobs";
import PopularJobs from "../components/PopularJobs";

const HomeScreen = () => {
  const data = useRoute().params;

  return (
    <SafeAreaView className="px-[20px] space-y-4 mt-[20px] h-full pb-10">
      <View className="flex flex-row">
        <View className="flex-1">
          <Text className="text-[24px]  font-semibold ">
            {data?.name || "Username"}
          </Text>
          <Text className="text-[#AFB0B6]">
            {data?.email || "User@gmail.com"}
          </Text>
        </View>

        <View>
          <Image
            className="relative"
            source={require("../assets/Profile.png")}
          />
          <View className="bg-white absolute right-0 h-4 w-4 rounded-full items-center justify-center ">
            <View className="h-2 w-2  bg-red-700 rounded-full " />
          </View>
        </View>
      </View>

      <View className="flex-row items-center space-x-7">
        <View className="py-4 bg-gray-300 px-4 flex-1 rounded-xl flex-row items-center space-x-3 ">
          <Image source={require("../assets/Search.png")} />
          <TextInput
            placeholder="Search a job or position"
            className="text-[#AFB0B6]"
          />
        </View>
        <TouchableOpacity className="bg-gray-300  p-4 h-full w-[48px] rounded-xl items-center">
          <Image source={require("../assets/Filter.png")} />
        </TouchableOpacity>
      </View>

      <View>
        <View className="flex-row justify-between mb-4 mt-4">
          <Text className="font-semibold text-[16px]">Featured Jobs</Text>
          <Text className="text-[#AFB0B6]">See all</Text>
        </View>
        <FeaturedJobs />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
