import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigate = useNavigation().navigate;

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (id, value) => {
    setData({ ...data, [id]: value });
  };

  const handleSubmit = () => {
    if (data.name.length < 3 || data.email.length < 3) {
      return alert("Fill in all required places");
    }
    navigate("Homepage", data);
  };

  const inputStyles = "py-4 border-[#AFB0B6] border-[1px] rounded-lg px-4";

  return (
    <SafeAreaView className="flex justify-center space-y-3 px-[20px]">
      <Text className="font-semibold text-[22px] text-[#356899] mt-[106px]">
        Jobizz
      </Text>
      <Text className="font-semibold text-[24px] text-[#0D0D26] ">
        Welcome Back {"👋"}
      </Text>
      <Text className="text-[14px] text-[#AFB0B6] mb-8 ">
        Let's log in. Apply to jobs!
      </Text>

      <View className="flex space-y-6 mb-16 ">
        <TextInput
          textContentType="name"
          onChangeText={(name) => handleChange("name", name)}
          className={inputStyles}
          placeholder="Name"
        />
        <TextInput
          textContentType="emailAddress"
          onChangeText={(email) => handleChange("email", email)}
          className={inputStyles}
          placeholder="Email"
        />

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-[#356899] py-[16px] rounded-lg"
        >
          <Text className="text-center text-[#F5F5F5] ">Log in</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-8 flex-row">
        <View
          style={{ flex: 1 }}
          className=" h-[1px] self-center bg-[#AFB0B6] "
        />
        <Text style={{ flex: 2 }} className="text-[#AFB0B6] text-center ">
          Or continue with
        </Text>
        <View
          style={{ flex: 1 }}
          className="h-[1px] self-center bg-[#AFB0B6] "
        />
      </View>

      <View className="flex flex-row justify-center items-center">
        <TouchableOpacity>
          <Image
            className="w-[95px] h-[95px] "
            source={require("../assets/Apple.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            className="w-[95px] h-[95px] "
            source={require("../assets/Google.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            className="w-[95px] h-[95px] "
            source={require("../assets/Facebook.png")}
          />
        </TouchableOpacity>
      </View>

      <Text className="text-center text-[#AFB0B6] ">
        Don{"'"}t have an account{"?"}{" "}
        <Text className="text-[#356899]">Register</Text>
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
