import {
  Heading,
  LinkBox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stat,
  StatHelpText,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  ContentImages,
  ContentData,
  PromocaoText,
  ContentImage,
  ItemImage,
  BaseExperienceContainer,
  BaseExperienceLabel,
  ContentPrice,
  FreteText,
  EstoqueContent,
  ContentBuyButtons,
  BuyButton,
  AddInfoContent,
  InfoContent,
} from "./styles";

import { AiOutlineSafety, AiOutlineTrophy } from "react-icons/ai";
import { BsTruck, BsChevronDown, BsAward } from "react-icons/bs";
import { colors } from "../../../../core/helpers";

interface IProductContainer {
  id: number;
}

export const ProductContainer = (props: IProductContainer) => {
  const [isLargerThan1400] = useMediaQuery("(min-width: 1400px)");
  const dispacth = useDispatch();
  const [quant, setQuant] = useState({ value: 1, label: "1 unidade" });

  return (
    <Container>
      <ContentImages color={"black"}>
        <ContentImage>
          <ItemImage width="70%" src={""} />
        </ContentImage>
      </ContentImages>
      <ContentData>
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
          <Heading size="md" my="2">
            {""}
          </Heading>
          <Stat>
            <StatHelpText>$ {""}</StatHelpText>
          </Stat>
          <Heading size="lg" my="0">
            $ {""}
          </Heading>
          <PromocaoText>
            em
            <div style={{ color: "black" }}>10x {""}</div>
            <div style={{ color: "black" }} id="cents">
              00
            </div>{" "}
            <div style={{ color: "black" }}>sem juros</div>
          </PromocaoText>
        </LinkBox>
        <LinkBox
          as="article"
          maxW="sm"
          p="5"
          borderWidth="1px"
          rounded="md"
          my="5"
        >
          <Heading size="lg" my="2">
            Abilities
          </Heading>
          {
            <BaseExperienceContainer>
              <BaseExperienceLabel>Base Experience</BaseExperienceLabel>
            </BaseExperienceContainer>
          }
          <SimpleGrid columns={1} spacingY="5px"></SimpleGrid>
        </LinkBox>
      </ContentData>
      <ContentPrice>
        <LinkBox
          as="article"
          maxW="sm"
          p="5"
          borderWidth="1px"
          rounded="md"
          my="0"
        >
          <FreteText color={""}>
            <BsTruck size="20" style={{ marginRight: "10px" }} />
          </FreteText>
          <Heading size="sm" my="2">
            Estoque disponível
          </Heading>
          <EstoqueContent>
            <h1>Quatidade:</h1>
            <Menu>
              <MenuButton fontWeight="bold" fontSize="18px">
                {quant.label}
              </MenuButton>
              <MenuList>
                {[
                  { value: 1, label: "1 unidade" },
                  { value: 2, label: "2 unidades" },
                  { value: 3, label: "3 unidades" },
                  { value: 4, label: "4 unidades" },
                  { value: 5, label: "5 unidades" },
                ].map((item, index) => (
                  <MenuItem
                    key={"MenuItem" + index}
                    onClick={() => {
                      setQuant(item);
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <div id="downIcon">
              <BsChevronDown size={12} />
            </div>
            <h2>100 disponíveis</h2>
          </EstoqueContent>
          <ContentBuyButtons>
            <BuyButton backgroundColor={"gray"} color={"white"}>
              Comprar agora
            </BuyButton>
            <BuyButton backgroundColor={"gray"} color={colors().gray6}>
              Adicionar ao carrinho
            </BuyButton>
          </ContentBuyButtons>
          <AddInfoContent>
            {[
              {
                text: "Compra Garantida, receba o produto que está esperando ou devolvemos o dinheiro.",
                icon: <AiOutlineSafety />,
              },
              {
                text: "Mercado Pontos. Você acumula 4086 pontos.",
                icon: <AiOutlineTrophy />,
              },
              { text: "12 meses de garantia de fábrica.", icon: <BsAward /> },
            ].map((item, index) => {
              return (
                <InfoContent key={"AddInfoContent" + index}>
                  {item.icon}
                  <div>{item.text}</div>
                </InfoContent>
              );
            })}
          </AddInfoContent>
        </LinkBox>
      </ContentPrice>
    </Container>
  );
};
