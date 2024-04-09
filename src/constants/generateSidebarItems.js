import { USER_ROLE } from "./role";

export const generateSidebarItems = (role) => {
  const defaultSideBar = [
    {
      id: "dashboard",
      title: "Dasbord",
      name: "dasbor",
      parent: true,
      icon: "transaksi",
      link: "/dashboard",
    },
    {
      id: "profile",
      title: "Profile Seeting",
      name: "Profile Seeting",

      icon: "perusahaan",
      link: "/dashboard/profileSeeting",
    },
    {
      id: "booking",
      title: "Booking List",
      name: "Booking List",
      parent: true,
      icon: "mou",
      link: "/dashboard/bookingList",
    },
  ];
  const adminSidebar = [
    ...defaultSideBar,
    {
      id: "user",
      title: "User Management",
      name: "User management",
      parent: true,
      icon: "mou",
      link: "/dashboard/user-manage",
    },
    {
      id: "service",
      title: "Service List",
      name: "Service List",
      parent: true,
      icon: "mou",
      link: "/dashboard/serviceList",
    },

    {
      id: "faq",
      title: "FAQ",
      name: "FAQ",
      parent: true,
      icon: "pusatunduhdata",
      link: "/dashboard/faq",
    },
  ];

  if (role == USER_ROLE.USER) return defaultSideBar;
  if (role == USER_ROLE.ADMIN || role == USER_ROLE.SUPER_ADMIN)
    return adminSidebar;
};
