import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import { useEffect } from "react";
import appTheme from "./src/theme";
import Root from "./src/navigations/Root";

export default function App() {

  // TODO: Handle Temporary. Remove when nativebase lib fix this error
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  return (
    <NativeBaseProvider theme={appTheme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
