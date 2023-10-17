import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
} from "@material-tailwind/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MultiLevelSidebar } from "src/components/layout/DashBoardLayout";
import RootLayout from "src/components/layout/RootLayout";
import {
  useCancelBookingMutation,
  useGetBookingQuery,
} from "src/redux/api/bookApi";
import formatDate from "src/utiles/formatedDate";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Canceled",
    value: "cancel",
  },
];

const TABLE_HEAD = ["Name", "Service", "Status", ""];

export function BookingList() {
  const [statusValue, setStatusValue] = useState("all");
  console.log(statusValue);
  const { data } = useGetBookingQuery(statusValue);
  console.log(data);
  const [cancelBooking] = useCancelBookingMutation();

  const handleCancelBooking = async (id) => {
    const result = await cancelBooking(id).unwrap();
    console.log(result);

    if (result.success == true) {
      toast.success(result.message);
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <Card className="h-full w-full">
      <Toaster />
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Booking list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab
                  onClick={() => setStatusValue(value)}
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
            {data?.data?.map(({ id, status, date, user, service }, index) => {
              const startDate = formatDate(date.startDate);
              const endDate = formatDate(date.endDate);

              const isLast = index === data?.data?.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={user?.image} alt={name} size="sm" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user?.name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {user?.email}
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
                        {service.service_name}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {startDate} to {endDate}
                      </Typography>
                    </div>
                  </td>
                  {/* <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={active ? "online" : "offline"}
                        color={active ? "green" : "blue-gray"}
                      />
                    </div>
                  </td> */}
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {status}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {status && status == "cancel" ? (
                      <Typography variant="">Canceled</Typography>
                    ) : (
                      <button onClick={() => handleCancelBooking(id)}>
                        <Typography variant="text">Cancel</Typography>
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default BookingList;
BookingList.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MultiLevelSidebar>{page}</MultiLevelSidebar>
    </RootLayout>
  );
};
