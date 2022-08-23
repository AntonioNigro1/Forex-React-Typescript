import React, { useState } from "react";

import { TabsGrid } from "../../core/components";
import { HistoryGrid } from "../../pageComplements/home/components";

const History = () => {
  const [filtersActiveds, setFiltersActiveds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("");

  return (
    <div>
      {filtersActiveds.length == 0 ? (
        <HistoryGrid />
      ) : (
        <TabsGrid
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          filtersActiveds={filtersActiveds}
        />
      )}
    </div>
  );
};

export default History;
