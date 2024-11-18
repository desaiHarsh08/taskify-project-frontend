import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import NavUser from "./NavUser";
import NavMain from "./NavMain";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="h-[58px]">
            <SidebarMenuButton asChild size={"lg"}>
              <Link to={`/home`} id="sidebar-header" className="flex items-center border py-2">
                <img
                  src="/taskify-logo.png"
                  alt="Writing pad with gear icons."
                  className="h-12 w-12 object-contain cursor-pointer"
                  onClick={toggleSidebar}
                />
                <span className="text-xl font-bold uppercase">Taskify Software</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
