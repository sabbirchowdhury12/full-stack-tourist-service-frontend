import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  getAccessToken,
  getDecodedeAccessToken,
} from "src/utiles/localStorage";
import { generateSidebarItems } from "src/constants/generateSidebarItems";

export function MultiLevelSidebar({ children }) {
  const [open, setOpen] = React.useState(0);
  const [sidebarItems, setSidebarItems] = useState([]);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    // This useEffect runs on the client side
    const user = getDecodedeAccessToken();
    const items = generateSidebarItems(user?.role);
    console.log(items);
    setSidebarItems(items);
  }, []);

  console.log(sidebarItems);

  return (
    <div className="grid grid-cols-5 gap-5">
      <Card className="h-screen col-span-1 p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Analytics
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Reporting
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Projects
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {sidebarItems?.map((item) => {
            return (
              <Link href={`${item.href}`}>
                <ListItem>
                  <ListItemPrefix>
                    <InboxIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  {item.label}
                </ListItem>
              </Link>
            );
          })}

          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      <div className="col-span-4">{children}</div>
    </div>
  );
}
