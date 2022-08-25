import React from "react";

import {
  Container,
  Content,
  ContentImage,
  ImageLogo,
  DrawerButton,
} from "./styles";
import { LogoMoney, LogoConfig } from "../../../assets";
import Image from "next/image";

interface IHeaderProps {
  handleDrawerButton: () => void;
}

const Header = ({ handleDrawerButton }: IHeaderProps) => {
  return (
    <Container>
      <Content>
        <ContentImage>
          <ImageLogo height="80%" src={LogoMoney} />
        </ContentImage>

        <DrawerButton onClick={handleDrawerButton}>
          <Image src={LogoConfig} />
        </DrawerButton>
      </Content>
    </Container>
  );
};

export default Header;
