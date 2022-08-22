import React from "react";

import {
  Container,
  Content,
  ContentImage,
  ImageLogo,
  FilterButton,
} from "./styles";
import { LogoMoney, LogoConfig } from "../../../assets";
import Image from "next/image";

interface IHeaderProps {
  handleFilterButton: () => void;
}

const Header = ({ handleFilterButton }: IHeaderProps) => {
  return (
    <Container>
      <Content>
        <ContentImage>
          <ImageLogo height="80%" src={LogoMoney} />
        </ContentImage>

        <FilterButton onClick={handleFilterButton}>
          <Image src={LogoConfig} />
        </FilterButton>
      </Content>
    </Container>
  );
};

export default Header;
