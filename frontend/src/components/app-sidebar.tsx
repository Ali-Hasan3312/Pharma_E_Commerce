
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface SubMenuItems{
  title: string;
  url:string;
  icon:ReactElement;
}

interface SidebarProps{
  heading: string;
  headingIcon: ReactElement;
  headinglink: string;
  subitems?: SubMenuItems[]
}
interface SidebarProps2{
  SidebarItems?: SidebarProps[]
}

export function AppSidebar({SidebarItems}: SidebarProps2) {
  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-4">
          {SidebarItems?.map((i)=>(

          <SidebarGroupContent key={i.heading}>
           <div className="flex items-center gap-2">
            {i.headingIcon}
           <Link className="text-lg" to={i.headinglink}>{i.heading}</Link>
           </div>
            <SidebarMenu className="mt-2">
              {i.subitems?.map((i2) => (
                <SidebarMenuItem key={i2.title}>
                  <SidebarMenuButton asChild>
                    <Link to={i2.url}>
                      {i2.icon}
                      <span>{i2.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
