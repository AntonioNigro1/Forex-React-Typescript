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

const Pay = () => {
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
        <TitleComponent>Pay</TitleComponent>
        <Container>
          <Checkbox style={{ marginRight: 15 }} defaultValue={0}>
            USD
          </Checkbox>
          <Checkbox defaultValue={0}>GBP</Checkbox>
        </Container>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          ></InputLeftElement>
          <Input
            placeholder="Receiving User Name"
            style={{ width: "50%", margin: "0 auto" }}
          />
          <InputRightElement />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          ></InputLeftElement>
          <Input
            placeholder="Enter amount"
            style={{ width: "50%", margin: "0 auto" }}
          />
          <InputRightElement />
        </InputGroup>
        <Button colorScheme="teal" variant="outline">
          Send!
        </Button>
      </Stack>
    </>
  );
};

export default Pay;
