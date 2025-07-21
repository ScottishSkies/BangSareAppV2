import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
// Removed NativeStackNavigationProp import as it's not used and causes an error
// import { NativeStackNavigationProp } from "@react-navigation/native";
import i18n from "./i18n";
import { commonTextShadow } from "./commonStyles";

// RootStackParamList is not needed here as no navigation is initiated from this screen.
// We can remove this type definition to clean up the file.
// type RootStackParamList = {
//   Hero: undefined;
//   About: undefined;
// };

function AboutScreen() {
  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.welcomeHeader}>{i18n.t("welcome")}</Text>
        <Text style={styles.paragraph}>{i18n.t("appPurpose")}</Text>
        <Text style={styles.sectionHeader}>{i18n.t("privacyHeader")}</Text>
        <Text style={styles.paragraph}>{i18n.t("privacyPurpose")}</Text>
        <Text style={styles.subHeader}>{i18n.t("whatWeCollectHeader")}</Text>
        <Text style={styles.paragraph}>{i18n.t("noPersonalData")}</Text>
        <Text style={styles.paragraph}>{i18n.t("basicUsageStats")}</Text>
        <Text style={styles.subHeader}>{i18n.t("locationAccessHeader")}</Text>
        <Text style={styles.paragraph}>{i18n.t("locationOptional")}</Text>
        <Text style={styles.paragraph}>{i18n.t("denyLocation")}</Text>{" "}
        {/* CORRECTED THIS LINE */}
        <Text style={styles.subHeader}>{i18n.t("dataSharingHeader")}</Text>
        <Text style={styles.paragraph}>{i18n.t("noDataSharing")}</Text>
        <Text style={styles.paragraph}>{i18n.t("anonymousAnalytics")}</Text>
        <Text style={styles.subHeader}>{i18n.t("embeddedContentHeader")}</Text>
        <Text style={styles.paragraph}>{i18n.t("externalLinks")}</Text>
        <Text style={styles.paragraph}>{i18n.t("externalPrivacy")}</Text>
        <Text style={styles.sectionHeader}>{i18n.t("contactHeader")}</Text>
        <Text style={styles.paragraph}>{i18n.t("contactText")}</Text>
        <Text style={styles.emailText}>{i18n.t("email")}</Text>
        <Text style={styles.privacyLinkText}>
          {i18n.t("privacyPolicyLink")}
        </Text>
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
    backgroundColor: "transparent",
    borderRadius: 10,
    marginHorizontal: 15,
    paddingBottom: 40,
    marginTop: 20,
  },
  welcomeHeader: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 15,
    textAlign: "center",
    ...commonTextShadow,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    marginTop: 25,
    marginBottom: 10,
    textAlign: "center",
    ...commonTextShadow,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 15,
    marginBottom: 5,
    textAlign: "center",
    ...commonTextShadow,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "white",
    marginBottom: 10,
    textAlign: "center",
    ...commonTextShadow,
  },
  emailText: {
    fontSize: 16,
    color: "#FFD700",
    textDecorationLine: "underline",
    marginTop: 10,
    textAlign: "center",
    ...commonTextShadow,
  },
  privacyLinkText: {
    fontSize: 14,
    color: "lightblue",
    textDecorationLine: "underline",
    marginTop: 5,
    textAlign: "center",
    ...commonTextShadow,
  },
});

export default AboutScreen;
