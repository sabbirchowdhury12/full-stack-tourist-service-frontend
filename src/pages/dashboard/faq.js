import React from "react";
import { MultiLevelSidebar } from "src/components/layout/DashBoardLayout";

const FAQ = () => {
  return <div className="text-center">Comming Soon.....</div>;
};

export default FAQ;
FAQ.getLayout = function getLayout(page) {
  return <MultiLevelSidebar>{page}</MultiLevelSidebar>;
};
