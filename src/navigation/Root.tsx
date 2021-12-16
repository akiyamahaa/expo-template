import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import AboutScreen from 'screens/about/AboutScreen';
import HomeScreen from 'screens/home/HomeScreen';

interface Props {}

export type RootStackParamList = {
  HomeScreen: undefined;
  AboutScreen: undefined;
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
