// MainNavigationScreen.tsx

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  useNavigation,
  // Removed NativeStackNavigationProp import as it's from the wrong package
} from "@react-navigation/native";
import { NativeStackNavigationProp as RNSNativeStackNavigationProp } from "@react-navigation/native-stack"; // ADDED THIS LINE for correct import
import i18n from "./i18n";
import { commonTextShadow } from "./commonStyles";

// Define RootStackParamList for navigation type safety
type RootStackParamList = {
  Hero: undefined;
  MainNavigation: undefined; // This screen
  About: undefined;
  Settings: undefined;
  BarsAndRestaurants: undefined; // Future screen
  StreetEating: undefined; // Future screen
};

function MainNavigationScreen() {
  // Use the correctly imported NativeStackNavigationProp
  const navigation =
    useNavigation<
      RNSNativeStackNavigationProp<RootStackParamList, "MainNavigation">
    >(); // CHANGED: Used RNSNativeStackNavigationProp

  return (
    <View style={styles.fullScreenContainer}>
      {" "}
      {/* CHANGED: fullScreenContent to fullScreenContainer */}
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.header}>
          {i18n.t("mainNavigationHeader") || "Explore Bang Saray"}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.buttonText}>
            {i18n.t("aboutGuidebookButton") || "About Our Guidebook"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BarsAndRestaurants")}
        >
          <Text style={styles.buttonText}>
            {i18n.t("barsRestaurantsButton") || "Bars & Restaurants"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("StreetEating")}
        >
          <Text style={styles.buttonText}>
            {i18n.t("streetEatingButton") || "Street Eating"}
          </Text>
        </TouchableOpacity>

        {/* Add more categories here as the app grows */}
        {/*
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThingsToDo')}>
          <Text style={styles.buttonText}>{i18n.t('thingsToDoButton') || 'Things To Do'}</Text>
        </TouchableOpacity>
        */}

        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.settingsButtonText}>
            {i18n.t("settingsButton") || "Settings"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    marginHorizontal: 15,
    paddingBottom: 40,
    marginTop: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 25,
    textAlign: "center",
    ...commonTextShadow,
  }, // ADDED A COMMA HERE! <--- THIS IS THE CRITICAL FIX
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 15,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  settingsButton: {
    backgroundColor: "rgba(255, 215, 0, 0.7)",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 30,
    width: "70%",
    alignItems: "center",
  },
  settingsButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MainNavigationScreen;
