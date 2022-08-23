import React, { useEffect, useState } from "react";
import {
  returnId,
  capitalizeFirstLetter,
  checkDevice,
} from "../../../../core/hooks";
import {
  Container,
  Content,
  StyledSpinner,
  ContentImage,
  ContentBottom,
  BaseExperienceContainer,
  BaseExperienceLabel,
  AbilityLabel,
  HistImage,
  HistName,
} from "./styles";
import {
  Box,
  Collapse,
  SimpleGrid,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { HistItemData } from "../../../../core/interfaces";
import { useRouter } from "next/router";
import axios from "axios";
interface IHistoryItemProps {
  index: number;
  transaction: {
    sender_id: string;
    receiver_id: string;
    date: Date;
    usd?: number;
    gbp?: number;
  };
  icon: JSX.Element;
}
export const HistoryItem = (props: IHistoryItemProps) => {
  const { index } = props;

  const router = useRouter();

  let isDevice = false;

  if (typeof window !== "undefined") {
    isDevice = checkDevice(window);
  }

  const [histItem, setHistItem] = useState<{
    error: boolean;
    isLoaded: boolean;
    data: HistItemData[];
  }>({ error: false, isLoaded: false, data: [] });

  const { isOpen, onToggle } = useDisclosure();

  const getHistory = async () => {
    try {
      const { data } = await axios.get("");
      console.log(data);
      setHistItem({ error: false, isLoaded: true, data });
    } catch (error) {
      setHistItem({ error: true, isLoaded: true, data: [] });
    }
  };
  useEffect(() => {
    getHistory();
  }, [props]);
  return (
    <>
      {!histItem.isLoaded ? (
        <StyledSpinner
          thickness="4px"
          speed="0.80s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <></>
      )}
      <Skeleton
        key={index }
        isLoaded={histItem.isLoaded}
        color="white"
        fadeDuration={2}
      >
        <Container
          boxShadow={isOpen ? "lg" : ""}
          rounded="md"
          bg="white"
          onMouseEnter={() => {
            onToggle();
          }}
          onMouseLeave={() => {
            onToggle();
          }}
          onClick={() => {
            if (!isDevice) {
              router.push({
                pathname: "",
              });
            }
          }}
        >
          <Content>
            {}
            <ContentImage>
              <HistImage isOpen={isOpen} />
            </ContentImage>
          </Content>
          <ContentBottom isOpen={isOpen}>
            <HistName></HistName>
            {histItem.data != null ? (
              <BaseExperienceContainer>
                <BaseExperienceLabel></BaseExperienceLabel>
              </BaseExperienceContainer>
            ) : (
              <></>
            )}
            <Collapse in={isOpen}>
              <Box width="300px" height="auto" bg="white">
                <HistName></HistName>
                <SimpleGrid columns={1} spacingY="5px">
                  {histItem.data.map((item, index) => {
                    return (
                      <Box
                        key={index + "Stats"}
                        paddingX="10px"
                        minHeight="40px"
                      >
                        <AbilityLabel>
                          {capitalizeFirstLetter("toni")}
                        </AbilityLabel>
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                        >
                          <h3 style={{ color: "black" }}>Qualquer coisa ai</h3>
                        </Box>
                      </Box>
                    );
                  })}
                </SimpleGrid>
                {isDevice ? (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      marginTop: "15px",
                    }}
                  ></div>
                ) : (
                  <></>
                )}
              </Box>
            </Collapse>
          </ContentBottom>
        </Container>
      </Skeleton>
    </>
  );
};

export default HistoryItem;
