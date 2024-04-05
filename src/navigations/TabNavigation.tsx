import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Text, VStack, useStyled, useTheme } from "@gluestack-ui/themed";
import { BottomTabsParams } from "./config";
import Ionicons from "@expo/vector-icons/Ionicons";
import Quizz from "../screens/quizz-mode/Quizz";
import Practice from "../screens/guess-word/Practice";
import Profile from "../screens/Profile";
import PuzzleScreen from "../screens/puzzle/PuzzleScreen";

const Tab = createBottomTabNavigator<BottomTabsParams>();

interface ITabIcon {
  focused: boolean;
  name: keyof typeof Ionicons.glyphMap;
  title: string;
}
const TabIcon = ({ focused, name, title }: ITabIcon) => {
  const { colors } = useTheme();
  const styled = useStyled()
  return (

    <VStack alignItems={"center"}>
      <Ionicons
        name={name}
        size={20}
        color={
          focused ? "#3E5076" : "#B0B0B0"
        }
      />
      <Text
        fontSize={10}
        fontWeight={"$medium"}
        color={focused ? "#3E5076" : "#B0B0B0"}
      >
        {title}
      </Text>
    </VStack>
  )
}

interface ITabData {
  id: number;
  tabName: keyof BottomTabsParams;
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  component: any
}

export const TabData: ITabData[] = [
  {
    id: 1,
    tabName: 'Home',
    title: "Trang chủ",
    iconName: 'home',
    component: PuzzleScreen,
  },
  {
    id: 2,
    tabName: 'Quizz',
    title: "Trắc nghiệm",
    iconName: 'apps',
    component: Quizz,
  },
  {
    id: 3,
    tabName: 'Practice',
    title: "Luyện tập",
    iconName: 'bulb',
    component: Practice,
  },
  {
    id: 4,
    tabName: 'Profile',
    title: "Profile",
    iconName: 'person',
    component: Profile,
  },
]

const TabNavigation = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {},
      }}
    >
      {TabData.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.tabName}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name={tab.iconName} title={tab.title} />
            ),
            headerShown: true,
            title: tab.title,
            headerStyle: {
              backgroundColor: "#3E5076",
            },
            headerTitleStyle: {
              color: '#fff',
            },
          }}
        />
      ))}

    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
