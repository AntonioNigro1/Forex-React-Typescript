import { Button } from "@chakra-ui/react";
import Link from "next/link";
import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

export const ButtonComponent = styled(Button).attrs(({ size, colorSchema, variant }) => ({
  size: "lg",
  colorSchema: "blue",
  variant: "solid",
}))`
  margin-top: 60px;
  width: 100%;
`;