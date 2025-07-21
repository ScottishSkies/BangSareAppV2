import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, ImageBackground } from "react-native";
import HeroScreen from "./HeroScreen";
import AboutScreen from "./AboutScreen";
import SettingsScreen from "./SettingsScreen";
import MainNavigationScreen from "./MainNavigationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/images/my-bang-sare-welcome.jpg")}
      style={styles.background}
    >
      <NavigationContainer>
        <Stack.Navigator
          id="RootNavigator" // ADDED THIS LINE to fix 'id' missing error
          initialRouteName="Hero"
          screenOptions={{
            contentStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Stack.Screen
            name="Hero"
            component={HeroScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainNavigation"
            component={MainNavigationScreen}
            options={{
              title: "Explore Bang Saray",
              headerStyle: {
                backgroundColor: "rgba(0,0,0,0.6)",
              },
              headerTintColor: "#FFD700",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{
              title: "About Bang Saray Local",
              headerStyle: {
                backgroundColor: "rgba(0,0,0,0.6)",
              },
              headerTintColor: "#FFD700",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: "Settings",
              headerStyle: {
                backgroundColor: "rgba(0,0,0,0.6)",
              },
              headerTintColor: "#FFD700",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          {/* We will add BarsAndRestaurants and StreetEating screens here later */}
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
