import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,

} from "react-native";
import { Box, Button, View } from "@gluestack-ui/themed";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { QuizInput } from "react-native-quiz-input";
import { EStatus } from "../../components/common/CharacterBox";
import { practiceData } from "../../db/practice";

const imgWidth = Math.round(0.8 * Dimensions.get("screen").width);

const bgHeight = Math.round(((5 / 4) * imgWidth) / 6);

interface LevelInfo {
  text: string;
  level: string;
}

const levels: LevelInfo[] = [
  { text: "Easy", level: "easy" },
  { text: "Medium", level: "medium" },
  { text: "Hard", level: "hard" },
];

const show: { [key: string]: string } = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const PracticeScreen = () => {
  const [status, setStatus] = useState<EStatus[]>([
    EStatus.NORMAL,
    EStatus.NORMAL,
    EStatus.NORMAL,
  ]);
  const [point, setPoint] = useState(0);

  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [currQues, setCurrQues] = useState(0);
  const level: string = route.params && route.params.level ? route.params.level : "easy";
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [next, setNext] = useState(false);

  const [practices] = useState(practiceData[level])


  const onChange = (data: any) => {
    const ans = practices[currQues].ans;
    if (data.wordString.length == ans.length) {
      const ansText = ans.join("");
      setCorrect(ansText === data.wordString);
      setNext(true)
    } else {
      setCorrect(null);
    }
  };

  const onNext = () => {
    if (currQues < practices.length - 1) {
      setCurrQues(currQues + 1);
      setPoint(point + 1);
      const newStatus = [...status];
      for (let index = 0; index < newStatus.length; index++) {
        newStatus[index] = EStatus.NORMAL;
      }
      setStatus(newStatus);
    } else {
      navigation.navigate("PracticeResult", { level: level, point });
    }
  };

  return (
    <Box style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_main}>PRACTICE WITH ZOODY</Text>
        <Text style={styles.text_level}>Level: {show[level]}</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text__ques}>
          {practices[currQues].ques}
        </Text>
      </View>
      <View style={styles.box__choose}>
        <QuizInput
          size="large"
          borderColor="#3D7944"
          wordStructure={practices[currQues].ans.map((c) => true)}
          onChange={onChange}
          key={currQues}
        />
      </View>
      <View
        style={{ height: 50, justifyContent: "center", marginVertical: 20 }}
        flexDirection="row"
      >
        <Button
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
            }}
          >
            Stop
          </Text>
        </Button>
        {next && (
          <Button onPress={onNext}>
            <Text>
              {currQues === practices.length - 1 ? "Finish" : "Continue"}
            </Text>
          </Button>
        )}
      </View>
      {correct != null && <Text>{correct ? "CORRECT" : "IN_CORRECT"}</Text>}
    </Box>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: "30%",
    backgroundColor: "#FFF9EC",
    alignItems: "center",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  text_main: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
  },
  text_level: {
    color: "#3D7944",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  main: {
    marginTop: 40,
    alignItems: "center",
  },
  text__ques: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "700",
  },
  btn: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FCD02E",
  },
  box__choose: {
    flexDirection: "row",
    marginVertical: 20,
  },
  choose: {
    width: 50,
    height: 50,
    alignItems: "center",
  },
});
