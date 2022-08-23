import React from "react";

import { Container, ContentImage, ImageLogo } from "./styles";
import { LogoMoney } from "../../../../assets";
import { useRouter } from "next/router";

interface IHeaderProps {}

export const Header = () => {
  const router = useRouter();
  return (
    <Container>
      <ContentImage
        onClick={() => {
          router.push("/");
        }}
      >
        <ImageLogo height="100%" src={LogoMoney} />
      </ContentImage>
    </Container>
  );
};
