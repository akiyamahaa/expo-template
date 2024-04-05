import { StyleSheet, Dimensions } from "react-native";
import { Button, Text, Image, Box, View } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { quizzData } from "../../db/quizz";
import TextBox, { EStatus } from "../../components/common/TextBox";
import { getRandomArray } from "../../utils/function";

const show: { [key: string]: string } = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const QuizzScreen = () => {
  const [status, setStatus] = useState<EStatus[]>([
    EStatus.NORMAL,
    EStatus.NORMAL,
    EStatus.NORMAL,
  ]);
  const [next, setNext] = useState(false);
  const [point, setPoint] = useState(0);


  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [currQues, setCurrQues] = useState(0);
  const level: string = route.params.level ? route.params.level : "easy";
  const [quizzes] = useState(getRandomArray(quizzData[level], 4))

  const onPress = (i: number) => () => {
    const { ans } = quizzes[currQues];
    const newStatus = [...status];
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.DISABLE;
    }
    if (i == ans) {
      newStatus[i] = EStatus.CORRECT;
      setPoint(point + 1);
    } else {
      newStatus[ans] = EStatus.CORRECT;
      newStatus[i] = EStatus.IN_CORRECT;
    }
    setNext(true);
    setStatus(newStatus);
  };

  

  const onNext = () => {
    if (currQues < quizzes.length - 1) {
      setCurrQues(currQues + 1);
      setNext(false);

      const newStatus = [...status];
      for (let index = 0; index < newStatus.length; index++) {
        newStatus[index] = EStatus.NORMAL;
      }
      setStatus(newStatus);
    } else {
      navigation.navigate("QuizzResult", { level: level, point, length: quizzes.length });
    }
  };

  return (
    <Box flex={1} alignItems="center" padding={'$8'}>
      <Text style={styles.text_main}>ZOODY'S QUIZ</Text>
      <Text style={styles.text_level}>Level {show[level]}</Text>
      <Image
        alt="img-ques"
        w={'$full'}
        rounded={'$lg'}
        height={Math.round((159 / 290) * Math.round(0.8 * Dimensions.get("screen").width))}
        source={quizzes[currQues].image}
      />
      <Text
        color="#757575"
        fontWeight="700"
        fontSize={'$lg'}
        marginVertical={'$6'}
        w={'$full'}
      >{quizzes[currQues].ques}</Text>
      <Box w={'$full'} gap={12}>
        {quizzes[currQues].choose.map((item: string, i: number) => (
          <TextBox
            key={`${item}-${i}`}
            status={status[i]}
            onPress={onPress(i)}
            content={item}
            next={next}
          />
        ))}
      </Box>
      <View
        style={{ height: 50, justifyContent: "center", marginVertical: 20 }}
        flexDirection="row"
      >
        <Button
          style={styles.btn__stop}
          onPress={() => navigation.navigate("Quizz")}
        >
          <Text
            style={{
              color: "#3D7944",
            }}
          >
            Stop
          </Text>
        </Button>
        {next && (
          <Button style={styles.btn__continue} onPress={onNext}>
            <Text>
              {currQues === quizzes.length - 1 ? "Finish" : "Continue"}
            </Text>
          </Button>
        )}
      </View>
    </Box>
  );
};

export default QuizzScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  text_main: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
  },
  text_level: {
    color: "#3D7944",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btn__stop: {
    backgroundColor: "#FFFFFF",
    borderColor: "#3D7944",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  btn__continue: {
    backgroundColor: "#3D7944",
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
