import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuScreen from "./modules/menu";
import { useNavigation } from "@react-navigation/native";

const TradeScrean = () => {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();
  const handleExpandText = () => {
    setExpanded(!expanded);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={32} color="#000" />
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.headerText}>Wind Fund</Text>
            <Text style={{ margin: 10, opacity: 0.5 }}>WFND</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View style={styles.divider} />
      <ScrollView vertical style={{ height: 700 }}></ScrollView>
      <View style={!expanded ? styles.menu : styles.menu2}>
        <MenuScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F4F4F4",
    height: 60,
    paddingHorizontal: 16,
    marginTop: -50,
  },
  avatarContainer: {
    marginRight: 16,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconContainer1: {
    marginLeft: -55,
    marginRight: 55,
  },
  iconContainer2: {
    marginLeft: 16,
  },
  menu: {
    marginTop: -70,
  },
  menu2: {
    marginTop: -165,
  },
  textExpand: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 16,
    marginVertical: 20,
  },
  textExpand2: {
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: -20,
    marginVertical: 20,
  },
  textExpand3: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 10,
    marginVertical: 20,
    marginTop: -10,
    color: "#0FDF8F",
  },
  button: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 16,
    marginVertical: 20,
    color: "#000",
  },
  divider: {
    height: 1,
    backgroundColor: "#E4E4E4",
  },
  cardsContainer: {
    flexDirection: "row",
  },
  card: {
    width: 250,
    height: 200,
    marginRight: 16,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TradeScrean;
