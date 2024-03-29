import { Dimensions, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Box, HStack } from 'native-base'
import MemberImage, { MemberImageProps } from './MemberImage';
import Carousel from "react-native-snap-carousel";

export interface SlideProps {
  data: MemberImageProps[];
}

const screenWidth = Dimensions.get("screen").width;

const SlideImage = (props: SlideProps) => {
  const { data, ...rest } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <Box alignItems={'center'}>
      <Carousel
        data={data}
        renderItem={({ item, index }) => <MemberImage {...item} key={item.name ? item.name : `item${index}`} />}
        itemWidth={Math.round(screenWidth * 0.8)}
        sliderWidth={screenWidth}
        autoplay={true} // Enable autoplay
        loop={true} // Enable loop
        autoplayInterval={3000} // Set autoplay interval (in milliseconds)
        onSnapToItem={(index) => setSlideIndex(index)}
      />
      <HStack justifyContent="space-around" width={100}>
        {data.map((_, i) => (
          <Box
            width={3}
            height={3}
            marginTop={2}
            borderRadius={100}
            bg={i == slideIndex ? "#3D7944" : "gray.600"}
            key={i}
          />
        ))}
      </HStack>
    </Box>
  )
}

export default SlideImage

const styles = StyleSheet.create({})