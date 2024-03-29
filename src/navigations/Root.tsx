import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/common/ErrorOverlay";
import LoadingOverlay from "../components/common/LoadingOverlay";
import { RootStackParams } from "./config";
import Home from "../screens/Home";
import TabNavigation from "./TabNavigation";
import QuizzResult from "../screens/QuizzResult";
import QuizzHome from "../screens/QuizzHome";
import PracticeHome from "../screens/PracticeHome";
import PracticeResult from "../screens/PracticeResult";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  return (
    <>
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="QuizzResult" component={QuizzResult} options={{ headerShown: false }} />
          <Stack.Screen name="QuizzHome" component={QuizzHome} options={{ headerShown: false }} />
          <Stack.Screen name="PracticeHome" component={PracticeHome} options={{ headerShown: false }} />
          <Stack.Screen name="PracticeResult" component={PracticeResult} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
