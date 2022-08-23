import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Drawer, Header } from "../../core/components";
import { TitleComponent } from "../../pageComplements/deposit/styles";
import { Container } from "../../pageComplements/home/styles";

const Exchange = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDrawer = () => {
    onOpen();
  };
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} />
      <Container>
        <Header handleFilterButton={handleDrawer} />
      </Container>

      <Stack spacing={10} alignItems="center">
        <TitleComponent>Exchange</TitleComponent>

        <Checkbox defaultValue={0}>From USD to GBP</Checkbox>
        <Checkbox defaultValue={0}>From GBP to USD</Checkbox>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            $
          </InputLeftElement>
          <Input
            placeholder="Enter amount"
            style={{ width: "50%", margin: "0 auto" }}
          />
          <InputRightElement />
        </InputGroup>
        <Button colorScheme="teal" variant="outline">
          Exchange!
        </Button>
      </Stack>
    </>
  );
};

export default Exchange;
