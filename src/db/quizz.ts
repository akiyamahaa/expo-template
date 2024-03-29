import { ImageSourcePropType } from "react-native";


export interface QuizzData {
  image: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: require('../../assets/images/quizz/easy1.png'),
      ques:"Question 1: Where do Turtles lay eggs?",
      choose:['Under the sea','At the place they were born','On the sand'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/easy2.png'),
      ques:"Question 2: Which group of animals Tortoises are?",
      choose:['Reptile','Mammal', 'Amphibian'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy3.png'),
      ques:"Question 3: Which is the reptile animal that can not swim?",
      choose:['Turtle','Tortoise','Sulcata Tortoise'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/easy4.png'),
      ques:"Question 4: How many species of Snake?",
      choose:['5,789','3,789','6,789'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/easy5.png'),
      ques:"Question 5: How many teeth do Wolves have?",
      choose:['52','32','42'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/easy6.png'),
      ques:"Question 6: What is the normal gestation period of Tiger?",
      choose:['100 days','150 days', '200 days'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy7.png'),
      ques:"Question 7: What is the scientific name of Otter?",
      choose:['Sea Otter','Enhydra Lutris','Hippocampus'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/easy8.png'),
      ques:"Question 8: About how fast can an orca swim at top speed?",
      choose:['25 - 30 kilometers per hour','56 kilometers per hour','Over 100 kilometers per hour'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/easy9.png'),
      ques:"Question 9: Which of the following stages in the life cycle of a mosquito is found in water?",
      choose:['Egg, larva, adult','Larva, pupa, adult','Egg, larva, pupa'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/easy10.png'),
      ques:"Question 10: The approximate number of Ladybug species is…?",
      choose:['2,500','5,000', '3,000'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/easy11.png'),
      ques:"Question 11: In terms of their scientific classification, to which order do  Harvester Ant belong?",
      choose:['Pogonomyrmex barbatus','Anthophila','Anisoptera'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy12.png'),
      ques:"Question 12: How many stages are there that a life circle of fly consist?",
      choose:['5','4','2'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/easy13.png'),
      ques:"Question 13: Is Victoria Crowned Pigeon the largest species in the world?",
      choose:['True','False'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy14.png'),
      ques:"Question 14: On what continent is the Toucan found?",
      choose:['South and Central America','Asia', 'Africa'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy15.png'),
      ques:"Question 15: The lifespan of Resplendent Quetzals?",
      choose:['20- 25 years','20 - 30 years','20 - 35 years'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy16.png'),
      ques:"Question 16: Are Peacocks birds?",
      choose:['Yes','No'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy17.png'),
      ques:"Question 17: Which continents you can find the Tiger Prawn?",
      choose:['Asia','Europe','Africa'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy18.png'),
      ques:"Question 18: Lobsters are caugt in?",
      choose:['Pacific Ocean','Atlantic Ocean','All the above'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/easy19.png'),
      ques:"Question 19: Hermit Crabs are divided into?",
      choose:['Two groups','Four groups','Just only 1'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy20.png'),
      ques:"Question 20: Which larva is the largest of the crab larvae during the final larval?",
      choose:['Ghost Crab','Hermit Crab','Sand Crab'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy21.png'),
      ques:"Question 21: You can find Wyoming Toad in?",
      choose:['North America','South America','America'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy22.png'),
      ques:"Question 22: What is the favorite meal of Oak Toad?",
      choose:['Ants','Spiders','Beetles'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/easy23.png'),
      ques:"Question 23: The lifespan of Notophthalmus viridescens?",
      choose:['20 - 25 years','22 - 32 years','12 - 15 years'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/easy24.png'),
      ques:"Question 24: A Grass Forg weight?",
      choose:['About 15g','About 22,7g','About 20,5g'],
      ans: 1
    },
  ],
  medium: [
    {
      image: require('../../assets/images/quizz/medium1.png'),
      ques:"Question 1: Which is the largest group of Reptiles?",
      choose:['Snake','Chameleon','Lizard'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/medium2.png'),
      ques:"Question 2: The average lifespan of Leopard Gecko?",
      choose:['Rougly 8 to 15 years','4 to 8 years', '3 to 5 years'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/medium3.png'),
      ques:"Question 3: Which is one of special things about Iguana?",
      choose:['A photopigment called Parapinopsin','Fully-functional eyelids','Be able to go their entire life without drinking water'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/medium4.png'),
      ques:"Question 4: How long are the Jaguar pregnant for?",
      choose:['14 weeks','8 weeks','2 weeks'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/medium5.png'),
      ques:"Question 5: What is the approximate number of muscle units in an Elephant’s trunk?",
      choose:['20,000 - 40,000','250,000','150,000'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/medium6.png'),
      ques:"Question 6: Deer are a member of the Cervidae family. What other animal is not included in this family?",
      choose:['Moose','Sheep','Elk'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/medium7.png'),
      ques:"Question 7: In world wide, how many species of flea are there?",
      choose:['5,500','2,500','1,500'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/medium8.png'),
      ques:"Question 8: What is the maximum possible speed of dragonfly?",
      choose:['36 - 54 km/h','45 - 55 km/h','26 - 44km/h'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/medium9.png'),
      ques:"Question 9: How do the Cricket breath?",
      choose:['Lungs','Mouth','Spiracles'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/medium10.png'),
      ques:"Question 10: What is the natural habitat of Parrots?",
      choose:['Sparsely populated countryside','Cooler regions','Tropical and subtropical regions'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/medium11.png'),
      ques:"Question 11: What could be the weight of a Mute swan?",
      choose:['10 - 15 pounds','20 - 25 pounds','30 - 35 pounds'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/medium12.png'),
      ques:"Question 12: The lifespan of Mandarin Duck?",
      choose:['Around 10 years','Around 20 years','15 - 25 years'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/medium13.png'),
      ques:"Question 13: Which larva is the largest of the crab larvae during the final larval??",
      choose:['Ghost Crab','Hermit Crab','Sand Crab'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/medium14.png'),
      ques:"Question 14: Where do Crayfish live?",
      choose:['In bodies of freshwater','In only saltwater','Lake, streams, and seas'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/medium15.png'),
      ques:"Question 15: The lifespan of Coconut Crab?",
      choose:['Up to 60 years','Up to 80 years','20 - 40 years'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/medium16.png'),
      ques:"Question 16: The approximate number of Glass Frog species is…?",
      choose:['160','220','350'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/medium17.png'),
      ques:"Question 17: A Female Cane Toad can lay — — eggs?",
      choose:['8,000 - 25,000','8,000 - 15,000','8,000 - 20,000'],
      ans: 0
    },
  ],
  hard: [
    {
      image: require('../../assets/images/quizz/hard1.png'),
      ques:"Question 1: How long can a Crocodile stay underwater",
      choose:['30 minutes','Two hours','At least one hours'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/hard2.png'),
      ques:"Question 2: The Chameleon changes colour?",
      choose:['Depending on their mood','Their temperature','Both of them'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/hard3.png'),
      ques:"Question 3: Where do Caimans live?",
      choose:['The Northern and Southern hemispheres','Central and South America','Humic tropics'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/hard4.png'),
      ques:"Question 4: Which genus does cheetah belong to?",
      choose:['Leptailurus','Pardofelis','Acinonyx'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/hard5.png'),
      ques:"Question 5: What is number of Blue Whales populations left in the world today?",
      choose:['10,000 - 25,000','100,000 - 150,000','20,000 - 55,000'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/hard6.png'),
      ques:"Question 6: Which species of bears inhabits the Arctic?",
      choose:['Panda Bears','Brown Bears','Polar Bears'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/hard7.png'),
      ques:"Question 7: Baby cicadas are called?",
      choose:['Nymphs','Lymphs','Joeys'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/hard8.png'),
      ques:"Question 8: How many different species of bumblebee are known?",
      choose:['Over 300','250','150'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/hard9.png'),
      ques:"Question 9: Lifespan of Beetle?",
      choose:['20 years','Up to 30 years','Up to 15 years'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/hard10.png'),
      ques:"Question 10: In which country might you find a Macaw in the wild?",
      choose:['Brazil','Vietnam','Australia'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/hard11.png'),
      ques:"Question 11: What is the approximate temperature you should keep Gouldian Finches at?",
      choose:['About 70 degree fahrenheit','About 35 degree fahrenheit','About 65 degree fahrenheit'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/hard12.png'),
      ques:"Question 12: How fast can Flamingos fly?",
      choose:['60 km/h','75 km/h','50 km/h'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/hard13.png'),
      ques:"Question 13: You can find Christmas Island Red Crab?",
      choose:['Everywhere in the world','In North America','On Christmas and Cocos Islands (Australia)'],
      ans: 2
    },
    {
      image: require('../../assets/images/quizz/hard14.png'),
      ques:"Question 14: When is the mating season of Blue Crab?",
      choose:['Between May and October','Between January and August','Between May and July'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/hard15.png'),
      ques:"Question 15: The females can carry several thousand eggs in their ovary, which may then account for as much as — — — — — of the animal's body mass?",
      choose:['One third','One and a half','One Fourth'],
      ans: 0
    },
    {
      image: require('../../assets/images/quizz/hard16.png'),
      ques:"Question 16: There are – – – species of Caecilian?",
      choose:['125','124','120'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/hard17.png'),
      ques:"Question 17: How long do the American Bullfrog live up to?",
      choose:['2 - 4 years','7 - 10 years','3 - 8 years'],
      ans: 1
    },
    {
      image: require('../../assets/images/quizz/hard18.png'),
      ques:"Question 18: The African Clawed Frog's main food?",
      choose:['Insects','Water Bugs and small Fish','Ants'],
      ans: 1
    },
  ],
};
