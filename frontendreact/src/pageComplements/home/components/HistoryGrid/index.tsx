import { Box, WrapItem } from "@chakra-ui/react";
import React from "react";
import { HistoryItem } from "../HistoryItem";
import { Container, Grid } from "./styles";

interface HistoryGridProps {
  Items: null;
  Icons: boolean;
}
const HistoryGrid = ({ Items, Icons }: HistoryGridProps) => {
  
  const ItemMap = (results: any[]) => {
    if (results[0]?.items !== undefined) {
      return results.map((data, index) => {
        if (data.items?.name == undefined) {
          return <div style={{ height: "0" }} />;
        }
        return (
          <WrapItem key={index + data.items?.name}>
            <HistoryItem
              index={index}
              transaction={data.items.item}
              icon={data.items.icon}
            />
          </WrapItem>
        );
      });
    }
    return results.map((data, index) => {
      // console.log(item)
      return (
        <WrapItem key={index + data.name}>
          <HistoryItem
            index={index}
            transaction={data.items.item}
            icon={data.items.icon}
          />
        </WrapItem>
      );
    });
  };

  return (
    <Container>
      <Grid spacingX="20px" spacingY="30px" justify="center">
      </Grid>
    </Container>
  );
};

export default HistoryGrid;
