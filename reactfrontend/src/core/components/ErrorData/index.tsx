import Image from "next/image";
import React from "react";
import { Container, ErrorText } from "./styles";
import ErrorImage from "../../../assets/errorImage.svg";

const ErrorData = () => {
  return (
    <Container>
      <Image src={ErrorImage} width="500px" height="500px" />
      <ErrorText>Erro ao carregar a Página</ErrorText>
    </Container>
  );
};

export default ErrorData;
