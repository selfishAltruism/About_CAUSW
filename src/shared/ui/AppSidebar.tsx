import { Home, User2, Building2 } from "lucide-react";
import Link from "next/link";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/shared/shadcn/components/ui/sidebar";

// Menu items.
const items = [
    {
        title: "What is CAUSW?",
        url: "/",
        icon: Home,
    },
    {
        title: "Who is making CAUSW?",
        url: "/member/2025",
        icon: User2,
    },
    {
        title: "Who supported CAUSW?",
        url: "/ccssaa",
        icon: Building2,
    },
];

export function AppSidebar() {
    return (
        <Sidebar variant="floating">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sub">
                        About CAUSW
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuButton asChild className="text-gray-400">
                    <a
                        href="https://github.com/selfishAltruism"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <User2 />
                        <span>Who made this?</span>
                    </a>
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    );
}
