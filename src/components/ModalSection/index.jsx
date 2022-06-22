import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

const ModalSection = ({ isOpen, onClose, title, desc }) => {
  return (
    <>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign="left" dangerouslySetInnerHTML={{ __html: desc }} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSection;
