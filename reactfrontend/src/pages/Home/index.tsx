import React from "react";

import { Header, Carousel, Drawer } from "../../core/components";
import { Container } from "../../pageComplements/home/styles";
import { useDisclosure } from "@chakra-ui/react";

const HomeComponent = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDrawer = () => {
    onOpen();
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} />
      <Container>
        <Header handleFilterButton={handleDrawer} />
        <Carousel />
      </Container>
    </>
  );
};

export default HomeComponent;
