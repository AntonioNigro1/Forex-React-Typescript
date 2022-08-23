import React from "react";
import { HistoryGrid } from "../../../pageComplements/home/components";
import {
  Container,
  TabSelectorContainer,
  TabSelectorText,
  ContentTop,
  ContentBottom,
} from "./styles";
interface IHistoryTabsGrid {
  filtersActiveds: string[];
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}

const TabsGrid = ({
  filtersActiveds,
  setActiveTab,
  activeTab,
}: IHistoryTabsGrid) => {

  const TabSelector = (props: { label: string }) => {
    const { label } = props;
    return (
      <TabSelectorContainer
        onClick={() => {
          setActiveTab(label);
        }}
        isActive={activeTab == label}
      >
        <TabSelectorText isActive={activeTab == label}>{label}</TabSelectorText>
      </TabSelectorContainer>
    );
  };
  return (
    <Container>
      <ContentTop>
        {filtersActiveds.map((item, index) => (
          <TabSelector key={index + item} label={item} />
        ))}
      </ContentTop>
      <ContentBottom>
        <HistoryGrid filtersActiveds />
      </ContentBottom>
    </Container>
  );
};

export default TabsGrid;
