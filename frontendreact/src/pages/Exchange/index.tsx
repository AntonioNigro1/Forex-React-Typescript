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
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/Auth/Auth";
import { Drawer, Header } from "../../core/components";
import { baseURL, wsURL } from '../../core/services/api';
import { TitleComponent } from "../../pageComplements/deposit/styles";
// import WebSocket from 'ws';

const Exchange = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currency, setCurrency] = useState<number | string>(0);
  const authContext = useAuth();
  const [checkedUsd, setCheckedUsd] = useState(false);
  const [checkedGbp, setCheckedGbp] = useState(false);
  const router = useRouter();
  const toast = useToast();
  
// const socket = new WebSocket(`ws${baseURL}`);
  
  const handleExchange = async () => {
    try{
      if(checkedUsd){
        const data:string = 'USD' + currency;
        //  socket.send(data);
      }
      if(checkedGbp){
        const data:string = 'GBP' + currency;
        //  socket.send(data);
      }
      
      await fetch(`${baseURL}/exchange`, {
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
        title: "Exchange made successefuly",
        description: "Your money was exchanged",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }catch(error) {
      toast({
        title: "Failed to exchange",
        description: "Your money wasnt Exchanged, check your credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    if (!authContext.auth) router.push({ pathname: "/Login" });
  }, [authContext.auth]);

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

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} />
      <div>
        <Header handleDrawerButton={handleDrawer} />
      </div>

      <Stack spacing={10} alignItems="center">
        <TitleComponent>Exchange</TitleComponent>

        <Checkbox
          isChecked={checkedUsd}
          onChange={(e) => handleCheckBoxChage("USD")}
        >
          From USD to GBP
        </Checkbox>
        <Checkbox
          isChecked={checkedGbp}
          onChange={(e) => handleCheckBoxChage("GBP")}
        >
          From GBP to USD
        </Checkbox>

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
        <Button colorScheme="teal" variant="outline" onClick={handleExchange}>
          Exchange!
        </Button>
      </Stack>
    </>
  );
};

export default Exchange;
