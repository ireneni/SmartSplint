import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center" }}
    >
      {/* Top image / header */}
      <View style={{ height: 200 }}>
        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      </View>

      {/* Main content area */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={GlobalStyles.heading}>Welcome Back</Text>

        {/* Email Input */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            marginBottom: 16,
            paddingHorizontal: 12,
            height: 50,
          }}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password Input */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            marginBottom: 16,
            paddingHorizontal: 12,
            height: 50,
          }}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Forgot password link */}
        <TouchableOpacity
          onPress={() => console.log("Forgot password pressed")}
        >
          <Text
            style={{ color: "#0A2463", textAlign: "right", marginBottom: 20 }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>

        {/* Centered Button */}
        <View style={{ alignItems: "center" }}>
          <GlobalButton
            title="Sign in"
            variant="primary"
            onPress={() =>
              console.log(
                `Signing in with email=${email}, password=${password}`
              )
            }
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
