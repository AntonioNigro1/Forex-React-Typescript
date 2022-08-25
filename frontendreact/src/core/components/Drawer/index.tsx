import {
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer as ChakraDrawer,
  Button,
} from "@chakra-ui/react";
import React from "react";

import { ButtonComponent } from "./styles";

import { useRouter } from "next/router";

import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BiHistory } from "react-icons/bi";
import { useAuth } from '../../../contexts/Auth/Auth';
interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ isOpen, onClose }: IDrawerProps) => {
  const router = useRouter();
  const authContext = useAuth();

  const handleLogout = () => {
    authContext.signOut();
  };

  return (
    <>
      <ChakraDrawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent style={{ width: 250 }}>
          <DrawerCloseButton />
          <DrawerHeader color="blue.700" fontWeight="bold">
            Operations
          </DrawerHeader>

          <DrawerBody>
            <ButtonComponent
              onClick={() => {
                router.push({ pathname: "/Deposit" });
              }}
            >
              <GiPayMoney
                size={20}
                color="blue"
                style={{ margin: "auto 10" }}
              />
              Deposit
            </ButtonComponent>

            <ButtonComponent
              onClick={() => {
                router.push({ pathname: "/Withdraw" });
              }}
            >
              <GiReceiveMoney
                size={20}
                color="blue"
                style={{ margin: "auto 10" }}
              />
              Withdraw
            </ButtonComponent>

            <ButtonComponent
              onClick={() => {
                router.push({ pathname: "/Exchange" });
              }}
            >
              <RiExchangeDollarFill
                size={20}
                color="blue"
                style={{ margin: "auto 10" }}
              />
              Exchange
            </ButtonComponent>

            <ButtonComponent
              onClick={() => {
                router.push({ pathname: "/Pay" });
              }}
            >
              <GiTakeMyMoney
                size={20}
                color="blue"
                style={{ margin: "auto 10" }}
              />
              Pay
            </ButtonComponent>

            <ButtonComponent
              onClick={() => {
                router.push({ pathname: "/History" });
              }}
            >
              <BiHistory size={20} color="blue" style={{ margin: "auto 10" }} />
              History
            </ButtonComponent>
            <Button
              onClick={handleLogout}
              size="lg"
              colorScheme="red"
              marginTop="200px"
              width="100%"
              variant="solid"
            >
              Logout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};

export default Drawer;
