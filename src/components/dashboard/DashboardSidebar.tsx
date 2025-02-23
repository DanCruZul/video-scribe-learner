
import React from 'react';
import { 
  Sidebar, 
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '../ui/sidebar';
import { Upload, Library, Settings } from 'lucide-react';

const DashboardSidebar = () => {
  const menuItems = [
    { icon: Upload, label: 'Upload Content', href: '/dashboard/upload' },
    { icon: Library, label: 'Library', href: '/dashboard/library' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' }
  ];

  return (
    <Sidebar>
      <div className="flex h-16 items-center px-4 border-b">
        <SidebarTrigger />
      </div>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild>
                <a href={item.href} className="flex items-center gap-3 px-3 py-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
