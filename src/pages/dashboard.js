import React from "react";
import {
  DashboardLayout,
  MultiLevelSidebar,
} from "src/components/layout/DashBoardLayout";
import RootLayout from "src/components/layout/RootLayout";

const dashboard = () => {
  return <div>this is my dashboas</div>;
};

export default dashboard;

dashboard.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MultiLevelSidebar>{page}</MultiLevelSidebar>
    </RootLayout>
  );
};
