import { StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Text } from '@gluestack-ui/themed'
import PuzzleGame from '../../components/common/PuzzleGame'
import { PuzzlePieces } from 'react-native-picture-puzzle'
import { modePuzzle } from '../../db/puzzle'
import PuzzleModal from '../../components/common/PuzzleModal'

type Props = {}

const PuzzleScreen = (props: Props) => {
  const [pieces, setPieces] = React.useState<PuzzlePieces>(modePuzzle('easy'));
  const [show, setShow] = useState(false)
  const source = React.useMemo(() => ({
    uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  }), []);

  const handleHint = () => {
    setShow(true)
  }
  return (
    <Box>
      <PuzzleModal show={show} setShow={setShow} source={source} />
      <PuzzleGame pieces={pieces} setPieces={setPieces} source={source} />
      <Button onPress={handleHint}>
        <Text>Hint</Text>
      </Button>
    </Box>
  )
}

export default PuzzleScreen

const styles = StyleSheet.create({})