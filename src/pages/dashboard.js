import React from "react";
import {
  DashboardLayout,
  MultiLevelSidebar,
} from "src/components/layout/DashBoardLayout";
import RootLayout from "src/components/layout/RootLayout";

const dashboard = () => {
  return <div className="text-center">COMING SOON.......</div>;
};

export default dashboard;

dashboard.getLayout = function getLayout(page) {
  return <MultiLevelSidebar>{page}</MultiLevelSidebar>;
};
