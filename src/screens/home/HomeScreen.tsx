import { Box, Button, Text } from 'native-base';
import React from 'react';

interface Props {}

const HomeScreen = (props: Props) => {
  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center" flex={1}>
      <Text fontSize={22}>Home Page</Text>
    </Box>
  );
};

export default HomeScreen;
