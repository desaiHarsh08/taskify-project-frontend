import { useEffect } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IoPeopleSharp, IoSettings } from "react-icons/io5";
import { MdDeveloperBoard } from "react-icons/md";
import { RiDropdownList } from "react-icons/ri";
import { RxActivityLog } from "react-icons/rx";
import { TbParentheses, TbReportAnalytics } from "react-icons/tb";
import { VscNotebookTemplate } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const navGroups = [
  {
    type: "Home",
    links: [
      { path: "/home", label: "Taskboard", icon: <MdDeveloperBoard style={{ fontSize: "20px" }} /> },
      { path: "create-task", label: "Create Task", icon: <AiFillFileAdd /> },
      { path: "add-customer", label: "Add Customer", icon: <IoPeopleSharp /> },
      { path: "activity-logs", label: "Activity Logs", icon: <RxActivityLog /> },
      { path: "reports", label: "Reports", icon: <TbReportAnalytics /> },
    ],
  },
  {
    type: "Masters",
    links: [
      { path: "customers", label: "Customers", icon: <IoIosPeople /> },
      { path: "parent-companies", label: "Parent Companies", icon: <TbParentheses /> },
      { path: "dropdowns", label: "Dropdowns", icon: <RiDropdownList /> },
    ],
  },
  {
    type: "Settings",
    links: [
      { path: "user-settings", label: "User Settings", icon: <IoSettings /> },
      { path: "templates", label: "Templates", icon: <VscNotebookTemplate /> },
    ],
  },
];

export default function NavMain() {
  const { pathname } = useLocation();

  useEffect(() => {
    navGroups.forEach((group) => {
      group.links.forEach((link) => {
        if (pathname.includes(link.path) || pathname.includes(link.path + "/")) {
          const pageName = link.label === "Taskboard" ? "Home" : link.label;
          document.title = `${pageName} | Taskify Software`;
        }
      });
    });
  }, [pathname]);

  return (
    <>
      {navGroups.map((navGroup) => (
        <SidebarGroup key={navGroup.type}>
          <SidebarGroupLabel>{navGroup.type}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navGroup.links.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild tooltip={item.label} isActive={pathname.includes(item.path)}>
                    <Link to={item.path} className="text-[16px]">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                  {navGroup.type === "Masters" && <SidebarMenuBadge>23</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
}
