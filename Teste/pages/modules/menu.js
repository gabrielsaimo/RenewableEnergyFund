import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const MenuScreen = () => {
  const route = useRoute();
  const currentRouteName = route.name;

  const handleHomePress = () => {};

  const handleTradePress = () => {};

  const handlePortfolioPress = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleHomePress}>
        <Ionicons
          name="home-outline"
          size={24}
          color={currentRouteName === "Home" ? "#770FDF" : "#888"}
        />
        <Text
          style={[
            styles.buttonText,
            currentRouteName === "Home" && styles.activeButtonText,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleTradePress} style={styles.button}>
        <Ionicons name="swap-horizontal-outline" size={24} color="#888" />
        <Text style={styles.buttonText}>Trade</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePortfolioPress} style={styles.button}>
        <Ionicons name="pie-chart-outline" size={24} color="#888" />
        <Text style={styles.buttonText}>Portfolio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    height: 60,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    marginTop: 4,
    color: "#888",
  },
  activeButton: {
    backgroundColor: "#770FDF",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  activeButtonText: {
    color: "#770FDF",
  },
});

export default MenuScreen;
