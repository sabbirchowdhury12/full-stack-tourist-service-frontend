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
  button,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  useGetAlluserQuery,
  useMakeAdminMutation,
} from "src/redux/api/authApi";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/solid";
import RootLayout from "src/components/layout/RootLayout";
import { MultiLevelSidebar } from "src/components/layout/DashBoardLayout";
import useUserFromLocalStorage from "src/customHooks/useUserFromLocalStorage";
import { USER_ROLE } from "src/constants/role";
import toast, { Toaster } from "react-hot-toast";

const UserManage = () => {
  const { data } = useGetAlluserQuery();
  const [makeAdmin] = useMakeAdminMutation();
  const user = useUserFromLocalStorage();
  const TABLE_HEAD = ["Name", "email", "role", "address", "Edit"];

  if (user?.role == USER_ROLE.SUPER_ADMIN) {
    TABLE_HEAD.push("Make Admin");
  }

  const handleMakeAdmin = async (id) => {
    const result = await makeAdmin(id).unwrap();
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
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link href={"/dashboard/user/create-user"}>
              <Button className="flex items-center gap-3" size="sm">
                Add User
              </Button>
            </Link>
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
              ({ name, id, image, email, role, contactNo, address }, index) => {
                const isLast = index === data?.data?.length - 1;

                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={image} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
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
                          {email}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {contactNo}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {role}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {address}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <Link href={`/dashboard/user/edit-user/${id}`}>
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Link>
                      </Tooltip>
                    </td>

                    {user &&
                    user?.role == USER_ROLE.SUPER_ADMIN &&
                    role == USER_ROLE.USER ? (
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          <button
                            onClick={() => handleMakeAdmin(id)}
                            className="bg-sub_primary p-2 rounded text-white"
                          >
                            Make Admin
                          </button>
                        </Typography>
                      </td>
                    ) : (
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          ADMIN
                        </Typography>
                      </td>
                    )}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default UserManage;
UserManage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MultiLevelSidebar>{page}</MultiLevelSidebar>
    </RootLayout>
  );
};
