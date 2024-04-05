import { StyleSheet } from 'react-native'
import React from 'react'
import { CloseIcon, Icon, Image, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalHeader, Text, VStack } from '@gluestack-ui/themed';

type Props = {
  show: boolean;
  setShow: any;
  source: { uri: string; };
}

const PuzzleModal = ({ show, setShow, source }: Props) => {
  return (
    <Modal
      isOpen={show}
      onClose={() => {
        setShow(false)
      }}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader justifyContent='flex-end'>
          <ModalCloseButton borderWidth={1}>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <VStack alignItems='center'>
            <Image source={source} alt='result-img' height={300} aspectRatio="1" borderRadius={8} />
            <Text mt='$2' textAlign='center'>Reptile</Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default PuzzleModal

const styles = StyleSheet.create({})