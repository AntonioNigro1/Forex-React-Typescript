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
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { useAuth } from '../../contexts/Auth/Auth';
import { Drawer, Header } from "../../core/components";
import { baseURL } from "../../core/services/api";
import { TitleComponent } from "../../pageComplements/deposit/styles";
import { Container } from "../../pageComplements/home/styles";

const Deposit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currency, setCurrency] = useState<number | string>(0);
  const [checkedUsd, setCheckedUsd] = useState(false);
  const [checkedGbp, setCheckedGbp] = useState(false);
  const authContext = useAuth();
  const router = useRouter();
  const toast = useToast();
  
  useEffect(() => {
    if(!authContext.auth) router.push({pathname:"/Login"})
  }, [authContext.auth]);

  const handleDrawer = () => {
    onOpen();
  };

  

  const handleDeposit = async () => {
    try {
      if(!checkedUsd && !checkedGbp){
        throw Error;
      }
      await fetch(`${baseURL}/deposit`, {
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
        title: "Deposit made successefuly",
        description: "Your money was deposited",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Failed to deposit",
        description: "Your money wasnt deposited, check your credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} />
      <Container>
        <Header handleDrawerButton={handleDrawer} />
      </Container>

      <Stack spacing={10} alignItems="center">
        <TitleComponent>Deposit</TitleComponent>
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
            <BiDollar size={20} />
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
          Deposit!
        </Button>
      </Stack>
    </>
  );
};

export default Deposit;
