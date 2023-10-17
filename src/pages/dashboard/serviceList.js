import React, { useState } from "react";
import { MultiLevelSidebar } from "src/components/layout/DashBoardLayout";
import RootLayout from "src/components/layout/RootLayout";
import {
  useGetCategoryServiceQuery,
  useGetServiceQuery,
} from "src/redux/api/serviceApi";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  useSelect,
} from "@material-tailwind/react";
import formatDate from "src/utiles/formatedDate";
import Link from "next/link";
import CreateService from "./service/create-service";

const TABS = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Available",
    value: "available",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
];

const TABLE_HEAD = ["Service Name", "Location", "Status", "Edit"];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];
const ServiceList = () => {
  const [serachValue, setSearchValue] = useState("");
  const [addService, setAddService] = useState(false);

  const { data, error } = useGetCategoryServiceQuery(serachValue);
  console.log(data?.data);
  if (error) {
    console.error("Error:", error);
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {addService ? (
        <CreateService />
      ) : (
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Members list
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See information about all members
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button variant="outlined" size="sm">
                  view all
                </Button>

                <Button
                  onClick={() => setAddService(true)}
                  className="flex items-center gap-3"
                  size="sm"
                >
                  Add Service
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Tabs value="all" className="w-full md:w-max">
                <TabsHeader>
                  {TABS.map(({ label, value }) => (
                    <Tab
                      onClick={() => {
                        setSearchValue(value);
                      }}
                      key={value}
                      value={value}
                    >
                      &nbsp;&nbsp;{label}&nbsp;&nbsp;
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.data?.map(
                  (
                    {
                      service_name,
                      id,
                      img,
                      location,
                      createdAt,
                      date,
                      status,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;

                    const startDate = formatDate(createdAt);

                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={id}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar src={img} alt={service_name} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {service_name}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {location}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {startDate}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {service_name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={status ? status : status}
                              color={
                                status == "upcoming" ? "green" : "blue-gray"
                              }
                            />
                          </div>
                        </td>

                        <td className={classes}>
                          <Tooltip content="Edit User">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default ServiceList;

ServiceList.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MultiLevelSidebar>{page}</MultiLevelSidebar>
    </RootLayout>
  );
};
