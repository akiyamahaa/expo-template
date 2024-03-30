import {
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Image, Box, View } from "@gluestack-ui/themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface LevelInfo {
  text: string;
  level: string;
}

const levels: LevelInfo[] = [
  { text: "Easy", level: "easy" },
  { text: "Medium", level: "medium" },
  { text: "Hard", level: "hard" },
];

const Quizz = () => {
  const navigation = useNavigation<any>();
  return (
    <Box flex={1} alignItems="center" justifyContent="center" paddingHorizontal={24}>
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <Text style={styles.textmain}>ZOODY'S QUIZ</Text>
      {levels.map((info) => (
        <TouchableOpacity
          key={info.level}
          onPress={() =>
            navigation.navigate("QuizzScreen", { level: info.level })
          }
          style={{ width: '100%' }}
        >
          <Box
            style={{
              backgroundColor: "#3D7944",
            }}
            p={12}
            alignItems="center"
            my={4}
            rounded={'$lg'}
          >
            <Text style={styles.text}>{info.text}</Text>
          </Box>
        </TouchableOpacity>
      ))}
    </Box>
  );
};

export default Quizz;

const styles = StyleSheet.create({
  textmain: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  box: {
    width: "100%",
    height: 41,
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#FFFFFF",
  },
});
