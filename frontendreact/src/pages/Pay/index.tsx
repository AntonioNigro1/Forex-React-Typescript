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
import { baseURL } from "../../core/services/api";
import { TitleComponent } from "../../pageComplements/deposit/styles";
import { Container } from "../../pageComplements/home/styles";

const Pay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState<string>();
  const [currency, setCurrency] = useState<number | string>(0);
  const [checkedUsd, setCheckedUsd] = useState(false);
  const [checkedGbp, setCheckedGbp] = useState(false);
  const authContext = useAuth();
  const router = useRouter();
  const toast = useToast();

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

  const handlePay = async () => {
    try {
      await fetch(`${baseURL}/pay`, {
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
        title: "Payment made successefuly",
        description: "The money has been sent ",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

    } catch (error) {
      toast({
        title: "Failed to make payment",
        description: "The money was not sent ",
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
        <Header handleDrawerButton={handleDrawer} />
      </Container>

      <Stack spacing={10} alignItems="center">
        <TitleComponent>Pay</TitleComponent>
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
          ></InputLeftElement>
          <Input
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
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
        <Button colorScheme="teal" variant="outline" onClick={handlePay}>
          Send!
        </Button>
      </Stack>
    </>
  );
};

export default Pay;
