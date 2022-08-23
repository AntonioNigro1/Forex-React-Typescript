import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Drawer, Header } from "../../core/components";
import { baseURL } from '../../core/services/api';
import { TitleComponent } from "../../pageComplements/deposit/styles";
import { Container } from "../../pageComplements/home/styles";

const Withdraw = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currency, setCurrency] = useState<number | string>(0);
  const [checkedUsd, setCheckedUsd] = useState(false);
  const [checkedGbp, setCheckedGbp] = useState(false);
  const toast = useToast();
  const handleDrawer = () => {
    onOpen();
  };
  const handleCheckBoxChage = (source: string) => {
    if (source === "USD") {
      setCheckedGbp(false);
      setCheckedUsd(!checkedUsd);
    } else if (source === "GBP") {
      setCheckedUsd(false);
      setCheckedGbp(!checkedGbp);
    }
  };

  const handleDeposit = async () => {
    try {
      const res = await fetch(`${baseURL}/withdraw`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          sender_id: "62fe55a52d34aedf5e11a44e",
          receiver_id: "62fe55a52d34aedf5e11a44e",
          usd: checkedUsd ? currency : 0,
          gbp: checkedGbp ? currency : 0,
        }),
      });

      toast({
        title: "Withdraw made successefuly",
        description: "Your money was whithdrawn",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      //console.log(res);
    } catch (error) {
      toast({
        title: "Failed to withdraw",
        description: "Your money wasnt withdrawn, check your credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} />
      <Container>
        <Header handleFilterButton={handleDrawer} />
      </Container>

      <Stack spacing={10} alignItems="center">
        <TitleComponent>Withdraw</TitleComponent>
        <Container>
        <Checkbox
            style={{ marginRight: 15 }}
            isChecked={checkedUsd}
            onChange={(e) => handleCheckBoxChage("USD")}
          >
            USD
          </Checkbox>
          <Checkbox
            isChecked={checkedGbp}
            onChange={(e) => handleCheckBoxChage("GBP")}
          >
            GBP
          </Checkbox>
        </Container>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            $
          </InputLeftElement>
          <Input
            maxLength={6}
            value={currency}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCurrency(
                !isNaN(parseInt(e.target.value)) ? parseInt(e.target.value) : 0
              )
            }
            style={{ width: "50%", margin: "0 auto" }}
          />
          <InputRightElement />
        </InputGroup>
        <Button colorScheme="teal" variant="outline" onClick={handleDeposit}>
          Withdraw!
        </Button>
      </Stack>
    </>
  );
};

export default Withdraw;
