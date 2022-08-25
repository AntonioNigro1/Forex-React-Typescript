import React, { useEffect } from "react";

import { Header, Carousel, Drawer } from "../../core/components";
import { useDisclosure } from "@chakra-ui/react";
import { useAuth } from '../../contexts/Auth/Auth';
import { useRouter } from 'next/router';

const HomeComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authContext = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!authContext.auth) router.push({pathname:"/Login"})
  }, [authContext.auth]);

  const handleDrawer = () => {
    onOpen();
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} />
      <div>
        <Header handleDrawerButton={handleDrawer} />
        <Carousel />
      </div>
    </>
  );
};

export default HomeComponent;
