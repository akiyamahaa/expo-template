import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from '@gluestack-ui/themed'
import SlideImage from '../components/home/SlideImage'
import { headerSlideData } from '../db/slide-data'

type Props = {}

const Home = (props: Props) => {
  return (
    <Box flex={1}>
      <SlideImage data={headerSlideData} />
    </Box>
  )
}

export default Home

const styles = StyleSheet.create({})