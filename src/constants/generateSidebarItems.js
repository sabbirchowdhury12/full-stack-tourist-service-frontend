import { USER_ROLE } from "./role";

export const generateSidebarItems = (role) => {
  const defaultSideBar = [
    {
      href: `/dashboard/seeting`,
      label: "Profile Seeting",
    },
    {
      href: `/dashboard/bookingList`,
      label: "Profile Seeting",
    },
  ];
  const adminSidebar = [
    {
      href: `/dashboard/seeting`,
      label: "Profile Seeting",
    },
    {
      href: `/dashboard/bookingList`,
      label: "Booking List",
    },
    {
      href: `/dashboard/serviceList`,
      label: "Service List",
    },
    {
      href: `/dashboard/faq`,
      label: "FAQ",
    },
  ];

  if (role == USER_ROLE.USER) return defaultSideBar;
  if (role == USER_ROLE.ADMIN) return adminSidebar;
};
