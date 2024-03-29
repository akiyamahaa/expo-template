import { ImageSourcePropType } from "react-native";


export interface PracticeData {
  ques: string;
  ans: string[];
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      ques:"Question 1: Which group of animals Tortoises are: ",
      ans:['R','E','P','T','I','L','E'],
    },
    {
      ques:"Question 2: Which is the reptile animal that can not swim?: ",
      ans:['T','O','R','T','O','I','S','E'],
    },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
  medium: [
    {
      ques:"Question 1: Which group of animals Tortoises are: ",
      ans:['R','E','P','T','I','L','E'],
    },
    {
      ques:"Question 2: Which is the reptile animal that can not swim?: ",
      ans:['S','U','L','C','A','T','A',' ','T','O','R','T','O','I','S','E'],
    },
    // {
    //   ques:"Question 1: : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
  hard: [
    {
      ques:"Question 1: Which group of animals Tortoises are: ",
      ans:['R','E','P','T','I','L','E'],
    },
    {
      ques:"Question 2: Which is the reptile animal that can not swim?: ",
      ans:['S','U','L','C','A','T','A',' ','T','O','R','T','O','I','S','E'],
    },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
};
