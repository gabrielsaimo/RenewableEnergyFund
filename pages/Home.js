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
import { LineChart } from "react-native-chart-kit";
import MenuScreen from "./modules/menu";

const HomeScreen = () => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandText = () => {
    setExpanded(!expanded);
  };

  const data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };
  return (
    <View>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.avatarContainer}>
            <Ionicons name="person-outline" size={24} color="#888" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Account: $1,457.23</Text>
          <TouchableOpacity
            style={styles.iconContainer1}
            onPress={handleExpandText}
          >
            <Ionicons name="chevron-down-outline" size={24} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer2}>
            <Ionicons name="notifications-outline" size={24} color="#888" />
          </TouchableOpacity>
        </View>
        {expanded && (
          <View>
            <Text style={styles.textExpand}>Portfolio</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textExpand2}>$1,245.23</Text>
              <Image
                source={require("../assets/vector.png")}
                style={{
                  width: 8,
                  height: 8,
                  marginLeft: 3,
                  marginRight: -5,
                  marginTop: -3,
                }}
              />
              <Text style={styles.textExpand3}>31.82%</Text>

              <Image
                source={require("../assets/frame43.png")}
                style={{
                  width: 150,
                  height: 40,
                  marginTop: -20,
                  marginLeft: 20,
                }}
              />
            </View>
          </View>
        )}
      </View>
      <View style={styles.divider} />
      <ScrollView style={{ height: 700 }}>
        <View>
          <Text> Funds</Text>
        </View>
        <ScrollView horizontal style={{ height: 200 }}>
          <View>
            <View style={styles.card}>
              <LineChart
                data={data}
                width={300}
                height={200}
                chartConfig={{
                  backgroundColor: "#ffffff",
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#ffffff",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                yAxisSuffix="%"
                verticalLabelRotation={-10}
                fromZero={true}
                showDot={false}
                strokeWidth={2}
              />
            </View>

            <View style={styles.card}>
              {/* Outra view com gráfico de linha */}
            </View>

            <View style={styles.card}>
              {/* Outra view com gráfico de linha */}
            </View>
          </View>
        </ScrollView>
      </ScrollView>
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

export default HomeScreen;
