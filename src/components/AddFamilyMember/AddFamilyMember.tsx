import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  ModalBody,
  Button,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import React, { useState, ReactElement } from "react";

interface AdditionalFamilyProps {
  isOpen: Boolean;
  onClose: () => void;
  onSubmit: (familyMemberName: string) => void;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

const AddFamilyMember: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  return (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Add Family Member</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <FormLabel> Family Member</FormLabel>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="green" onClick={() => onSubmit(name)} disabled={!name}>
          Add
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  );
};

export default AddFamilyMember;
