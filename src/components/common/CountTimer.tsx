import { Box } from '@gluestack-ui/themed';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
  timer?: number;
  handleNext: any;
}

const CountTimer = ({ timer = 60, handleNext }: Props) => {
  const [seconds, setSeconds] = useState(timer); // Initial countdown time in seconds

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1; // Decrement seconds by 1 if greater than 0
        } else {
          clearInterval(timer); // Clear interval when seconds reach 0
          handleNext(); // Execute function when timer ends
          return 0;
        }
      });
    }, 1000); // Update every 1 second

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []); // Runs only once after the initial render

  // Format the remaining time for display
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box>
      <Text>{formatTime(seconds)}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 36,
  },
});

export default CountTimer;
