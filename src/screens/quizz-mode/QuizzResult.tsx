import { Dimensions, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Text, View } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { quizzData } from "../../db/quizz";

const show: { [key: string]: string } = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const QuizzResult = () => {
  const route = useRoute<any>();
  const level: string = route.params.level ? route.params.level : "easy";
  const navigation = useNavigation<any>();

  return (
    <Box flex={1} mt={24} alignItems="center" paddingHorizontal={'$12'}>
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <Text
        color="#3D7944"
        style={styles.text__main}>ZOODY'S QUIZ</Text>
      <Text style={styles.text__level}>Level: {show[level]}</Text>
      <Box w={'$full'}
        borderWidth={0.2}
        borderColor="#3D7944"
        padding={'$4'}
        gap={16}
        alignItems="center" rounded={'$lg'}>
        <Text style={styles.text__comment}>GREAT JOB</Text>
        <Text style={styles.text__score}>Your score</Text>
        <View style={styles.box__score}>
          <View style={[styles.ques, styles.ques__total]}>
            <Text style={styles.ques__num}>{route.params.length}</Text>
            <Text>question</Text>
          </View>
          <View style={[styles.ques, styles.ques__true]}>
            <Text style={[styles.ques__num, styles.text__white]}>
              {route.params.point}
            </Text>
            <Text style={styles.text__white}>true</Text>
          </View>
          <View style={[styles.ques, styles.ques__false]}>
            <Text style={[styles.ques__num, styles.text__white]}>
              {route.params.length - route.params.point}
            </Text>
            <Text style={styles.text__white}>false</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Quizz')} >
          <Box bgColor="$success100" padding={'$4'} rounded={'$2xl'}>
            <Text>
              Continue to learn
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box >
  );
};

export default QuizzResult;

const styles = StyleSheet.create({
  text__main: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  text__level: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20,
  },
  text__comment: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#3D7944",
  },
  text__score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3D7944",
    marginTop: 10,
  },
  box__score: {
    flexDirection: "row",
    marginTop: 20,
  },
  ques: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  ques__total: {
    backgroundColor: "#F7D46B",
  },
  ques__true: {
    backgroundColor: "#3D7944",
  },
  ques__false: {
    backgroundColor: "#D00809",
  },
  ques__num: {
    fontSize: 35,
    fontWeight: "bold",
  },
  text__white: {
    color: "#FFFFFF",
  },
});
