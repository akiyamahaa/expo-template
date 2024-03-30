import { ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { Box, Image, Text } from "@gluestack-ui/themed";

export interface MemberImageProps {
  image: ImageSourcePropType;
  name?: string;
  wrapperStyle?: any;
}

export default function MemberImage(props: MemberImageProps) {
  const { image, name, wrapperStyle } = props;

  return (
    <Box rounded={'$2xl'} overflow="hidden" height={'$56'}>
      <Image source={image} w='$full' alt="Animal" h={'$full'} />
      {name && (
        <Box style={styles.box}>
          <Text bold>{name}</Text>
        </Box>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    overflow: "hidden",
    width: "100%",
    height: 275,
  },
  box: {
    width: "90%",
    height: 50,
    backgroundColor: "#F2F2F2",
    position: "absolute",
    bottom: 42,
    left: "5%",
    borderRadius: 5,
    justifyContent: "center",
    paddingLeft: 16,
    opacity: 0.85,
  },
});
