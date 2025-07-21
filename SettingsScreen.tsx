// SettingsScreen.tsx

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import i18n from "./i18n";
import { commonTextShadow } from "./commonStyles";
import { useNavigation, CommonActions } from "@react-navigation/native";

function SettingsScreen() {
  const navigation = useNavigation();

  const setLanguage = (langCode: string) => {
    i18n.locale = langCode;
    // Add a small delay to ensure locale change is processed before navigation dispatch
    // This is a common workaround for subtle timing issues in React Native navigation.
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0, // This sets the current screen to the first route in the array
          routes: [{ name: "Hero" }], // Navigate back to the Hero screen
        })
      );
    }, 100); // 100ms delay
  };

  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.header}>
          {i18n.t("settingsHeader") || "Settings"}
        </Text>

        <Text style={styles.sectionHeader}>
          {i18n.t("languageHeader") || "Language"}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setLanguage("en")}
        >
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setLanguage("th")}
        >
          <Text style={styles.buttonText}>ภาษาไทย</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  overlay: {
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    marginHorizontal: 15,
    paddingBottom: 40,
    marginTop: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 20,
    textAlign: "center",
    ...commonTextShadow,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 25,
    marginBottom: 15,
    textAlign: "center",
    ...commonTextShadow,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
