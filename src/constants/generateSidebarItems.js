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
      href: `/dashboard/user-manage`,
      label: "user manage",
    },
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
  const superAdminSidebar = [
    {
      href: `/dashboard/seeting`,
      label: "Profile Seeting",
    },
    {
      href: `/dashboard/user-manage`,
      label: "user manage",
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
    {
      href: `/dashboard/faq`,
      label: "Blog",
    },
    {
      href: `/dashboard/faq`,
      label: "Customer Feedback",
    },
  ];

  if (role == USER_ROLE.USER) return defaultSideBar;
  if (role == USER_ROLE.ADMIN) return adminSidebar;
  if (role == USER_ROLE.SUPER_ADMIN) return superAdminSidebar;
};
