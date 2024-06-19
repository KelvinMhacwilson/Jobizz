import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";

const PopularJobs = () => {
  const popularJobs = [
    {
      title: "Jr Executive",
      pay: "96,000",
      companyName: "Burger King",
      location: "Los Angeles, US",
      image: require("../assets/BurgerKing.png"),
    },
    {
      title: "Product Manager",
      pay: "84,000",
      companyName: "Beats",
      location: "Florida, US",
      image: require("../assets/Beats.png"),
    },
    {
      title: "Marketing Specialist",
      pay: "78,000",
      companyName: "Netflix",
      location: "Los Angeles, US",
      image: require("../assets/Netflix.png"),
    },
    {
      title: "Business Analyst",
      pay: "82,000",
      companyName: "LinkedIn",
      location: "Sunnyvale, US",
      image: require("../assets/LinkedIn.png"),
    },
    {
      title: "Product Manager",
      pay: "86,000",
      companyName: "Facebook",
      location: "Florida, US",
      image: require("../assets/Facebook.png"),
    },
    {
      title: "Software Engineer",
      pay: "105,000",
      companyName: "Google",
      location: "New York, US",
      image: require("../assets/Google.png"),
    },
    {
      title: "Data Scientist",
      pay: "110,000",
      companyName: "Apple",
      location: "San Francisco, US",
      image: require("../assets/Apple.png"),
    },
    {
      title: "UI/UX Designer",
      pay: "95,000",
      companyName: "Microsoft",
      location: "Seattle, US",
      image: require("../assets/Microsoft.png"),
    },
    {
      title: "DevOps Engineer",
      pay: "102,000",
      companyName: "Amazon",
      location: "Austin, US",
      image: require("../assets/Amazon.png"),
    },
  ];

  return (
    <FlatList
      data={popularJobs}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          activeOpacity={0.5}
          key={index}
          className="flex-row space-x-4 items-center py-4 rounded-xl bg-white  px-[20px] mb-4 "
        >
          <Image
            resizeMode="cover"
            className="h-[43px] w-[43px] rounded-full"
            source={item.image}
          />
          <View className="flex-1">
            <View className="flex-row justify-between">
              <Text className="font-semibold text-[14px] text-[#0D0D26]">
                {item.title}
              </Text>
              <Text className="font-medium text-[12px] text-[#0D0D26] ">
                ${item.pay} /y
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="font-semibold text-[12px] text-[#0D0D26]">
                {item.companyName}
              </Text>
              <Text className="font-semibold text-[13px] text-[#0D0D26]">
                {item.location}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default PopularJobs;
