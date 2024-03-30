import { Dimensions, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Box, HStack, VStack } from '@gluestack-ui/themed'
import MemberImage, { MemberImageProps } from './MemberImage';
import Carousel from "react-native-snap-carousel";
import { useToken } from '@gluestack-ui/themed';
export interface SlideProps {
  data: MemberImageProps[];
}

const screenWidth = Dimensions.get("screen").width;

const SlideImage = (props: SlideProps) => {
  const { data, ...rest } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <VStack alignItems={'center'} gap={'$2'}>
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
            width={'$2'}
            height={'$2'}
            marginTop={2}
            borderRadius={100}
            bg={i == slideIndex ? "#3D7944" : "$blueGray600"}
            key={i}
          />
        ))}
      </HStack>
    </VStack>
  )
}

export default SlideImage

const styles = StyleSheet.create({})