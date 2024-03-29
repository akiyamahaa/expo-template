import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Box, Text, VStack, useTheme } from "native-base";
import { BottomTabsParams } from "./config";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Quizz from "../screens/Quizz";
import Practice from "../screens/Practice";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator<BottomTabsParams>();

interface ITabIcon {
  focused: boolean;
  name: keyof typeof Ionicons.glyphMap;
  title: string;
}
const TabIcon = ({ focused, name, title }: ITabIcon) => {
  const { colors } = useTheme();
  return (

    <VStack alignItems={"center"}>
      <Ionicons
        name={name}
        size={20}
        color={
          focused ? colors.background.primary : colors.coolGray[800]
        }
      />
      <Text
        fontSize={10}
        fontWeight={400}
        color={focused ? colors.text.primary : colors.coolGray[800]}
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
    component: Home,
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
              backgroundColor: colors.background.primary,
            },
            headerTitleStyle: {
              color: colors.white,
            },
          }}
        />
      ))}

    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
