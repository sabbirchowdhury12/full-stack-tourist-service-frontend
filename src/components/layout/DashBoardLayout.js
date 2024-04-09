import React, { useEffect, useState } from "react";

import { getDecodedeAccessToken } from "src/utiles/localStorage";
import { generateSidebarItems } from "src/constants/generateSidebarItems";
import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";

export function MultiLevelSidebar({ children }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(0);
  const [sidebarItems, setSidebarItems] = useState([]);
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    const user = getDecodedeAccessToken();
    const items = generateSidebarItems(user?.role);

    setSidebarItems(items);
  }, []);

  return (
    <div className="relative min-h-screen flex">
      <Sidebar setExpand={setSideMenuIsExpand} />

      <div
        className={`w-full min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out mt-10 ${
          sideMenuIsExpand ? "ml-72" : "ml-20"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
