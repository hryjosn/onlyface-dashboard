export const menuData = [
  {
    label: "Dashboard",
    icon: "tabler:dashboard",
    children: [
      {
        label: "Analysis",
        isActive: true,
        link: "/dashboard/analysis",
      },
      {
        label: "Workbench",
        link: "/dashboard/workbench",
      },
    ],
  },
  {
    label: "System",
    icon: "tabler:settings",
    children: [
      {
        label: "Users",
        link: "/system/users",
      },
      {
        label: "Roles",
        link: "/system/roles",
      },
      {
        label: "Menu",
        icon: "tabler:menu-2",
        children: [
          {
            label: "Menu List",
            link: "/system/menus/list",
          },
          {
            label: "Add Menu",
            link: "/system/menus/add",
          },
        ],
      },
    ],
  },
]

export const singleLevelData = [
  {
    label: "Home",
    icon: "tabler:home",
    link: "/home",
  },
  {
    label: "User Profile",
    icon: "tabler:user",
    link: "/profile",
    isActive: true,
  },
]
