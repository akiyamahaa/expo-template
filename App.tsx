import { Platform, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import Root from "./src/navigations/Root";
import { Box, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StatusBar } from "react-native";

export default function App() {

  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
        <Root />
      </Provider>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({});
