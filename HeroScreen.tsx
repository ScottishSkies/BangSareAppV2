import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  useNavigation,
  // Removed NativeStackNavigationProp import from here
} from "@react-navigation/native";
import { NativeStackNavigationProp as RNSNativeStackNavigationProp } from "@react-navigation/native-stack"; // ADDED THIS LINE for correct import
import i18n from "./i18n";
import { commonTextShadow } from "./commonStyles";

// Update RootStackParamList to include MainNavigation
type RootStackParamList = {
  Hero: undefined;
  MainNavigation: undefined; // Add this new route
  About: undefined;
  Settings: undefined;
};

function HeroScreen() {
  // Use the correctly imported NativeStackNavigationProp
  const navigation =
    useNavigation<RNSNativeStackNavigationProp<RootStackParamList, "Hero">>(); // CHANGED: Used RNSNativeStackNavigationProp

  const handlePress = () => {
    navigation.navigate("MainNavigation"); // Navigates to MainNavigation screen
  };

  return (
    <View style={styles.fullScreenContent}>
      <View style={styles.overlay}>
        <Text style={styles.welcomeTextTop}>{i18n.t("heroWelcomeTop")}</Text>
        <Text style={styles.welcomeTextBottom}>
          <Text style={styles.italicLocal}>{i18n.t("heroWelcomeBottom")}</Text>
        </Text>
        <Text style={styles.exploreText}>{i18n.t("heroExplore")}</Text>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>{i18n.t("letsGoButton")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenContent: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  welcomeTextTop: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 5,
    textAlign: "center",
    ...commonTextShadow,
  },
  welcomeTextBottom: {
    fontSize: 24,
    color: "#FFD700",
    marginBottom: 20,
    textAlign: "center",
    ...commonTextShadow,
  },
  italicLocal: {
    fontStyle: "italic",
    textTransform: "lowercase",
  },
  exploreText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
    ...commonTextShadow,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HeroScreen;
