import { useEffect } from "react";
import { AiOutlineHome, AiOutlineFileAdd, AiOutlineSetting } from "react-icons/ai";
import { BsPeople, BsGraphUp } from "react-icons/bs";
import { FaBuilding, FaTasks } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { MdOutlineReport } from "react-icons/md";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
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
      { path: "/home", label: "Taskboard", icon: <FaTasks className="text-xl" /> },
      { path: "create-task", label: "Create Task", icon: <AiOutlineFileAdd className="text-xl" /> },
      { path: "add-customer", label: "Add Customer", icon: <BsPeople className="text-xl" /> },
      { path: "activity-logs", label: "Activity Logs", icon: <FiActivity className="text-xl" /> },
      { path: "reports", label: "Reports", icon: <MdOutlineReport className="text-xl" /> },
    ],
  },
  {
    type: "Masters",
    links: [
      { path: "customers", label: "Customers", icon: <BsPeople className="text-xl" /> },
      { path: "parent-companies", label: "Parent Companies", icon: <FaBuilding className="text-xl" /> },
      { path: "dropdowns", label: "Dropdowns", icon: <RiMenuUnfoldLine className="text-xl" /> },
    ],
  },
  {
    type: "Settings",
    links: [
      { path: "user-settings", label: "User Settings", icon: <AiOutlineSetting className="text-xl" /> },
      { path: "templates", label: "Templates", icon: <SiGoogleanalytics className="text-xl" /> },
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
                  <SidebarMenuButton
                    asChild
                    tooltip={item.label}
                    isActive={pathname.endsWith(item.path) || pathname.endsWith(`${item.path}/`)}
                  >
                    <Link to={item.path} className="flex items-center gap-2 text-[16px]">
                      <span>{item.icon}</span>
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
