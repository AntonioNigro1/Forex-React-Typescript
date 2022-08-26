import { useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Container, StyledCarousel, DivComponent, PComponent } from "./styles";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BiHistory } from "react-icons/bi";
import { useRouter } from "next/router";

const Carousel = () => {
  const [slideToShow, setSlideToShow] = useState(1);
  const [isLargerThan1400] = useMediaQuery("(min-width: 1400px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const router = useRouter();

  useEffect(() => {
    if (
      [isLargerThan1400, isLargerThan700].toString() == [true, true].toString()
    ) {
      setSlideToShow(3);
    }
    if (
      [isLargerThan1400, isLargerThan700].toString() == [false, true].toString()
    ) {
      setSlideToShow(2);
    }
    if (
      [isLargerThan1400, isLargerThan700].toString() ==
      [false, false].toString()
    ) {
      setSlideToShow(1);
    }
  }, [isLargerThan1400, isLargerThan700]);

  return (
    <Container>
      <StyledCarousel
        wrapAround={true}
        animation="zoom"
        slidesToShow={slideToShow}
        withoutControls
        autoplay
      >
        <DivComponent
          onClick={() => {
            router.push({ pathname: "/Deposit" });
          }}
        >
          <GiPayMoney size={"60%"} color="white" />
          <PComponent>Deposit</PComponent>
        </DivComponent>
        <DivComponent
          onDoubleClick={() => {
            router.push({ pathname: "/Withdraw" });
          }}
        >
          <GiReceiveMoney size={"60%"} color="white" />
          <PComponent>WithDraw</PComponent>
        </DivComponent>
        <DivComponent
          onDoubleClick={() => {
            router.push({ pathname: "/Exchange" });
          }}
        >
          <RiExchangeDollarFill size={"60%"} color="white" />
          <PComponent>Exchange</PComponent>
        </DivComponent>
        <DivComponent
          onDoubleClick={() => {
            router.push({ pathname: "/History" });
          }}
        >
          <BiHistory size={"60%"} color="white" />
          <PComponent>History</PComponent>
        </DivComponent>
      </StyledCarousel>
    </Container>
  );
};

export default Carousel