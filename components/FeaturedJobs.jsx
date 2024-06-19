import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";

const FeaturedJobs = () => {
  const featuredJobs = [
    {
      title: "Microsoft Engineer",
      name: "Microsoft",
      image: require("../assets/Microsoft.png"),
      pay: 220,
      location: "Cape Town",
      color: "#0078D4",
    },
    {
      title: "Amazon Engineer",
      name: "Amazon",
      image: require("../assets/Amazon.png"),
      pay: 200,
      location: "Dakar, Senegal",
      color: "#FF9900",
    },
    {
      title: "Google Engineer",
      name: "Google",
      image: require("../assets/Google.png"),
      pay: 160,
      location: "Nairobi, Kenya",
      color: "#4285F4",
    },
    {
      title: "Apple Engineer",
      name: "Apple",
      image: require("../assets/Apple.png"),
      pay: 280,
      location: "Lagos, Nigeria",
      color: "#A2AAAD",
    },
    {
      title: "Facebook Engineer",
      name: "Facebook",
      image: require("../assets/Facebook.png"),
      pay: 180,
      location: "Accra, Ghana",
      color: "#1877F2",
    },
    {
      title: "Netflix Engineer",
      name: "Netflix",
      image: require("../assets/Netflix.png"),
      pay: 250,
      location: "Kampala, Uganda",
      color: "#E50914",
    },
    {
      title: "Twitter Engineer",
      name: "Twitter",
      image: require("../assets/Twitter.png"),
      pay: 170,
      location: "Ababa, Ethiopia",
      color: "#1DA1F2",
    },
    {
      title: "LinkedIn Engineer",
      name: "LinkedIn",
      image: require("../assets/LinkedIn.png"),
      pay: 190,
      location: "Casablanca",
      color: "#0077B5",
    },
    {
      title: "Tesla Engineer",
      name: "Tesla",
      image: require("../assets/Tesla.png"),
      pay: 240,
      location: "Cairo, Egypt",
      color: "#CC0000",
    },
    {
      title: "Spotify Engineer",
      name: "Spotify",
      image: require("../assets/Spotify.png"),
      pay: 210,
      location: "Tunis, Tunisia",
      color: "#1DB954",
    },
  ];

  return (
    <FlatList
      data={featuredJobs}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={index}
          style={{ backgroundColor: item.color }}
          className={`w-[280px] h-[186px] mb-4 justify-between bg- rounded-3xl mr-4 p-4 shadow-md shadow-blue-600`}
        >
          <View className={`flex-row space-x-3 `}>
            <View className="bg-white rounded-xl">
              <Image
                resizeMode={"contain"}
                className=" h-[46px] w-[46px]"
                source={item.image}
              />
            </View>
            <View>
              <Text className="font-semibold text-[16px]  text-white">
                {item.title}
              </Text>
              <Text className="font-medium text-[14px] text-white">
                {item.name}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-[15px] font-medium text-white ">
              ${item.pay}.00
            </Text>
            <Text className="text-[15px] font-medium text-white">
              {item.location}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default FeaturedJobs;
