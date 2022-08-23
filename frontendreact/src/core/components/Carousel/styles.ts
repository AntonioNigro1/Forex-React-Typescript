import Carousel from "nuka-carousel";
import styled from "styled-components";
import Image from "next/image";
import { colors } from "../../helpers";


export const Container = styled.div`
  background-color: ${colors().background};
  width: 95%;
  padding: 2vh 5%;
  border-radius: 30px;
  margin: 0 2.5%;

  @media (min-width: 920px) {
    margin-top: 2vh;
  }
`;

export const StyledCarousel = styled(Carousel)`
  align-items: center;
  justify-content: center;
`;

export const DivComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: saturate(0.5);
  border-radius: 8px;
  background-color: #00a1ff;
`;

export const PComponent = styled.h3`
  font-size: 50px;
  font-family: "Roboto";
  font-weight: bold;
  color: white;
`;
