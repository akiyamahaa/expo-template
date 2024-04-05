import { StyleSheet } from "react-native";
import React, { } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/common/ErrorOverlay";
import LoadingOverlay from "../components/common/LoadingOverlay";
import { RootStackParams } from "./config";
import TabNavigation from "./TabNavigation";
import QuizzResult from "../screens/quizz-mode/QuizzResult";
import QuizzScreen from "../screens/quizz-mode/QuizzScreen";
import PracticeResult from "../screens/guess-word/PracticeResult";
import PracticeScreen from "../screens/guess-word/PracticeScreen";

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
          <Stack.Screen name="QuizzResult" component={QuizzResult}
            options={{
              headerShown: true,
              title: "Kết quả trắc nghiệm",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#3E5076',
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen name="QuizzScreen" component={QuizzScreen}
            options={{
              headerShown: true,
              title: "Bài trắc nghiệm",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#3E5076',
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen name="PracticeScreen" component={PracticeScreen}
            options={{
              headerShown: true,
              title: "Bài thực hành",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#3E5076',
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen name="PracticeResult" component={PracticeResult}
            options={{
              headerShown: true,
              title: "Kết quủa thực hành",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#3E5076',
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
